#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Step 1: Run worker-build to generate the WASM and JS wrapper
echo "Step 1: Running worker-build..."
worker-build --release --no-opt --features server

# Step 2: Post-process the WASM to inject asset hashes using dx
echo "Step 2: Processing assets in WASM with dx..."
dx tools assets build/index_bg.wasm build/public/assets

echo ""
echo "Build complete!"
echo "  ✓ WASM: build/index_bg.wasm (with asset hashes injected)"
echo "  ✓ JS Wrapper: build/index.js (worker-build generated)"
echo "  ✓ Assets: build/public/assets/"
echo ""
