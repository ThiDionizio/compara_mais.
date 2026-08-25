const btnAddProduct = document.getElementById('btnAddProduct');
const btnEditProducts = document.getElementById('btnEditProducts');
const btnAddStore = document.getElementById('btnAddStore');
const btnViewStores = document.getElementById('btnViewStores');
const btnBackToAdmin = document.getElementById('btnBackToAdmin');
const btnBackToAdminStore = document.getElementById('btnBackToAdminStore');
const btnCancelProduct = document.getElementById('btnCancelProduct');
const btnCancelStore = document.getElementById('btnCancelStore');
const productFormSection = document.getElementById('productFormSection');
const storeScreenSection = document.getElementById('storeScreenSection');
const dashboardSection = document.getElementById('dashboardSection');
const productForm = document.getElementById('productForm');
const storeForm = document.getElementById('storeForm');
const storeScreenTitle = document.getElementById('storeScreenTitle');
const storeScreenSubtitle = document.getElementById('storeScreenSubtitle');
const storeLogoInput = document.getElementById('storeLogo');
const storeLogoPreview = document.getElementById('storeLogoPreview');
const productImageInput = document.getElementById('productImage');
const productImagePreview = document.getElementById('productImagePreview');

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
    description: 'Leite integral UHT para consumo diário.',
    category: 'Bebidas',
    store: 'Mercado Central',
    imageUrl: '',
  },
  {
    id: '2',
    name: 'Arroz Tipo 1',
    brand: 'Tio João',
    weight: '5kg',
    price: '24.50',
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
    description: 'Café torrado e moído para preparo rápido.',
    category: 'Bebidas',
    store: 'Mercado Central',
  },
  {
    id: '4',
    name: 'Feijão Carioca',
    brand: 'Kicaldo',
    weight: '1kg',
    price: '8.49',
    description: 'Feijão carioca selecionado, grains uniformes.',
    category: 'Alimentos',
    store: 'Mercado Central',
  },
  {
    id: '5',
    name: 'Óleo de Soja',
    brand: 'Liza',
    weight: '900ml',
    price: '7.29',
    description: 'Óleo de soja refinado para cozinha.',
    category: 'Alimentos',
    store: 'Supermercado São Paulo',
  },
  {
    id: '6',
    name: 'Açúcar Cristal',
    brand: 'União',
    weight: '5kg',
    price: '18.90',
    description: 'Açúcar cristal puro para uso geral.',
    category: 'Alimentos',
    store: 'Mercado Central',
  },
  {
    id: '7',
    name: 'Macarrão Espaguete',
    brand: 'Barilla',
    weight: '500g',
    price: '9.79',
    description: 'Massa italiana de sêmola de trigo.',
    category: 'Alimentos',
    store: 'Supermercado São Paulo',
  },
  {
    id: '8',
    name: 'Farinha de Trigo',
    brand: 'Renata',
    weight: '1kg',
    price: '6.49',
    description: 'Farinha de trigo refinada para pães e bolos.',
    category: 'Alimentos',
    store: 'Mercado Central',
  },
  {
    id: '9',
    name: 'Molho de Tomate',
    brand: 'Quero',
    weight: '340g',
    price: '3.99',
    description: 'Molho de tomate tradicional com temperos.',
    category: 'Alimentos',
    store: 'Supermercado São Paulo',
  },
  {
    id: '10',
    name: 'Sardinha em Lata',
    brand: 'Gomes da Costa',
    weight: '150g',
    price: '6.89',
    description: 'Sardinha em óleo, ideal para refeições rápidas.',
    category: 'Alimentos',
    store: 'Mercado Central',
  },
  {
    id: '11',
    name: 'Sal Refinado',
    brand: 'Cisne',
    weight: '1kg',
    price: '3.29',
    description: 'Sal refinado iodado para tempero.',
    category: 'Alimentos',
    store: 'Supermercado São Paulo',
  },
  {
    id: '12',
    name: 'Biscoito Maisena',
    brand: 'Adria',
    weight: '400g',
    price: '5.49',
    description: 'Biscoito maisena crocante para lanches.',
    category: 'Alimentos',
    store: 'Mercado Central',
  },
  {
    id: '13',
    name: 'Extrato de Tomate',
    brand: 'Elefante',
    weight: '340g',
    price: '4.29',
    description: 'Extrato de tomate concentrado para molhos.',
    category: 'Alimentos',
    store: 'Supermercado São Paulo',
  },
  {
    id: '14',
    name: 'Cuscuz Amarelo',
    brand: 'Yoki',
    weight: '500g',
    price: '6.99',
    description: 'Flocão de milho para preparo de cuscuz.',
    category: 'Alimentos',
    store: 'Mercado Central',
  },
  {
    id: '15',
    name: 'Achocolatado em Pó',
    brand: 'Nescau',
    weight: '800g',
    price: '16.90',
    description: 'Achocolatado em pó para preparo de bebida.',
    category: 'Bebidas',
    store: 'Supermercado São Paulo',
  },
  {
    id: '16',
    name: 'Leite em Pó',
    brand: 'Ninho',
    weight: '400g',
    price: '19.90',
    description: 'Leite em pó integral para receitas e bebidas.',
    category: 'Alimentos',
    store: 'Mercado Central',
  },
  {
    id: '17',
    name: 'Sabão em Pó',
    brand: 'Omo',
    weight: '1.6kg',
    price: '17.90',
    description: 'Sabão em pó para lavagem de roupas.',
    category: 'Limpeza',
    store: 'Supermercado São Paulo',
  },
  {
    id: '18',
    name: 'Papel Higiênico',
    brand: 'Neve',
    weight: '12 rolos',
    price: '22.90',
    description: 'Papel higiênico folha dupla, macio e resistente.',
    category: 'Higiene',
    store: 'Mercado Central',
  },
];

