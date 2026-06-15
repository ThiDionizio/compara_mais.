const btnAddProduct = document.getElementById('btnAddProduct');
const btnEditProducts = document.getElementById('btnEditProducts');
const btnAddStore = document.getElementById('btnAddStore');
const btnViewStores = document.getElementById('btnViewStores');
const btnBackToAdmin = document.getElementById('btnBackToAdmin');
const btnCancelProduct = document.getElementById('btnCancelProduct');
const productFormSection = document.getElementById('productFormSection');
const dashboardSection = document.getElementById('dashboardSection');
const productForm = document.getElementById('productForm');

let productEditorSection = null;
let btnBackToDashboard = null;
let btnCloseDetail = null;
let productSearch = null;
let productList = null;
let productDetailSection = null;
let productDetailView = null;
let productDetailForm = null;
let btnDetailTab = null;
let btnEditTab = null;

const products = [
  {
    id: '1',
    name: 'Leite Integral',
    brand: 'Italac',
    weight: '1L',
    price: '6.90',
    validity: '2026-07-15',
    description: 'Leite integral UHT para consumo diário.',
    category: 'Bebidas',
    store: 'Mercado Central',
  },
  {
    id: '2',
    name: 'Arroz Tipo 1',
    brand: 'Tio João',
    weight: '5kg',
    price: '24.50',
    validity: '2027-01-10',
    description: 'Arroz branco de ótima qualidade.',
    category: 'Alimentos',
    store: 'Supermercado São Paulo',
  },
  {
    id: '3',
    name: 'Café Torrado',
    brand: 'Pilão',
    weight: '500g',
    price: '14.30',
    validity: '2026-09-20',
    description: 'Café torrado e moído para preparo rápido.',
    category: 'Bebidas',
    store: 'Mercado Central',
  },
];

let selectedProductId = null;

