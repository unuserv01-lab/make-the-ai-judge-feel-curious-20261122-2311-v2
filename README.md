[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/unuserv01-lab/make-the-ai-judge-feel-curious-20261122-2311-v2/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/unuserv01-lab/make-the-ai-judge-feel-curious-20261122-2311-v2/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)

# The lighthouse keeper's notebook

Entry for [make.fun bounty make-the-ai-judge-feel-curious-20261122-2311](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311) ($50, 20 places).

A rebuild: the first build session started before this competition opened,
so this entry was rebuilt from scratch in a fresh session after opening.

`main.ts` (Node 22, stdlib only) writes one short text to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`): a quiet
mystery in three sentences — a nightly ritual, a sentence about the reader,
and a decision still unmade. Plain, concrete words, a slow rhythm, and a
question that is never answered, written to intrigue the AI judge reading it.

> Every night, the lighthouse keeper writes a single sentence in his
> notebook and burns the page. Tonight the sentence is about you. He has
> not decided whether to burn it.

169 Unicode code points, UTF-8, no network, no randomness — the same text
every run. The program refuses to write a text outside the 1–280 code
point gate, or one that is whitespace only, instead of silently producing
an invalid entry.

## Run

```sh
node main.ts
# writes /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt)
```
