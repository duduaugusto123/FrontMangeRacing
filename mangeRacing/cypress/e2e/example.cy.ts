
const el = {
  homepage: () => cy.get("#homepage"),
  changepagetomotorpage: () => cy.get("#ad"),
  motorpage: () => cy.get("#motorpage"),

  buttonchangemotorcustom: () => cy.get("#tocustom"),
  buttonchangemotorsport: () => cy.get("#tosport"),
  buttonchangemotorbigtrail: () => cy.get("#tobigtrail"),

  pagemotorcustom:() => cy.get("#motorpagecustom"),
  pagemotorsport:() => cy.get("#motorpagesport"),
  pagemotorbigtrail:() => cy.get("#motorpagebigtrail"),



  flag: () => cy.get("header #flag"),
  homeTitle: () => cy.get("#home-page #title"),
  partImagesArray: () => cy.get(".part .part-images"),
  partSelectorArray: () => cy.get(".part"),
  partImage: () => cy.get(".part-images"),
  buttonParts: {
    next: () => cy.get(".next-selector"),
    previous: () => cy.get(".prev-selector"),
  },
  getHeadImage: ()=> cy.get("#top-image"),
  nextHeadButton: ()=> cy.get(".top-row .next-selector"),
  cartContainer: ()=> cy.get("#cart-page"),
  addCartButton: ()=> cy.get("#add-cart"),
  images: {
    head: ()=> cy.get("#top-image"),
    base: ()=> cy.get("#bottom-image"),
    leftArm: ()=> cy.get("#left-image"),
    rightArm: ()=> cy.get("#right-image"),
    torso: ()=> cy.get("#center-image"),
  }
};


describe("testing home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("vendo se esta na home page", () => {
    el.homepage().should("exist");
  });

  it("testando botao de mudar para motorpage", () => {
    el.changepagetomotorpage().click();
    el.motorpage().should("exist");
  });
});



describe("testing motor page", () => {
  beforeEach(() => {
    cy.visit("/motors");
  });

  it("vendo se realmente esta na pagina de motorpage", () => {
    el.motorpage().should("exist");
  });

  it("testando botao que vai paga a pagina de construção de moto custom", () => {
    el.buttonchangemotorcustom().click();
    el.pagemotorcustom().should("exist");
    cy.visit("/motors");
    el.motorpage().should("exist");
  });

  it("testando botao que vai paga a pagina de construção de moto custom", () => {
    el.buttonchangemotorsport().click();
    el.pagemotorsport().should("exist");
    cy.visit("/motors");
    el.motorpage().should("exist");
  });

  it("testando botao que vai paga a pagina de construção de moto custom", () => {
    el.buttonchangemotorbigtrail().click();
    el.pagemotorbigtrail().should("exist");
    cy.visit("/motors");
    el.motorpage().should("exist");
  });
});

