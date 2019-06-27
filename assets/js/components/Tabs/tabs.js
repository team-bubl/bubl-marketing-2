class TabLink {
    constructor(element) {
        this.element = element;
        const tabNumber = element.dataset.tab
        this.itemElement = document.querySelector(`.tab-item[data-tab="${tabNumber}"]`)
        this.tabItem = new TabItem(this.itemElement);
        element.addEventListener('click', () => this.select());
    }


    select() {
        const links = document.querySelectorAll(".tabs-link");
        [...links].forEach(item => item.classList.remove('.tabs-link-selected'));
        this.element.classList.add('tabs-link-selected');
        this.tabItem.select()
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        const items = document.querySelectorAll(".tab-item");
        [...items].forEach(item => item.classList.remove('tabs-item-selected'))
        this.element.classList.add('tabs-item-selected');
    }
}

const links = document.querySelectorAll(".tabs-link").forEach(link => new TabLink(link));