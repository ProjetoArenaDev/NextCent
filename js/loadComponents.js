export async function loadComponent(id, path) {
  const response = await fetch(path);
  const html = await response.text();
  document.getElementById(id).innerHTML = html;
}

export async function loadAllComponents() {
  await Promise.all([
    loadComponent("navbar", "components/navbar.html"),
    loadComponent("banner", "components/banner.html"),
    loadComponent("clientes", "components/clientes.html"),
    loadComponent("comunidade", "components/comunidade.html"),
    loadComponent("features", "components/features.html"),
    loadComponent("depoimento", "components/depoimento.html"),
    loadComponent("blog", "components/blog.html"),
    loadComponent("preco", "components/preco.html"),
    loadComponent("registre", "components/registre.html"),
    loadComponent("footer", "components/footer.html"),
  ]);
}