let selectedProductId = null;
const stores = [];

const findStoreByName = (name) => stores.find((store) => store.name.toLowerCase() === name.trim().toLowerCase());

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
    .map((product) => {
      const store = findStoreByName(product.store);
      const logoBadge = store && store.logoUrl ? `<span class="store-logo-badge" style="background-image: url('${store.logoUrl}')"></span>` : '';
      return `
        <article class="product-card" data-id="${product.id}">
          <div class="product-card-image" style="${product.imageUrl ? `background-image: url('${product.imageUrl}')` : ''}">
            ${logoBadge}
          </div>
          <div class="product-card-info">
            <strong>${product.name}</strong>
            <span>${product.brand} • ${product.weight}</span>
          </div>
          <div class="product-card-meta">
            <span class="price">R$ ${product.price}</span>
            <small>${product.store}</small>
          </div>
        </article>
      `;
    })
    .join('');
};

const readImageFile = (input) => {
  const file = input?.files?.[0];
  if (!file) return Promise.resolve(null);

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
};

const setPreviewImage = (previewImage, fileInput) => {
  if (!previewImage || !fileInput) return;

  const file = fileInput.files?.[0];
  if (!file) {
    previewImage.hidden = true;
    previewImage.src = '';
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    previewImage.src = reader.result;
    previewImage.hidden = false;
  };
  reader.readAsDataURL(file);
};

