export function initRegistre() {
	const modal = document.getElementById("modal-registro");
	const fechar = document.getElementById("fecharModal");

	if (!modal || !fechar) return;

	function abrirModal() {
		modal.classList.add("active");
	}

	function fecharModal() {
		modal.classList.remove("active");
	}

	// Event delegation (FUNCIONA mesmo na navbar)
	document.addEventListener("click", function (e) {
		if (e.target.closest(".btn-registre")) {
			abrirModal();
		}
	});

	fechar.addEventListener("click", fecharModal);

	modal.addEventListener("click", (e) => {
		if (e.target === modal) fecharModal();
	});
}
