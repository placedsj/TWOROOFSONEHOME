## 2024-05-22 - Full Page Re-renders from Live Clock
**Learning:** React components re-render entirely when state changes. Embedding a `setInterval` that updates a clock every second in a large parent component (`DigitalBinder`) caused the entire page tree to re-render 1/sec, which is a significant performance drain.
**Action:** Isolate high-frequency updates (like clocks, tickers, mouse trackers) into small, leaf-node components (`LiveClock`) so only that specific DOM subtree updates.