const showProductDetail = (id) => {
  selectedProductId = id;
  const product = products.find((item) => item.id === id);
  if (!product || !productDetailSection || !productDetailForm || !productDetailView) return;

  productDetailSection.hidden = false;
  productDetailSection.classList.remove('hidden');
  productDetailView.hidden = false;
  productDetailView.classList.remove('hidden');
  productDetailForm.hidden = true;
  productDetailForm.classList.add('hidden');
  btnDetailTab?.classList.add('active');
  btnEditTab?.classList.remove('active');

  const viewImage = document.getElementById('viewImage');
  if (viewImage) {
    if (product.imageUrl) {
      viewImage.src = product.imageUrl;
      viewImage.hidden = false;
    } else {
      viewImage.hidden = true;
      viewImage.src = '';
    }
  }

  document.getElementById('viewName').textContent = product.name;
  document.getElementById('viewBrand').textContent = product.brand;
  document.getElementById('viewWeight').textContent = product.weight;
  document.getElementById('viewPrice').textContent = `R$ ${product.price}`;
  document.getElementById('viewCategory').textContent = product.category;
  document.getElementById('viewStore').textContent = product.store;
  document.getElementById('viewDescription').textContent = product.description;

  productDetailForm.elements.detailName.value = product.name;
  productDetailForm.elements.detailBrand.value = product.brand;
  productDetailForm.elements.detailWeight.value = product.weight;
  productDetailForm.elements.detailPrice.value = product.price;
  productDetailForm.elements.detailDescription.value = product.description;
  productDetailForm.elements.detailCategory.value = product.category;
  productDetailForm.elements.detailStore.value = product.store;

  const detailImagePreview = productDetailForm.querySelector('#detailImagePreview');
  if (detailImagePreview) {
    if (product.imageUrl) {
      detailImagePreview.src = product.imageUrl;
      detailImagePreview.hidden = false;
    } else {
      detailImagePreview.hidden = true;
      detailImagePreview.src = '';
    }
  }

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

      <section id="productDetailSection" class="product-detail" hidden>
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
          <img id="viewImage" class="detail-image" alt="Foto do produto" hidden />
          <div class="detail-row"><span class="detail-label">Nome:</span><span id="viewName"></span></div>
          <div class="detail-row"><span class="detail-label">Marca:</span><span id="viewBrand"></span></div>
          <div class="detail-row"><span class="detail-label">Peso / Quantidade:</span><span id="viewWeight"></span></div>
          <div class="detail-row"><span class="detail-label">Preço:</span><span id="viewPrice"></span></div>
          <div class="detail-row"><span class="detail-label">Categoria:</span><span id="viewCategory"></span></div>
          <div class="detail-row"><span class="detail-label">Loja:</span><span id="viewStore"></span></div>
          <p class="detail-description" id="viewDescription"></p>
          <button id="btnOpenEdit" type="button" class="btn btn-primary">Editar informações</button>
        </div>

        <form id="productDetailForm" class="product-detail-edit" hidden>
          <label class="form-label" for="detailName">Nome do produto</label>
          <input id="detailName" name="detailName" type="text" required />

          <label class="form-label" for="detailBrand">Marca</label>
          <input id="detailBrand" name="detailBrand" type="text" />

          <label class="form-label" for="detailWeight">Peso / Quantidade</label>
          <input id="detailWeight" name="detailWeight" type="text" />

          <label class="form-label" for="detailPrice">Preço</label>
          <input id="detailPrice" name="detailPrice" type="number" step="0.01" required />

          <label class="form-label" for="detailDescription">Descrição</label>
          <textarea id="detailDescription" name="detailDescription" rows="4"></textarea>

          <label class="form-label" for="detailImage">Foto do produto</label>
          <input id="detailImage" name="detailImage" type="file" accept="image/*" />
          <img id="detailImagePreview" class="image-preview" alt="Prévia da imagem a ser enviada" hidden />

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

  const detailImageInput = productEditorSection.querySelector('#detailImage');
  const detailImagePreview = productEditorSection.querySelector('#detailImagePreview');
  detailImageInput?.addEventListener('change', () => setPreviewImage(detailImagePreview, detailImageInput));

  productList?.addEventListener('click', (event) => {
    const card = event.target.closest('.product-card');
    if (!card) return;
    const id = card.dataset.id;
    if (id) {
      console.log('[DEBUG] product card clicked', id);
      // destaque visual do card selecionado
      const prev = productList.querySelector('.product-card.selected');
      if (prev) prev.classList.remove('selected');
      card.classList.add('selected');

      showProductDetail(id);
      // Ao clicar no card, abrir diretamente a aba de edição e focar o primeiro campo
      if (productDetailForm) {
        productDetailView.hidden = true;
        productDetailView.classList.add('hidden');
        productDetailForm.hidden = false;
        productDetailForm.classList.remove('hidden');
        btnEditTab?.classList.add('active');
        btnDetailTab?.classList.remove('active');
        const first = productDetailForm.elements.detailName;
        if (first) first.focus();
      } else {
        btnEditTab?.click();
      }
    }
  });

  btnBackToDashboard?.addEventListener('click', hideProductEditor);
  btnCloseDetail?.addEventListener('click', () => {
    if (productDetailSection) {
      productDetailSection.hidden = true;
      productDetailSection.classList.add('hidden');
    }
    selectedProductId = null;
  });
  btnDetailTab?.addEventListener('click', () => {
    if (productDetailView) {
      productDetailView.hidden = false;
      productDetailView.classList.remove('hidden');
    }
    if (productDetailForm) {
      productDetailForm.hidden = true;
      productDetailForm.classList.add('hidden');
    }
    btnDetailTab?.classList.add('active');
    btnEditTab?.classList.remove('active');
  });
  btnEditTab?.addEventListener('click', () => {
    if (productDetailView) {
      productDetailView.hidden = true;
      productDetailView.classList.add('hidden');
    }
    if (productDetailForm) {
      productDetailForm.hidden = false;
      productDetailForm.classList.remove('hidden');
    }
    btnEditTab?.classList.add('active');
    btnDetailTab?.classList.remove('active');
  });
  const btnOpenEdit = productEditorSection.querySelector('#btnOpenEdit');
  const btnCancelEdit = productEditorSection.querySelector('#btnCancelEdit');
  btnOpenEdit?.addEventListener('click', () => btnEditTab?.click());
  btnCancelEdit?.addEventListener('click', () => btnDetailTab?.click());
  productSearch?.addEventListener('input', () => renderProductList(productSearch.value));
  productDetailForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!selectedProductId) return;

    const product = products.find((item) => item.id === selectedProductId);
    if (!product) return;

    const imageInput = productDetailForm.elements.detailImage;
    const imageUrl = imageInput?.files?.length ? await readImageFile(imageInput) : null;

    product.name = productDetailForm.elements.detailName.value;
    product.brand = productDetailForm.elements.detailBrand.value;
    product.weight = productDetailForm.elements.detailWeight.value;
    product.price = productDetailForm.elements.detailPrice.value;
    product.description = productDetailForm.elements.detailDescription.value;
    product.category = productDetailForm.elements.detailCategory.value;
    product.store = productDetailForm.elements.detailStore.value;
    if (imageUrl) {
      product.imageUrl = imageUrl;
    }

    renderProductList(productSearch?.value || '');
    showProductDetail(selectedProductId);
    alert('Detalhes do produto atualizados com sucesso.');
  });
};

