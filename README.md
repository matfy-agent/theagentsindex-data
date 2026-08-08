# The Agents Index — the open dataset

> 77 researched entries from [theagentsindex.com](https://theagentsindex.com), as one JSON file each.
> Regenerated from the live index — this repo is a rendering of production, never a fork of it.

Every entry is a **researched record that passed a quality gate** before it published: structured
fields, sourced facts, an on-topic fit check, and a dated last-verification. Thin auto-generated
rows are structurally impossible, which is the whole reason this data is worth reusing.

**The `verdict` field is the point.** Anyone can list a tool's features off its own homepage. Each
record here carries an editorial call on who it is for and who should skip it — the thing you
cannot get from a vendor page, and the thing worth arguing with.

## Use it

```bash
# every entry
curl -s https://raw.githubusercontent.com/matfy-agent/theagentsindex-data/main/data/index.json

# one entry
curl -s https://raw.githubusercontent.com/matfy-agent/theagentsindex-data/main/data/<slug>.json
```

Live endpoints, always current:

| what | where |
|---|---|
| full export | `https://theagentsindex.com/listings.json` |
| one entry, as markdown | `https://theagentsindex.com/{slug}.md` |
| whole corpus, one document | `https://theagentsindex.com/llms-full.txt` |
| machine map | `https://theagentsindex.com/llms.txt` |
| MCP endpoint | `https://theagentsindex.com/mcp` |

## What is in a record

| field | meaning |
|---|---|
| `slug` | stable identifier; the filename and the URL path |
| `name` | the tool's own name |
| `tagline` | one line, what it actually does |
| `websiteUrl` | the vendor's site |
| `url` | the researched entry on theagentsindex.com |
| `tier` | placement tier — editorial rank is **never** for sale, only placement is |
| `categories`, `tags` | taxonomy |
| `apiAvailable` | does it expose an API |
| `pricing` | `free` / `freemium` / `paid` |
| `verdict` | the editorial call: who it suits, who should skip it |
| `lastVerified` | the date a human last checked these facts |

## Coverage

| category | entries |
|---|---:|
| `coding-agents` | 19 |
| `frameworks` | 12 |
| `voice-agents` | 11 |
| `agent-platforms` | 11 |
| `support-agents` | 9 |
| `research-agents` | 9 |
| `sales-marketing-agents` | 8 |

## The index

| entry | pricing | API | last verified | the call |
|---|---|:-:|---|---|
| [11x](https://theagentsindex.com/11x) | paid | no | 2026-07-23 | 11x is one of the most visible bets in the "AI SDR" category: Alice runs the whole outbound motion, research, list-building and multi-channel… |
| [Ada](https://theagentsindex.com/ada) | paid | no | 2026-07-23 | Ada is the incumbent of this category — founded in 2016, well before Decagon, Crescendo and Cresta existed, and still backed by a $1.2B valuation… |
| [Agno](https://theagentsindex.com/agno) | freemium | no | 2026-08-06 | Agno is a fast-moving open-source rebrand story: what started in 2023 as Phidata, a data-engineering and RAG-focused toolkit, became Agno in January… |
| [Aider](https://theagentsindex.com/aider) | free | no | 2026-08-01 | Aider is the definitive terminal AI pair programmer: open-source under Apache-2.0, model-agnostic, and built around a git-native workflow where… |
| [Amplemarket](https://theagentsindex.com/amplemarket) | paid | no | 2026-08-01 | Amplemarket's real pitch is consolidation with a human still at the wheel: contact data, multichannel sequencing and AI-driven signal detection live… |
| [Antigravity CLI](https://theagentsindex.com/antigravity-cli) | freemium | no | 2026-07-28 | Antigravity CLI is Google's answer to "what replaces a sunset open-source tool" — and the honest read is a mixed one. The free tier is genuinely… |
| [Artisan](https://theagentsindex.com/artisan) | paid | no | 2026-07-23 | Artisan's Ava is one of the more complete "AI BDR" plays on the market: since the May 2026 Ava 2.0 rebuild she runs the full outbound motion… |
| [Auto-Respond](https://theagentsindex.com/auto-respond) | paid | no | 2026-07-30 | Auto-Respond is a focused answering and lead-response tool for local businesses that lose jobs to slow follow-up. The multi-channel coverage, fast… |
| [Bland AI](https://theagentsindex.com/bland-ai) | paid | no | 2026-07-25 | Bland AI’s pitch is ownership: it runs its own self-hosted model stack instead of stitching together third-party providers, which underpins a… |
| [Bolt.new](https://theagentsindex.com/bolt-new) | freemium | no | 2026-07-25 | Bolt.new’s WebContainers runtime is a genuine, verifiable technical edge — it runs Node.js natively inside the browser sandbox instead of proxying… |
| [Botpress](https://theagentsindex.com/botpress) | freemium | no | 2026-08-02 | Botpress is the pick for engineering-led teams that want to own a conversational agent's code and data rather than configure a closed, fully-managed… |
| [Botsify](https://theagentsindex.com/botsify) | paid | no | 2026-07-27 | Botsify is the rare AI-agent vendor built as much for the reseller as the end customer: a decade-old (2016), bootstrapped, Karachi-based chatbot… |
| [Cartesia](https://theagentsindex.com/cartesia) | freemium | no | 2026-08-05 | Cartesia's core credibility is that its speech models are already load-bearing infrastructure for part of this very category — Vapi, Retell AI and… |
| [Claude Agent SDK](https://theagentsindex.com/claude-agent-sdk) | freemium | no | 2026-07-30 | The Claude Agent SDK is Anthropic's answer to the same question Microsoft, Google and OpenAI have already answered with their own official SDKs —… |
| [Claude Code](https://theagentsindex.com/claude-code) | paid | no | 2026-07-24 | Claude Code is the pick for developers who want an agent that lives in the terminal and composes with real engineering workflows, scripts, CI… |
| [Clay](https://theagentsindex.com/clay) | freemium | no | 2026-07-27 | Clay has become the GTM data layer serious outbound teams build on, and for good reason: its waterfall enrichment posts materially higher match… |
| [Cline](https://theagentsindex.com/cline) | freemium | no | 2026-07-27 | Cline is the reference open-source coding agent: Apache-2.0, bring-your-own-key, and available as a VS Code extension, a CLI and an embeddable SDK,… |
| [CodeRabbit](https://theagentsindex.com/coderabbit) | freemium | no | 2026-07-25 | CodeRabbit occupies a genuinely different slot in this category than any other listing: it reviews pull requests and commits automatically rather… |
| [OpenAI Codex CLI](https://theagentsindex.com/codex-cli) | freemium | no | 2026-07-25 | Codex CLI’s biggest advantage isn’t a feature — it’s bundling: because it draws on the same plan and credit pool as ChatGPT, a developer who already… |
| [Crescendo](https://theagentsindex.com/crescendo) | paid | no | 2026-07-27 | Crescendo’s pitch is speed and completeness: instead of stitching together a chat widget, a ticketing system and an outsourced BPO separately, it… |
| [Cresta](https://theagentsindex.com/cresta) | paid | no | 2026-07-27 | Cresta's real differentiator among this category's four existing enterprise support-agent listings is scope: instead of selling an AI Agent that… |
| [CrewAI](https://theagentsindex.com/crewai) | freemium | no | 2026-07-27 | CrewAI is the fastest way to stand up a working multi-agent system when the mental model is a team of specialists handing off tasks, not one… |
| [Cursor](https://theagentsindex.com/cursor) | freemium | no | 2026-07-28 | Cursor is the best in-editor agent for developers who want AI woven into a familiar editor rather than bolted onto a separate tool. Its multi-file… |
| [Decagon](https://theagentsindex.com/decagon) | paid | no | 2026-07-23 | Decagon is one of the best-capitalized names in AI customer support — a $250M Series D in January 2026 valued it at $4.5B, and its published case… |
| [Deepgram Voice Agent API](https://theagentsindex.com/deepgram-voice-agent-api) | paid | no | 2026-08-04 | Deepgram Voice Agent API sits between the raw OpenAI Realtime API and a fully-configured platform like Bland AI or Retell AI: a managed STT+LLM+TTS… |
| [Devin](https://theagentsindex.com/devin) | freemium | no | 2026-08-06 | Devin is the most complete attempt at a genuinely autonomous software engineer: it works asynchronously on its own cloud machine, opens real pull… |
| [Dify](https://theagentsindex.com/dify) | freemium | no | 2026-07-27 | Dify has become the default open-source answer to "how do we build and ship LLM apps without gluing five tools together." Its visual Workflow… |
| [ElevenLabs Conversational AI](https://theagentsindex.com/elevenlabs-conversational-ai) | freemium | no | 2026-07-25 | ElevenLabs Conversational AI (rebranded ElevenAgents) approaches the voice-agent category from an unusual angle: instead of starting as an… |
| [Elicit](https://theagentsindex.com/elicit) | freemium | no | 2026-07-27 | Elicit is the research agent in this category actually built for scientific literature rather than the open web. Its Research Agent autonomously… |
| [Factory](https://theagentsindex.com/factory-ai) | paid | no | 2026-07-27 | Factory is a genuinely differentiated bet in the coding-agents category: instead of one generalist assistant, it coordinates specialized "Droids" —… |
| [GC AI](https://theagentsindex.com/gc-ai) | paid | no | 2026-07-24 | GC AI is the one research agent in this category built for a specific, high-stakes body of knowledge, US case law, statutes, regulations and agency… |
| [Genspark](https://theagentsindex.com/genspark) | freemium | no | 2026-07-31 | Genspark is the best-funded and most heavily used general-purpose agent in this category — $535M raised, a $2.6B valuation and roughly $250M in… |
| [GitHub Copilot](https://theagentsindex.com/github-copilot) | freemium | no | 2026-07-28 | GitHub Copilot is the safest choice for a team that already lives inside GitHub and needs AI coding rolled out at enterprise scale. Its coding agent… |
| [Glean](https://theagentsindex.com/glean) | paid | no | 2026-07-27 | Glean is the search-first entry in this index's agent-platforms category — its Knowledge Graph and permission-aware indexing across 100+ workplace… |
| [Google Agent Development Kit](https://theagentsindex.com/google-adk) | freemium | no | 2026-07-29 | Google Agent Development Kit is Google's answer to the same question Microsoft answered with Agent Framework and OpenAI answered with its own Agents… |
| [GPT Researcher](https://theagentsindex.com/gpt-researcher) | free | no | 2026-07-25 | GPT Researcher is the reference open-source implementation of the autonomous research agent, and it holds up: give it a question and its… |
| [Intercom Fin](https://theagentsindex.com/intercom-fin) | paid | no | 2026-08-03 | Fin is the most broadly deployed AI support agent, and its two big advantages are reach and speed: it runs omnichannel (chat, email, voice, social)… |
| [Juggler](https://theagentsindex.com/juggler) | free | no | 2026-07-28 | Juggler is the most structurally different take on the AI-coding-agent UI to show up in this category recently: instead of a scrolling terminal log,… |
| [LangChain](https://theagentsindex.com/langchain) | freemium | no | 2026-07-25 | LangChain is the default starting point for building a custom, production-grade agent rather than adopting an off-the-shelf tool, mostly because… |
| [Letta](https://theagentsindex.com/letta) | freemium | no | 2026-07-27 | Letta is the one framework in this category built around a genuinely different premise: agents as stateful, persistent objects — with git-versioned… |
| [Lindy](https://theagentsindex.com/lindy) | paid | no | 2026-07-27 | Lindy has moved from selling itself as a no-code "AI employee" builder to selling a finished AI executive assistant you text over iMessage or SMS,… |
| [LiveKit Agents](https://theagentsindex.com/livekit-agents) | freemium | no | 2026-07-27 | LiveKit Agents is the one genuinely open-source, self-hostable option among this category’s voice agent platforms, an Apache 2.0 framework, not a… |
| [LlamaIndex](https://theagentsindex.com/llamaindex) | freemium | no | 2026-07-27 | LlamaIndex is the reference implementation for retrieval-augmented generation: if your application lives or dies on getting the right context into… |
| [Manus](https://theagentsindex.com/manus) | freemium | no | 2026-07-27 | Manus is one of the most ambitious consumer agents shipped so far: hand it a goal and it genuinely plans and executes a long chain of steps in its… |
| [Mastra](https://theagentsindex.com/mastra) | freemium | no | 2026-07-27 | Mastra is the one genuinely TypeScript-native entrant in a category otherwise built Python-first with JS bindings layered on — a real, defensible… |
| [Microsoft Agent Framework](https://theagentsindex.com/microsoft-agent-framework) | freemium | no | 2026-07-28 | Microsoft Agent Framework is what AutoGen and Semantic Kernel became once Microsoft decided to stop maintaining two separate agent stacks and… |
| [Microsoft AutoGen](https://theagentsindex.com/microsoft-autogen) | free | no | 2026-07-27 | AutoGen is the framework that popularised the “agents conversing with agents” model, and it remains a clean, well-documented and genuinely free way… |
| [Microsoft Fabric Data Agent](https://theagentsindex.com/microsoft-fabric-data-agent) | paid | no | 2026-08-01 | Fabric data agent is the one listing in this index whose "agent" ships embedded inside a full enterprise data platform rather than as a standalone… |
| [Moveworks](https://theagentsindex.com/moveworks) | paid | no | 2026-07-27 | Moveworks is the one listing in this index built for employees, not customers — its AI Assistant resolves IT, HR and finance requests across 100+… |
| [n8n](https://theagentsindex.com/n8n) | freemium | no | 2026-08-04 | n8n is the strongest choice for teams that want agentic automation built visually rather than in code, without giving up the integration breadth or… |
| [OpenAI Agents SDK](https://theagentsindex.com/openai-agents-sdk) | free | no | 2026-07-24 | The OpenAI Agents SDK is the shortest path from idea to a working agent: four clean primitives, agents, handoffs, guardrails and sessions, plus… |
| [OpenAI Realtime API](https://theagentsindex.com/openai-realtime-api) | paid | no | 2026-08-03 | The OpenAI Realtime API is the rawest option in this category: not an orchestration platform or a managed dashboard, but the actual speech-to-speech… |
| [OpenCode](https://theagentsindex.com/opencode) | freemium | no | 2026-07-25 | OpenCode’s core pitch is real: it costs nothing to run, is genuinely open-source under MIT, and connects to essentially any model — 75+ cloud… |
| [OpenHands](https://theagentsindex.com/openhands) | freemium | no | 2026-07-25 | OpenHands is a credible, community-backed choice for engineering teams that want an open source, self-hostable coding agent platform rather than a… |
| [Perplexity](https://theagentsindex.com/perplexity) | freemium | no | 2026-07-23 | Perplexity is the most refined AI answer engine available, and calling it an ‘agent’ is fair only because of the layers it has added on top: Deep… |
| [PolyAI](https://theagentsindex.com/polyai) | paid | no | 2026-08-08 | PolyAI is the pre-LLM-era incumbent of the voice-agent category — founded in 2017, years before Vapi, Retell AI, Bland AI or ElevenLabs… |
| [Pydantic AI](https://theagentsindex.com/pydantic-ai) | free | no | 2026-07-25 | Pydantic AI brings the same discipline that made Pydantic and FastAPI ubiquitous to agent building: define your agent and its output with Python… |
| [Qualified](https://theagentsindex.com/qualified) | paid | no | 2026-07-23 | Qualified earns its place in this category by being genuinely differentiated from the outbound-first AI SDRs that dominate it: Piper works inbound,… |
| [Relevance AI](https://theagentsindex.com/relevance-ai) | freemium | no | 2026-07-23 | Relevance AI is one of the more serious "agent platform" plays: it’s built from the ground up for multi-agent workforces, with the unglamorous… |
| [Replit Agent](https://theagentsindex.com/replit-agent) | freemium | no | 2026-07-25 | Replit Agent is the most accessible way to turn a plain-language idea into a running, deployed app: it writes the code, provisions a database, adds… |
| [Retell AI](https://theagentsindex.com/retell-ai) | paid | no | 2026-07-27 | Retell AI is one of the strongest developer-first voice platforms, and its reputation rests on the two things that matter most on a phone call:… |
| [Rox](https://theagentsindex.com/rox) | freemium | no | 2026-07-24 | Rox's real differentiation in this category is scope, not automation intensity: Clay is a data-enrichment engine, 11x and Artisan run autonomous… |
| [Salesforce Agentforce](https://theagentsindex.com/salesforce-agentforce) | freemium | no | 2026-07-27 | Agentforce is the CRM-native heavyweight of this category — no other general-purpose platform here puts agents this close to a company's actual… |
| [Sierra](https://theagentsindex.com/sierra) | paid | no | 2026-07-24 | Sierra is the enterprise standard-bearer for customer-experience agents, and the pedigree is real: co-founded by Bret Taylor and Clay Bavor, it… |
| [SkipCalls](https://theagentsindex.com/skipcalls) | paid | no | 2026-07-31 | SkipCalls is a straightforward AI receptionist aimed at small businesses that lose leads to missed calls, with easy carrier-forwarding setup, spam… |
| [Synthflow AI](https://theagentsindex.com/synthflow-ai) | paid | no | 2026-07-30 | Synthflow AI's real differentiation is who can operate it: a genuinely visual, no-code Flow Designer and a named BELL deployment methodology mean an… |
| [Undermind](https://theagentsindex.com/undermind) | freemium | no | 2026-07-25 | Undermind is the discovery-focused entry in this category: instead of screening papers you already found against inclusion criteria (Elicit's job)… |
| [Unify](https://theagentsindex.com/unify) | freemium | no | 2026-07-24 | Unify fills a real, previously under-served position in this category's GTM-outbound cluster: cheaper and far more transparent than Clay's… |
| [Vapi](https://theagentsindex.com/vapi) | paid | no | 2026-07-25 | Vapi is the builder’s choice for voice AI: an API-first, model-agnostic platform that hands developers control over every layer — transcription,… |
| [Vecbase](https://theagentsindex.com/vecbase) | paid | no | 2026-07-23 | Vecbase packages multi-agent collaboration, shared memory and files, built-in AI capabilities, and one-click integrations into a single… |
| [Warmly](https://theagentsindex.com/warmly) | paid | no | 2026-07-30 | Warmly's real differentiation is that it doesn't stop at identifying anonymous visitors — it pairs that data with two purpose-built agents that act… |
| [Warp](https://theagentsindex.com/warp) | freemium | no | 2026-07-27 | Warp is the one listing in this category that isn't really competing with Claude Code or Codex CLI so much as hosting them: it's a full terminal… |
| [Webhound](https://theagentsindex.com/webhound) | paid | no | 2026-08-08 | Webhound's pitch is refreshingly literal: give it a research task and a dollar figure, and it keeps searching, reading and verifying until the… |
| [Windsurf (now Devin Desktop)](https://theagentsindex.com/windsurf) | freemium | no | 2026-07-27 | Windsurf was one of the best agentic IDEs of its generation, and as Devin Desktop it is now something more ambitious: a vendor-neutral command… |
| [Zed](https://theagentsindex.com/zed) | freemium | no | 2026-07-25 | Zed's real differentiation in this index isn't a single proprietary agent, it's the platform decision underneath every rival: Cursor and Windsurf… |
| [Zendesk AI Agents](https://theagentsindex.com/zendesk-ai-agents) | paid | no | 2026-08-01 | Zendesk AI Agents' real pitch isn't that it out-resolves Fin or Decagon — it's that the agent ships inside the helpdesk platform millions of support… |
| [Zot](https://theagentsindex.com/zot) | free | no | 2026-07-27 | Zot earns its place with a real, working idea: fork any past message in a coding session into a new branch and see the whole tree at a glance, all… |

## Contributing

Corrections and additions are welcome — see [CONTRIBUTING.md](CONTRIBUTING.md). A correction with a
source lands fastest; the quality gate that governs the site governs this repo too.

## Licence

Data — [CC BY 4.0](LICENSE). Use it commercially, remix it, feed it to a model. The one condition is
attribution: name **The Agents Index** and link https://theagentsindex.com.
Tooling in this repo — [MIT](LICENSE-CODE).

---

_Generated from the live index at 2026-08-08T21:32:18.988Z. Do not hand-edit `data/` — open a PR against
the facts and the regeneration will carry them._
