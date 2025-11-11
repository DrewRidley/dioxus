use axum::response::Html;
use axum::{extract::State, routing::get, Router};
use dioxus_server::{DioxusRouterExt, ServeConfig};
use tower_service::Service;
use worker::event;
use worker::{Context, Env, HttpRequest, Result};

mod app;

#[derive(Clone)]
pub struct AxumState {
    pub env: Env,
}

fn router() -> Router {
    let cfg = ServeConfig::new();

    Router::new().serve_dioxus_application(cfg, app::App)
    //.register_server_functions()
}

#[event(fetch)]
async fn fetch(
    req: HttpRequest,
    _env: Env,
    _ctx: Context,
) -> Result<http::Response<axum::body::Body>> {
    // Run the router call within a LocalSet to enable spawn_local
    let local = tokio::task::LocalSet::new();
    Ok(local.run_until(router().call(req)).await?)
}