const renderStoreList = () => {
  const storeList = document.getElementById('storeList');
  if (!storeList) return;

  if (stores.length === 0) {
    storeList.innerHTML = '<p class="empty-state">Nenhuma loja cadastrada ainda.</p>';
    return;
  }

  storeList.innerHTML = stores
    .map((store) => `
      <article class="store-card">
        <div class="store-card-logo" style="${store.logoUrl ? `background-image: url('${store.logoUrl}')` : ''}"></div>
        <div>
          <strong>${store.name}</strong>
          <span>${store.cnpj || 'CNPJ não informado'}</span>
          <span>${store.contact || 'Contato não informado'}</span>
          <span>${store.address || 'Endereço não informado'}</span>
          <span>${store.hours || 'Horário não informado'}</span>
        </div>
      </article>
    `)
    .join('');
};

const hideProductForm = () => {
  if (productFormSection) productFormSection.hidden = true;
  if (dashboardSection) dashboardSection.hidden = false;
  productForm?.reset();
  if (productImagePreview) {
    productImagePreview.hidden = true;
    productImagePreview.src = '';
  }
};

const showProductForm = () => {
  if (dashboardSection) dashboardSection.hidden = true;
  if (productEditorSection) productEditorSection.hidden = true;
  if (storeScreenSection) storeScreenSection.hidden = true;
  if (productFormSection) productFormSection.hidden = false;
};

const hideStoreScreen = () => {
  if (storeScreenSection) storeScreenSection.hidden = true;
  if (dashboardSection) dashboardSection.hidden = false;
  storeForm?.reset();
  if (storeLogoPreview) {
    storeLogoPreview.hidden = true;
    storeLogoPreview.src = '';
  }
};

