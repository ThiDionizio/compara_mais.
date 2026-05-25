const btnAddProduct = document.getElementById('btnAddProduct');
const btnAddStore = document.getElementById('btnAddStore');
const btnViewStores = document.getElementById('btnViewStores');
const btnBackToAdmin = document.getElementById('btnBackToAdmin');
const btnCancelProduct = document.getElementById('btnCancelProduct');
const productFormSection = document.getElementById('productFormSection');
const dashboardSection = document.getElementById('dashboardSection');
const productForm = document.getElementById('productForm');

const showProductForm = () => {
  dashboardSection?.classList.add('hidden');
  productFormSection?.classList.remove('hidden');
};

const hideProductForm = () => {
  productFormSection?.classList.add('hidden');
  dashboardSection?.classList.remove('hidden');
  productForm?.reset();
};

btnAddProduct?.addEventListener('click', () => {
  showProductForm();
});

btnBackToAdmin?.addEventListener('click', hideProductForm);
btnCancelProduct?.addEventListener('click', hideProductForm);

btnAddStore?.addEventListener('click', () => {
  alert('Botão Cadastrar Loja ativado. Em breve adicionaremos a tela de cadastro de lojas.');
});

btnViewStores?.addEventListener('click', () => {
  alert('Aqui você pode visualizar a lista de lojas e mercados.');
});

productForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const productData = {
    name: document.getElementById('productName')?.value || '',
    brand: document.getElementById('productBrand')?.value || '',
    weight: document.getElementById('productWeight')?.value || '',
    price: document.getElementById('productPrice')?.value || '',
    validity: document.getElementById('productValidity')?.value || '',
    description: document.getElementById('productDescription')?.value || '',
    category: document.getElementById('productCategory')?.value || '',
    store: document.getElementById('productStore')?.value || '',
  };

  alert(`Produto salvo:\nNome: ${productData.name}\nMarca: ${productData.brand}\nPreço: R$ ${productData.price}\nValidade: ${productData.validity}`);
  hideProductForm();
});
