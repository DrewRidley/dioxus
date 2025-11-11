// use crate::app::App;
// use dioxus::prelude::*;

// /// Only build main() for native desktop/server builds, not for browser WASM builds.
// /// For Cloudflare Workers, the server functionality is handled by lib.rs instead.
// #[cfg(not(all(target_arch = "wasm32"), feature = "server"))]
// fn main() {
//     dioxus::launch(App);
// }

use dioxus::prelude::*;
mod app;

fn main() {
    dioxus::launch(app::App);
}