const showStoreScreen = (showForm = true) => {
  if (dashboardSection) dashboardSection.hidden = true;
  if (productFormSection) productFormSection.hidden = true;
  if (productEditorSection) productEditorSection.hidden = true;
  if (storeScreenSection) {
    storeScreenSection.hidden = false;
  }
  if (storeForm) {
    storeForm.hidden = !showForm;
  }
  if (storeScreenTitle) {
    storeScreenTitle.textContent = showForm ? 'Cadastro de Loja' : 'Lojas Cadastradas';
  }
  if (storeScreenSubtitle) {
    storeScreenSubtitle.textContent = showForm
      ? 'Preencha os dados da empresa e carregue um logotipo para exibir junto aos produtos.'
      : 'Consulte os estabelecimentos cadastrados e seus dados.';
  }
  renderStoreList();
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
btnBackToAdminStore?.addEventListener('click', hideStoreScreen);
btnCancelStore?.addEventListener('click', hideStoreScreen);
productImageInput?.addEventListener('change', () => setPreviewImage(productImagePreview, productImageInput));
storeLogoInput?.addEventListener('change', () => setPreviewImage(storeLogoPreview, storeLogoInput));

btnAddStore?.addEventListener('click', () => showStoreScreen(true));
btnViewStores?.addEventListener('click', () => showStoreScreen(false));

productForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const productImageInput = document.getElementById('productImage');
  const imageUrl = productImageInput?.files?.length ? await readImageFile(productImageInput) : null;

  const productData = {
    id: String(Date.now()),
    name: document.getElementById('productName')?.value || '',
    brand: document.getElementById('productBrand')?.value || '',
    weight: document.getElementById('productWeight')?.value || '',
    price: document.getElementById('productPrice')?.value || '',
    description: document.getElementById('productDescription')?.value || '',
    category: document.getElementById('productCategory')?.value || '',
    store: document.getElementById('productStore')?.value || '',
    imageUrl: imageUrl || '',
  };

  products.unshift(productData);
  renderProductList(productSearch?.value || '');
  alert(`Produto salvo:\nNome: ${productData.name}\nMarca: ${productData.brand}\nPreço: R$ ${productData.price}`);
  hideProductForm();
});

storeForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const logoUrl = storeLogoInput?.files?.length ? await readImageFile(storeLogoInput) : null;
  const storeData = {
    id: String(Date.now()),
    name: document.getElementById('storeName')?.value || '',
    cnpj: document.getElementById('storeCNPJ')?.value || '',
    contact: document.getElementById('storeContact')?.value || '',
    address: document.getElementById('storeAddress')?.value || '',
    hours: document.getElementById('storeHours')?.value || '',
    logoUrl: logoUrl || '',
  };

  stores.unshift(storeData);
  renderStoreList();
  alert(`Loja cadastrada:\n${storeData.name}`);
  storeForm?.reset();
  if (storeLogoPreview) {
    storeLogoPreview.hidden = true;
    storeLogoPreview.src = '';
  }
});

renderProductList();

/* ═══════════════════════════════════════════
   TELA DE USUÁRIO
   ═══════════════════════════════════════════ */

const adminScreen = document.getElementById('adminScreen');
const userScreen = document.getElementById('userScreen');
const btnNavAdmin = document.getElementById('btnNavAdmin');
const btnNavUser = document.getElementById('btnNavUser');
const userSearch = document.getElementById('userSearch');
const userCategoryBar = document.getElementById('userCategoryBar');
const promotionsList = document.getElementById('promotionsList');
const userProductList = document.getElementById('userProductList');
const userEmptyState = document.getElementById('userEmptyState');
const userProductDetail = document.getElementById('userProductDetail');
const btnCloseUserDetail = document.getElementById('btnCloseUserDetail');

let activeCategory = 'Todos';

const showAdminScreen = () => {
  adminScreen.hidden = false;
  userScreen.hidden = true;
  btnNavAdmin.classList.add('active');
  btnNavUser.classList.remove('active');
};

const showUserScreen = () => {
  adminScreen.hidden = true;
  userScreen.hidden = false;
  btnNavAdmin.classList.remove('active');
  btnNavUser.classList.add('active');
  renderUserCategories();
  renderPromotions();
  renderUserProducts();
};

btnNavAdmin?.addEventListener('click', showAdminScreen);
btnNavUser?.addEventListener('click', showUserScreen);

const getUserCategories = () => {
  const cats = new Set(products.map((p) => p.category));
  return ['Todos', ...Array.from(cats).sort()];
};

const renderUserCategories = () => {
  if (!userCategoryBar) return;
  userCategoryBar.innerHTML = getUserCategories()
    .map((cat) => `<button class="category-chip${cat === activeCategory ? ' active' : ''}" data-category="${cat}">${cat}</button>`)
    .join('');

  userCategoryBar.querySelectorAll('.category-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      activeCategory = chip.dataset.category;
      renderUserCategories();
      renderUserProducts();
    });
  });
};

