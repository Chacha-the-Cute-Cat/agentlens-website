# AgentLens — Secure Every AI Agent

AgentLens is the official marketing website for [chacharuntime.com](https://www.chacharuntime.com/), an Enterprise Agent Security Platform that discovers, understands, assesses, controls, and protects every AI agent across an organization.

> Discover, understand, and control every AI agent across your enterprise.

## Vision

AI agents are becoming digital workers: they operate inside business systems, use tools, access data, and take action on a company's behalf. AgentLens exists to be a new security layer for this new kind of worker, giving security teams the visibility and control they need to protect every agent action.

## Core capabilities

| Capability | What it does |
| --- | --- |
| Agent Discovery | Find every agent, MCP server, tool, skill, model, and connection across your enterprise. |
| Agent Intelligence | Go beyond events to understand intent, context, behavior, and agent relationships. |
| Agent Risk | Continuously assess agent identity, access, behavior, intent, and relationships. |
| Agent Control | Define what every agent can access, what it can do, and when it needs approval. |

## How runtime protection works

AgentLens evaluates every agent action against identity, intent, context, and risk, then returns a decision before the action reaches its target. It connects through existing agent hooks, gateways, SDKs, and APIs, so there is no need to install anything on every device.

Custom policies are built around who, what, where, when, why, risk, and decision.

## Pricing at a glance

| Plan | Price | Best for | Highlights |
| --- | --- | --- | --- |
| Free | $0 / month | Individual practitioners exploring agent visibility | Agent Discovery, up to 100 agents, basic Agent Intelligence |
| Growth | $59 / month | Teams protecting MCP connections and sensitive data | MCP Security, Data Protection, Human Approval, up to 10,000 agents, priority support |
| Enterprise | $99 / month | Agentic enterprises operating at scale | Everything in Growth, Continuous Validation, SSO/SCIM, unlimited agents, audit and compliance, dedicated support |

## This repository

This repository contains the public AgentLens website. It is a static site built with Tailwind CSS.

### Tech stack

- HTML
- Tailwind CSS
- Vanilla JavaScript

### Getting started

```bash
npm install
npm run dev
```

The development command watches `src/input.css` and generates `src/css/tailwind.css`.

### Project structure

```text
.
├── assets/
│   ├── css/
│   ├── images/
│   └── js/
├── src/
│   ├── css/tailwind.css
│   └── input.css
├── 404.html
├── about.html
├── blog-details.html
├── blog-grids.html
├── contact.html
├── index.html
├── pricing.html
├── signin.html
├── signup.html
└── package.json
```

## License

MIT
