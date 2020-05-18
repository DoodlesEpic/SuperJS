const mainContainer = document.getElementsByTagName("main")[0];
const asideContainer = document.getElementsByTagName("aside")[0];

const headerContainer = document.getElementsByTagName("header")[0];
const headerFrag = document.createDocumentFragment();

const sectionContainer = document.getElementsByTagName("section")[0];
const sectionFrag = document.createDocumentFragment();

createMain();

function cleanPage() {
  headerContainer.innerHTML = "";
  headerFrag.innerHTML = "";
  sectionContainer.innerHTML = "";
  sectionFrag.innerHTML = "";
}

function createPage(cb) {
  if (window.innerWidth < 1300) {
    toggleNavbar();
  }
  cleanPage();
  cb();
}

function createTextElement(typeOfElement, textContent, where) {
  const element = document.createElement(typeOfElement);
  element.textContent = textContent;
  return where.appendChild(element);
}

function createTextInputElement(placeholder, where, keyupCb) {
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = placeholder;
  input.onkeyup = (e) => keyupCb(e);
  return where.appendChild(input);
}

function createHeader(cb) {
  cb();
  headerContainer.appendChild(headerFrag);
}

function createSection(cb) {
  cb();
  sectionContainer.appendChild(sectionFrag);
}

function toggleNavbar() {
  if (asideContainer.classList.contains("closed")) {
    asideContainer.classList.remove("closed");
  } else {
    asideContainer.classList.add("closed");
  }
}

function createMain() {
  createPage(() => {
    createHeader(() => {
      createTextElement("h1", "Be welcome to Super JS", headerFrag);
      createTextElement(
        "h2",
        "A web app demonstrating imperative JavaScript capabilities",
        headerFrag
      );
    });

    createSection(() => {
      createTextElement("h3", "Data Binding", sectionFrag);
      createTextElement(
        "p",
        "Let's take a look at what we can do with this, first, we are going to test data binding with forms inputs, insert something in the form below and see the data binding in action, it's just an onkeyup event, but it works.",
        sectionFrag
      );

      createTextInputElement("Try typing something", sectionFrag, (e) => {
        dataBind.textContent = e.target.value;
      });

      const dataBind = createTextElement("p", "", sectionFrag);

      createTextElement("h3", "Navigation", sectionFrag);
      createTextElement(
        "p",
        "Instead of adding a navigation example to this specific page, just check out what kinds of dynamic navigation you can do by using the navigation links in the aside navigation drawer in the left, click one of the buttons and see the magic happen",
        sectionFrag
      );

      createTextElement("h3", "Much more!", sectionFrag);
      createTextElement(
        "p",
        "Take a look at the source code and create a new page or make the code better, it's open source so feel free to do whatever you want and fork the project",
        sectionFrag
      );
    });
  });
}

function createList() {
  createPage(() => {
    createHeader(() => {
      createTextElement("h1", "This is the list", headerFrag);
      createTextElement(
        "h2",
        "Here you can dynamically add content",
        headerFrag
      );
    });

    createSection(() => {
      const input = createTextInputElement("Insert something", sectionFrag);

      const button = document.createElement("button");
      button.textContent = "Add to the list";
      button.onclick = (e) => {
        createTextElement("p", input.value, sectionContainer);
        input.value = "";
      };

      sectionFrag.appendChild(button);
    });
  });
}

function createAbout() {
  createPage(() => {
    createHeader(() => {
      createTextElement("h1", "About this project", headerFrag);
      createTextElement(
        "p",
        "This is just a very simple implementation of data binding and routing using native javascript capabilities such as document fragments, this project is nothing more than just a test for fun, however, it is open source so feel free to fork it anytime and make what you want of it",
        headerFrag
      );
    });

    createSection(() => {
      createTextElement("h3", "How does it work?", sectionFrag);
      createTextElement(
        "p",
        "This project manages navigation by emptying the navigable div's innerHtml and filling it with a newly created document fragment, these document fragments are builts using normal JavaScript methods, however there are functions that abstract and simplify the creation of text and text input tags",
        sectionFrag
      );
      createTextElement(
        "p",
        "To simplify the process of developing the website a few things are just static html such as the aside navbar. Another thing I do is to basically not use classes and instead do css drilling to the components I need to style, this also helps the CSS to be more organized",
        sectionFrag
      );

      createTextElement("h3", "What else?", sectionFrag);
      createTextElement(
        "p",
        "I plan on adding support for navigation using the browser history api, this means that the url will change when navigating to pages and you will be able to reload to the page you were in previously",
        sectionFrag
      );
      createTextElement(
        "p",
        "And I want to refactor a lot of code too :P",
        sectionFrag
      );
    });
  });
}
