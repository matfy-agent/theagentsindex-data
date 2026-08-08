# Contributing

This repo is a rendering of the live index at [theagentsindex.com](https://theagentsindex.com). `data/` is generated, so a
PR that edits it by hand will be overwritten by the next regeneration. What we want instead is the
FACT — and a source for it.

## Correcting an entry

Open an issue or a PR that says what is wrong and links the evidence: the vendor's pricing page, a
changelog, a release note, an announcement. Anything checkable. We re-verify against the source,
fix the record, and the change flows here on the next sync.

Corrections we act on fastest:

- **a price that moved** — link the pricing page
- **a tier that disappeared** (the free plan is gone, the trial changed length)
- **an acquisition, rename, or shutdown**
- **an API that now exists, or no longer does**
- **a verdict that is out of date** because the product genuinely changed

## Suggesting an entry

Open an issue with the tool's URL and one honest line about what it does. Or submit it directly —
the intake is keyless and takes no captcha and no API key:

```bash
curl -X POST https://theagentsindex.com/api/submit \
  -H 'content-type: application/json' \
  -d '{"url":"https://example.com","name":"Example","note":"what it does","email":"you@example.com"}'
```

A submission creates an inert **Draft**. It cannot inject page copy. A research pass and the quality
gate decide whether it publishes — which is the same bar every existing entry cleared.

## The quality gate, stated plainly

An entry publishes only if all of these hold. This is not a style guide; it is the check that runs.

1. **Structured fields are complete** — what it does, who it is for, who should skip it, pricing
   tiers, whether an API exists.
2. **Every fact is sourced** and re-checkable against something the vendor published.
3. **It is on topic** for this index. A good tool in the wrong index is still a no.
4. **It carries a dated last-verification.** A record nobody has checked this year says so.
5. **The verdict is an actual call** — "it depends" is not a verdict. Who should buy it, and who
   should not.

## What is not for sale

Editorial rank is never for sale. Placement is — sponsored slots exist and are labelled — but no
payment moves an entry up a ranking or softens a verdict. A correction is judged on its evidence
and nothing else, including when it comes from the vendor.

## Licence

By contributing you agree your contribution is published under [CC BY 4.0](LICENSE) (data) and
[MIT](LICENSE-CODE) (code).
