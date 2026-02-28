import mockData from '../data/mockData.json';

let products = [...mockData.products];
let users = [...mockData.users];
let nextProductId = products.length + 1;

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  // User APIs
  async getUsers() {
    await delay(500);
    return users;
  },

  async login(email, password) {
    await delay(500);
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
    throw new Error('Invalid credentials');
  },

  async register(userData) {
    await delay(500);
    const newUser = {
      id: users.length + 1,
      ...userData,
      role: 'buyer'
    };
    users.push(newUser);
    const { password, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  },

  // Product APIs
  async getProducts() {
    await delay(500);
    return products;
  },

  async getProductById(id) {
    await delay(500);
    const product = products.find(p => p.id === parseInt(id));
    if (!product) throw new Error('Product not found');
    return product;
  },

  async getProductsByFarmer(farmerId) {
    await delay(500);
    return products.filter(p => p.farmerId === farmerId);
  },

  async createProduct(productData) {
    await delay(500);
    const newProduct = {
      id: nextProductId++,
      ...productData
    };
    products.push(newProduct);
    return newProduct;
  },

  async updateProduct(id, productData) {
    await delay(500);
    const index = products.findIndex(p => p.id === parseInt(id));
    if (index === -1) throw new Error('Product not found');
    products[index] = { ...products[index], ...productData };
    return products[index];
  },

  async deleteProduct(id) {
    await delay(500);
    products = products.filter(p => p.id !== parseInt(id));
    return { success: true };
  }
};
