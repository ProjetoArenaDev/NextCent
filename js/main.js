import { loadAllComponents } from "./loadComponents.js";

import { initNavbar } from "./navbar.js";
import { initBanner } from "./banner.js";
import { initClientes } from "./clientes.js";
import { initComunidade } from "./comunidade.js";
import { initFeatures } from "./features.js";
import { initDepoimento } from "./depoimento.js";
import { initBlog } from "./blog.js";
import { initPreco } from "./preco.js";
import { initRegistre } from "./registre.js";
import { initFooter } from "./footer.js";

document.addEventListener("DOMContentLoaded", async () => {
  await loadAllComponents();

  const initializers = [
    initNavbar,
    initBanner,
    initClientes,
    initComunidade,
    initFeatures,
    initDepoimento,
    initBlog,
    initPreco,
    initRegistre,
    initFooter,
  ];

  initializers.forEach((init) => {
    try {
      init();
    } catch (error) {
      console.error("Erro ao iniciar módulo:", error);
    }
  });
});