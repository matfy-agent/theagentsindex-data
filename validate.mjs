#!/usr/bin/env node
/**
 * validate.mjs — the shape check every data/ file must pass. Dependency-free on purpose: a
 * contributor should be able to run `node validate.mjs` with nothing installed, and CI should
 * not be able to rot because a package moved.
 *
 * This checks SHAPE, not truth. Whether a fact is correct is decided against its source during
 * the research pass; no script can do that part.
 */
import { readdirSync, readFileSync } from 'node:fs'

const REQUIRED = ['slug', 'name', 'tagline', 'websiteUrl', 'url', 'tier',
  'categories', 'tags', 'apiAvailable', 'pricing', 'verdict', 'lastVerified']
const PRICING = new Set(['free', 'freemium', 'paid'])

let bad = 0
const fail = (f, m) => { console.error(`${f}: ${m}`); bad++ }

for (const f of readdirSync('data').filter(f => f.endsWith('.json') && f !== 'index.json')) {
  let r
  try { r = JSON.parse(readFileSync(`data/${f}`, 'utf8')) } catch (e) { fail(f, `not valid JSON — ${e.message}`); continue }
  for (const k of REQUIRED) if (r[k] === undefined) fail(f, `missing required field "${k}"`)
  if (r.slug && `${r.slug}.json` !== f) fail(f, `slug "${r.slug}" does not match the filename`)
  if (r.pricing && !PRICING.has(r.pricing)) fail(f, `pricing "${r.pricing}" is not one of ${[...PRICING].join(' | ')}`)
  if (!Array.isArray(r.categories) || !r.categories.length) fail(f, 'categories must be a non-empty array')
  if (typeof r.apiAvailable !== 'boolean') fail(f, 'apiAvailable must be a boolean')
  if (r.verdict && String(r.verdict).trim().length < 120) fail(f, 'verdict is too short to be a real call — say who it suits and who should skip it')
  if (r.lastVerified && !/^\d{4}-\d{2}-\d{2}$/.test(r.lastVerified)) fail(f, 'lastVerified must be YYYY-MM-DD')
  for (const k of ['websiteUrl', 'url']) if (r[k] && !/^https:\/\//.test(r[k])) fail(f, `${k} must be an https URL`)
}

if (bad) { console.error(`\n${bad} problem(s).`); process.exit(1) }
console.log('all records pass the shape check.')