const getFilteredUserProducts = (filter = '') => {
  const query = filter.trim().toLowerCase();
  return products.filter((product) => {
    const matchesCategory = activeCategory === 'Todos' || product.category === activeCategory;
    const matchesSearch = !query || `${product.name} ${product.brand} ${product.store} ${product.category}`.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });
};

const renderPromotions = () => {
  if (!promotionsList) return;

  const sorted = [...products].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  const promoProducts = sorted.slice(0, 6);

  if (promoProducts.length === 0) {
    promotionsList.innerHTML = '<p class="empty-state">Nenhuma oferta disponível.</p>';
    return;
  }

  promotionsList.innerHTML = promoProducts
    .map((product) => {
      const store = findStoreByName(product.store);
      const logoBadge = store && store.logoUrl ? `<span class="store-logo-badge" style="background-image: url('${store.logoUrl}')"></span>` : '';
      return `
        <article class="promo-card" data-id="${product.id}">
          <div class="promo-card-image" style="${product.imageUrl ? `background-image: url('${product.imageUrl}')` : ''}">
            ${logoBadge}
            <span class="promo-badge">Oferta</span>
          </div>
          <div class="promo-card-info">
            <strong>${product.name}</strong>
            <span>${product.brand} • ${product.weight}</span>
            <span class="promo-price">R$ ${product.price}</span>
          </div>
        </article>
      `;
    })
    .join('');

  promotionsList.querySelectorAll('.promo-card').forEach((card) => {
    card.addEventListener('click', () => openUserProductDetail(card.dataset.id));
  });
};

const renderUserProducts = () => {
  if (!userProductList) return;

  const filtered = getFilteredUserProducts(userSearch?.value || '');

  if (filtered.length === 0) {
    userProductList.innerHTML = '';
    if (userEmptyState) userEmptyState.hidden = false;
    return;
  }

  if (userEmptyState) userEmptyState.hidden = true;

  userProductList.innerHTML = filtered
    .map((product) => {
      const store = findStoreByName(product.store);
      const logoBadge = store && store.logoUrl ? `<span class="store-logo-badge" style="background-image: url('${store.logoUrl}')"></span>` : '';
      return `
        <article class="user-product-card" data-id="${product.id}">
          <div class="user-product-image" style="${product.imageUrl ? `background-image: url('${product.imageUrl}')` : ''}">
            ${logoBadge}
          </div>
          <div class="user-product-info">
            <strong>${product.name}</strong>
            <span class="user-product-brand">${product.brand} • ${product.weight}</span>
            <div class="user-product-bottom">
              <span class="user-product-price">R$ ${product.price}</span>
              <span class="user-product-store">${product.store}</span>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  userProductList.querySelectorAll('.user-product-card').forEach((card) => {
    card.addEventListener('click', () => openUserProductDetail(card.dataset.id));
  });
};

const openUserProductDetail = (id) => {
  const product = products.find((item) => item.id === id);
  if (!product || !userProductDetail) return;

  document.getElementById('userDetailName').textContent = product.name;
  document.getElementById('userDetailBrand').textContent = product.brand;
  document.getElementById('userDetailWeight').textContent = product.weight;
  document.getElementById('userDetailPrice').textContent = `R$ ${product.price}`;
  document.getElementById('userDetailStore').textContent = product.store;
  document.getElementById('userDetailDescription').textContent = product.description;

  const imageEl = document.getElementById('userDetailImage');
  if (product.imageUrl) {
    imageEl.style.backgroundImage = `url('${product.imageUrl}')`;
  } else {
    imageEl.style.backgroundImage = '';
  }

  userProductDetail.hidden = false;
  document.body.style.overflow = 'hidden';
};

const closeUserProductDetail = () => {
  if (userProductDetail) userProductDetail.hidden = true;
  document.body.style.overflow = '';
};

btnCloseUserDetail?.addEventListener('click', closeUserProductDetail);
userProductDetail?.addEventListener('click', (e) => {
  if (e.target === userProductDetail) closeUserProductDetail();
});

userSearch?.addEventListener('input', () => renderUserProducts());