const renderProductList = (filter = '') => {
  const query = filter.trim().toLowerCase();
  const visibleProducts = products.filter((product) => {
    const text = `${product.name} ${product.brand} ${product.store}`.toLowerCase();
    return text.includes(query);
  });

  if (!productList) return;

  if (visibleProducts.length === 0) {
    productList.innerHTML = '<p class="empty-state">Nenhum produto encontrado.</p>';
    return;
  }

  productList.innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="product-card" data-id="${product.id}">
          <div>
            <strong>${product.name}</strong>
            <span>${product.brand} • ${product.weight}</span>
          </div>
          <div>
            <span class="price">R$ ${product.price}</span>
            <small>${product.store}</small>
          </div>
        </article>
      `
    )
    .join('');
};

const showProductDetail = (id) => {
  selectedProductId = id;
  const product = products.find((item) => item.id === id);
  if (!product || !productDetailSection || !productDetailForm || !productDetailView) return;

  productDetailSection.hidden = false;
  productDetailView.hidden = false;
  productDetailForm.hidden = true;
  btnDetailTab?.classList.add('active');
  btnEditTab?.classList.remove('active');

  document.getElementById('viewName').textContent = product.name;
  document.getElementById('viewBrand').textContent = product.brand;
  document.getElementById('viewWeight').textContent = product.weight;
  document.getElementById('viewPrice').textContent = `R$ ${product.price}`;
  document.getElementById('viewValidity').textContent = product.validity || '-';
  document.getElementById('viewCategory').textContent = product.category;
  document.getElementById('viewStore').textContent = product.store;
  document.getElementById('viewDescription').textContent = product.description;

  productDetailForm.elements.detailName.value = product.name;
  productDetailForm.elements.detailBrand.value = product.brand;
  productDetailForm.elements.detailWeight.value = product.weight;
  productDetailForm.elements.detailPrice.value = product.price;
  productDetailForm.elements.detailValidity.value = product.validity;
  productDetailForm.elements.detailDescription.value = product.description;
  productDetailForm.elements.detailCategory.value = product.category;
  productDetailForm.elements.detailStore.value = product.store;
  if (typeof productDetailSection.scrollIntoView === 'function') {
    productDetailSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const createProductEditorSection = () => {
  if (productEditorSection) return;

  const html = `
    <section id="productEditorSection" class="card product-editor" hidden>
      <div class="product-editor-header">
        <div>
          <h2>Editar Produtos</h2>
          <p>Busque e selecione um produto para ver detalhes completos.</p>
        </div>
        <button id="btnBackToDashboard" type="button" class="btn btn-secondary back-btn">Voltar</button>
      </div>

      <input id="productSearch" class="search-input" type="search" placeholder="Buscar produto por nome, marca ou loja" />
      <div id="productList" class="product-list"></div>

      <section id="productDetailSection" class="product-detail hidden">
        <div class="product-detail-header">
          <div>
            <h3>Detalhes do produto</h3>
            <p class="detail-note">Clique no card para ver e editar.</p>
          </div>
          <div class="detail-actions">
            <button id="btnDetailTab" type="button" class="btn btn-secondary tab-btn active">Detalhes</button>
            <button id="btnEditTab" type="button" class="btn btn-secondary tab-btn">Editar</button>
            <button id="btnCloseDetail" type="button" class="btn btn-secondary back-btn">Fechar</button>
          </div>
        </div>

        <div id="productDetailView" class="product-detail-view">
          <div class="detail-row"><span class="detail-label">Nome:</span><span id="viewName"></span></div>
          <div class="detail-row"><span class="detail-label">Marca:</span><span id="viewBrand"></span></div>
          <div class="detail-row"><span class="detail-label">Peso / Quantidade:</span><span id="viewWeight"></span></div>
          <div class="detail-row"><span class="detail-label">Preço:</span><span id="viewPrice"></span></div>
          <div class="detail-row"><span class="detail-label">Validade:</span><span id="viewValidity"></span></div>
          <div class="detail-row"><span class="detail-label">Categoria:</span><span id="viewCategory"></span></div>
          <div class="detail-row"><span class="detail-label">Loja:</span><span id="viewStore"></span></div>
          <p class="detail-description" id="viewDescription"></p>
          <button id="btnOpenEdit" type="button" class="btn btn-primary">Editar informações</button>
        </div>

        <form id="productDetailForm" class="product-detail-edit hidden">
          <label class="form-label" for="detailName">Nome do produto</label>
          <input id="detailName" name="detailName" type="text" required />

          <label class="form-label" for="detailBrand">Marca</label>
          <input id="detailBrand" name="detailBrand" type="text" />

          <label class="form-label" for="detailWeight">Peso / Quantidade</label>
          <input id="detailWeight" name="detailWeight" type="text" />

          <label class="form-label" for="detailPrice">Preço</label>
          <input id="detailPrice" name="detailPrice" type="number" step="0.01" required />

          <label class="form-label" for="detailValidity">Validade</label>
          <input id="detailValidity" name="detailValidity" type="date" />

          <label class="form-label" for="detailDescription">Descrição</label>
          <textarea id="detailDescription" name="detailDescription" rows="4"></textarea>

          <label class="form-label" for="detailCategory">Categoria</label>
          <input id="detailCategory" name="detailCategory" type="text" />

          <label class="form-label" for="detailStore">Loja / Estabelecimento</label>
          <input id="detailStore" name="detailStore" type="text" />

          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Confirmar alterações</button>
            <button id="btnCancelEdit" type="button" class="btn btn-secondary">Voltar</button>
          </div>
        </form>
      </section>
    </section>
  `;

  const template = document.createElement('template');
  template.innerHTML = html.trim();
  const section = template.content.firstChild;
  if (!section) return;

  const main = document.querySelector('main.content');
  main?.appendChild(section);

  productEditorSection = section;
  btnBackToDashboard = productEditorSection.querySelector('#btnBackToDashboard');
  btnCloseDetail = productEditorSection.querySelector('#btnCloseDetail');
  btnDetailTab = productEditorSection.querySelector('#btnDetailTab');
  btnEditTab = productEditorSection.querySelector('#btnEditTab');
  productSearch = productEditorSection.querySelector('#productSearch');
  productList = productEditorSection.querySelector('#productList');
  productDetailSection = productEditorSection.querySelector('#productDetailSection');
  productDetailView = productEditorSection.querySelector('#productDetailView');
  productDetailForm = productEditorSection.querySelector('#productDetailForm');

  productList?.addEventListener('click', (event) => {
    const card = event.target.closest('.product-card');
    if (!card) return;
    const id = card.dataset.id;
    if (id) showProductDetail(id);
  });

  btnBackToDashboard?.addEventListener('click', hideProductEditor);
  btnCloseDetail?.addEventListener('click', () => {
    if (productDetailSection) productDetailSection.hidden = true;
    selectedProductId = null;
  });
  btnDetailTab?.addEventListener('click', () => {
    if (productDetailView) productDetailView.hidden = false;
    if (productDetailForm) productDetailForm.hidden = true;
    btnDetailTab?.classList.add('active');
    btnEditTab?.classList.remove('active');
  });
  btnEditTab?.addEventListener('click', () => {
    if (productDetailView) productDetailView.hidden = true;
    if (productDetailForm) productDetailForm.hidden = false;
    btnEditTab?.classList.add('active');
    btnDetailTab?.classList.remove('active');
  });
  const btnOpenEdit = productEditorSection.querySelector('#btnOpenEdit');
  const btnCancelEdit = productEditorSection.querySelector('#btnCancelEdit');
  btnOpenEdit?.addEventListener('click', () => btnEditTab?.click());
  btnCancelEdit?.addEventListener('click', () => btnDetailTab?.click());
  productSearch?.addEventListener('input', () => renderProductList(productSearch.value));
  productDetailForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!selectedProductId) return;

    const product = products.find((item) => item.id === selectedProductId);
    if (!product) return;

    product.name = productDetailForm.elements.detailName.value;
    product.brand = productDetailForm.elements.detailBrand.value;
    product.weight = productDetailForm.elements.detailWeight.value;
    product.price = productDetailForm.elements.detailPrice.value;
    product.validity = productDetailForm.elements.detailValidity.value;
    product.description = productDetailForm.elements.detailDescription.value;
    product.category = productDetailForm.elements.detailCategory.value;
    product.store = productDetailForm.elements.detailStore.value;

    renderProductList(productSearch?.value || '');
    alert('Detalhes do produto atualizados com sucesso.');
  });
};

const hideProductForm = () => {
  if (productFormSection) productFormSection.hidden = true;
  if (dashboardSection) dashboardSection.hidden = false;
  productForm?.reset();
};

const showProductForm = () => {
  if (dashboardSection) dashboardSection.hidden = true;
  if (productEditorSection) productEditorSection.hidden = true;
  if (productFormSection) productFormSection.hidden = false;
};

const hideProductEditor = () => {
  if (productEditorSection) {
    productEditorSection.remove();
  }
  productEditorSection = null;
  btnBackToDashboard = null;
  btnCloseDetail = null;
  productSearch = null;
  productList = null;
  productDetailSection = null;
  productDetailForm = null;
  if (dashboardSection) dashboardSection.hidden = false;
  selectedProductId = null;
};

const showProductEditor = () => {
  if (!productEditorSection) createProductEditorSection();
  if (dashboardSection) dashboardSection.hidden = true;
  if (productFormSection) productFormSection.hidden = true;
  if (productEditorSection) {
    productEditorSection.hidden = false;
    renderProductList(productSearch?.value || '');
  }
};

btnAddProduct?.addEventListener('click', showProductForm);
btnEditProducts?.addEventListener('click', showProductEditor);
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
    id: String(Date.now()),
    name: document.getElementById('productName')?.value || '',
    brand: document.getElementById('productBrand')?.value || '',
    weight: document.getElementById('productWeight')?.value || '',
    price: document.getElementById('productPrice')?.value || '',
    validity: document.getElementById('productValidity')?.value || '',
    description: document.getElementById('productDescription')?.value || '',
    category: document.getElementById('productCategory')?.value || '',
    store: document.getElementById('productStore')?.value || '',
  };

  products.unshift(productData);
  renderProductList(productSearch?.value || '');
  alert(`Produto salvo:\nNome: ${productData.name}\nMarca: ${productData.brand}\nPreço: R$ ${productData.price}`);
  hideProductForm();
});

renderProductList();
