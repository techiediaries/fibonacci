(function () {
  //***** Re-usable web components *****//
  
  // Icon Web Component.
  const iconTemplate = document.createElement('template');
  iconTemplate.innerHTML = `<div class="svg-wrap">
    <svg viewBox="0 0 16 16" width="16" height="16">
      <use></use>
    </svg>
  </div>`;
  
  class IconElement extends HTMLElement {
    
    get name() {
      return this.getAttribute('name');
    }
    
    set name(value) {
      this.setAttribute('name', value);
    }
    
    get size() {
      return this.getAttribute('size');
    }
    
    set size(value) {
      this.setAttribute('size', value);
    }
    
    static get observedAttributes() {
      return ['name', 'size'];
    }
    
    constructor() {
      super();
      this.appendChild(iconTemplate.content.cloneNode(true));
    }
    
    attributeChangedCallback(attrName) {
      if (attrName === 'size') {
        if (this.size) {
          this.style.width = `${this.size}px`;
          this.style.height = `${this.size}px`;
        } else {
          this.style.width = this.style.height = 'auto';
        }
      }
      
      if (attrName === 'name') {
        const useElement = this.querySelector('use');
        useElement.setAttribute('xlink:href', `./assets/sprites.svg#${this.name}`);
        useElement.setAttribute('href', `./assets/sprites.svg#${this.name}`);
      }
    }
  }
  
  window.customElements.define('cmp-icon', IconElement);
  
  // Content scroll indicator web component.
  const contentScaleTemplate = document.createElement('template');
  contentScaleTemplate.innerHTML = `
    <div class="cmp__bar"></div>
    <div class="cmp__ticks-container">
      <div class="cmp__tick">
        <div class="cmp__ticks-container">
          <div class="cmp__tick"></div>
          <div class="cmp__tick"></div>
          <div class="cmp__tick"></div>
          <div class="cmp__tick"></div>
          <div class="cmp__tick"></div>
          <div class="cmp__tick"></div>
          <div class="cmp__tick"></div>
          <div class="cmp__tick"></div>
          <div class="cmp__tick"></div>
          <div class="cmp__tick"></div>
        </div>
      </div>
      <div class="cmp__tick">
        <div class="cmp__ticks-container">
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
          </div>
      </div>
      <div class="cmp__tick">
        <div class="cmp__ticks-container">
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
          </div>
      </div>
      <div class="cmp__tick">
        <div class="cmp__ticks-container">
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
          </div>
      </div>
      <div class="cmp__tick">
        <div class="cmp__ticks-container">
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
          </div>
      </div>
      <div class="cmp__tick">
        <div class="cmp__ticks-container">
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
          </div>
      </div>
      <div class="cmp__tick">
        <div class="cmp__ticks-container">
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
          </div>
      </div>
      <div class="cmp__tick">
        <div class="cmp__ticks-container">
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
          </div>
      </div>
      <div class="cmp__tick">
        <div class="cmp__ticks-container">
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
          </div>
      </div>
      <div class="cmp__tick">
        <div class="cmp__ticks-container">
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
            <div class="cmp__tick"></div>
          </div>
      </div>
    </div>
    <div class="cmp__scroll-progress"></div>`;
  
  class ContentScaleElement extends HTMLElement {
    
    constructor() {
      super();
      this.appendChild(contentScaleTemplate.content.cloneNode(true));
    }
  }
  
  window.customElements.define('cmp-content-scale', ContentScaleElement);
  
  // Gracefully renders images.
  const imageElementTemplate = document.createElement('template');
  imageElementTemplate.innerHTML = `
    <div class="cmp__image-info">
      <cmp-icon name="image"></cmp-icon>
      <span class="cmp__status-text"></span>
    </div>
    <cmp-progress class="cmp__first"></cmp-progress>
    <cmp-progress class="cmp__last"></cmp-progress>
  `;
  
  class ImageElement extends HTMLElement {
    
    get src() {
      return this.getAttribute('src');
    }
    
    set src(value) {
      this.setAttribute('src', value);
    }
    
    get alt() {
      return this.getAttribute('alt');
    }
    
    set alt(value) {
      this.setAttribute('alt', value);
    }
    
    get width() {
      return this.getAttribute('width');
    }
    
    set width(value) {
      this.setAttribute('width', value);
    }
    
    get height() {
      return this.getAttribute('height');
    }
    
    set height(value) {
      this.setAttribute('height', value);
    }
    
    get responsive() {
      return this.getAttribute('responsive');
    }
    
    set responsive(value) {
      this.setAttribute('responsive', value);
    }
    
    static get observedAttributes() {
      return ['src', 'alt', 'width', 'height', 'responsive'];
    }
    
    constructor() {
      super();
      this.appendChild(imageElementTemplate.content.cloneNode(true));
    }
    
    connectedCallback() {
      this.style.aspectRatio = this.width / this.height;
      const statusElement = document.querySelector('.cmp__status-text');
      statusElement.innerHTML = this.alt;
      
      const img = document.createElement('img');
      img.style.filter = 'blur(4px)';
      img.addEventListener('load', () => {
        this.classList.add('cmp__image-loaded');
        this.appendChild(img);
        setTimeout(() => {
          img.style.filter = 'blur(0)';
        }, 500);
      });
      img.addEventListener('error', () => {
        this.classList.add('cmp__image-error');
        statusElement.innerHTML = 'Failed to load image';
      });
      img.src = this.src;
    }
  }
  
  window.customElements.define('cmp-image', ImageElement);
  
  // Progress element.
  const progressTemplate = document.createElement('template');
  progressTemplate.innerHTML = `<div class="cmp__squares-container">
    <div class="cmp__square"></div>
    <div class="cmp__square"></div>
    <div class="cmp__square"></div>
    <div class="cmp__square"></div>
    <div class="cmp__square"></div>
  </div>`;
  
  class SquaresProgressElement extends HTMLElement {
    
    constructor() {
      super();
      this.appendChild(progressTemplate.content.cloneNode(true));
    }
  }
  
  window.customElements.define('cmp-progress', SquaresProgressElement);
  
  // Simple decorative element to attract users.
  const wordsFallTemplate = document.createElement('template');
  wordsFallTemplate.innerHTML = ``;
  
  class WordsFallElement extends HTMLElement {
    
    constructor() {
      super();

      this._wordsCloud = [];
      this._colors = [ '#f04875', '#93c225', '#8792a3', '#ebd63b', '#517ee8' ];
      this._sizes = [ '0.908rem', '1rem', '1.212rem', '1.470rem', '1.781rem' ];
      this._animDurations = [ 1, 1.5, 2, 3, 5 ];
      this._interval = 500;
      this._intervalId = null;
      this._noOfLanes = 10;
      this._totalPopulation = 20;
      this._population = 0;
      
      this.appendChild(wordsFallTemplate.content.cloneNode(true));
      this._startTimer = this._startTimer.bind(this);
      this._stopTimer = this._stopTimer.bind(this);
    }
    
    _startTimer() {
      if (this._intervalId || this._wordsCloud.length === 0) {
        return;
      }
      
      this._intervalId = setInterval(() => this._pickWords(), this._interval);
    }
    
    _stopTimer() {
      if (!this._intervalId) {
        return;
      }
      
      clearInterval(this._intervalId);
      this._intervalId = null;
    }
    
    _getRandomNo(max) {
      return ~~(Math.random() * max);
    }
    
    _pickWords() {
      if (this._population >= this._totalPopulation) {
        return;
      }
      
      const word = this._wordsCloud[ this._getRandomNo(this._wordsCloud.length) ],
        lane = this._getRandomNo(this._noOfLanes),
        color = this._colors[ this._getRandomNo(this._colors.length) ],
        size = this._sizes[ this._getRandomNo(this._sizes.length) ],
        animDuration = this._animDurations[ this._getRandomNo(this._animDurations.length) ];
      
      const wordElement = document.createElement('div');
      wordElement.classList.add('cmp__word');
      wordElement.innerHTML = word;
      wordElement.style.left = `${lane * 10}%`;
      wordElement.style.color = color;
      wordElement.style.fontSize = size;
      wordElement.style.animationDuration = `${animDuration}s`;
      wordElement.addEventListener('animationend', () => {
        wordElement.remove();
        this._population--;
      });
      this.appendChild(wordElement);
      this._population++;
    }
    
    connectedCallback() {
      window.addEventListener('focus', this._startTimer);
      window.addEventListener('blur', this._stopTimer);
    }
    
    disconnectedCallback() {
      window.removeEventListener('focus', this._startTimer);
      window.removeEventListener('blur', this._stopTimer);
      this._stopTimer();
    }
  
    init(args) {
      const {
        wordsCloud,
        sizes,
        colors,
        animDurations,
        interval,
        totalPopulation,
        noOfLanes
      } = args;
    
      Array.isArray(wordsCloud) && (this._wordsCloud = wordsCloud);
      Array.isArray(sizes) && (this._sizes = sizes);
      Array.isArray(colors) && (this._colors = colors);
      Array.isArray(animDurations) && (this._animDurations = animDurations);
      typeof interval === 'number' && (this._interval = interval);
      typeof totalPopulation === 'number' && (this._totalPopulation = totalPopulation);
      typeof noOfLanes === 'number' && (this._noOfLanes = noOfLanes);
      this._stopTimer();
      this._startTimer();
    }
    
    activate() {
      this._startTimer();
    }
    
    deactivate() {
      this._stopTimer();
    }
  }
  
  window.customElements.define('cmp-words-fall', WordsFallElement);
  
  //**** Boot function ****/
  function init() {
    const hamburger = document.querySelector('.cmp__hamburger-link a'),
      selectControl = document.querySelector('.cmp__hidden-menu'),
      header = document.querySelector('.cmp__blog-header'),
      nav = document.querySelector('.cmp__blog-nav'),
      searchInput = document.querySelector('.cmp__search-form input'),
      searchIcon = document.querySelector('.cmp__search-form a'),
      contentScale = document.querySelector('cmp-content-scale'),
      wordsFall = document.querySelector('cmp-words-fall'),
      blogContent = document.querySelector('.cmp__blog-content');
    
    function mediaChangeHandler(queryList) {
      let wordsFallArgs;
      
      if (queryList.matches) {
        wordsFallArgs = {
          totalPopulation: 20,
          sizes: [ '0.908rem', '1rem', '1.212rem', '1.470rem', '1.781rem' ]
        };
        searchIcon.removeEventListener('click', searchIconClickHandler);
      } else {
        wordsFallArgs = {
          totalPopulation: 10,
          sizes: [ '0.825rem', '0.908rem', '1rem', '1.212rem']
        };
        searchIcon.addEventListener('click', searchIconClickHandler);
      }
  
      if (wordsFall) {
        wordsFall.init({
          ...wordsFallArgs,
          wordsCloud: [
            'html',
            'CSS',
            'JS',
            'C#',
            '.NET',
            'SQL',
            'python',
            'ASP.NET MVC',
            'progressive web development',
            'Angular',
            'React',
            'backbone',
            'meteorjs',
            'fibonacci',
            'UX',
            'front-end',
            'firebase',
            'XML',
            'Android',
            'Mobile Development',
            'Docker',
            'kubernetes',
            'Azure Cloud',
            'Salesforce',
            'CRM dynamics',
            'AI',
            'Data Analytics',
            'Big Data',
            'cordova',
            'jQuery',
            'web components'
          ]
        });
        if (window.scrollY >= blogContent.offsetTop - 40) {
          wordsFall.deactivate();
        } else {
          wordsFall.activate();
        }
      }
    }
  
    function searchIconClickHandler(e) {
      nav.classList.add('cmp__search-active');
      document.body.addEventListener('click', documentClickHandler);
      searchInput.focus();
      e.stopPropagation();
    }
  
    function documentClickHandler(e) {
      if (e.currentTarget === searchInput || e.currentTarget === searchIcon) {
        return;
      }
    
      nav.classList.remove('cmp__search-active');
      selectControl.value = null;
      document.body.removeEventListener('click', documentClickHandler);
    }
  
    function setScrollProgress() {
      if (!contentScale) {
        return;
      }
    
      const articleContent = document.querySelector('.cmp__article-content');
      const scrollProgress = contentScale.querySelector('.cmp__scroll-progress')
      const articleScrollHeight = articleContent.scrollHeight;
      const articleOffsetTop = articleContent.offsetTop;
    
      if (window.scrollY <= articleOffsetTop) {
        scrollProgress.style.width = '0';
        return;
      }
    
      const percentScrolled = parseInt(((window.scrollY - articleOffsetTop) / articleScrollHeight) * 100, 10);
      scrollProgress.style.width = `${percentScrolled}%`;
    }
  
    hamburger.addEventListener('click', function () {
      selectControl.click();
    });
  
    hamburger.addEventListener('change', function (evt) {
      const page = selectControl.value;
    
      if (!page) {
        return;
      }
    
      if (page === 'search') {
        nav.classList.add('cmp__search-active');
        document.body.addEventListener('click', documentClickHandler);
        searchInput.focus();
        return;
      }
    
      window.location.href = selectControl.value;
    });
  
    searchInput.addEventListener('click', function (e) {
      e.stopPropagation();
    });
    
    const mediaQuery = window.matchMedia('screen and (min-width: 768px)');
    mediaChangeHandler(mediaQuery);
    mediaQuery.addListener(mediaChangeHandler);
    
    const sticky = header.offsetHeight;
    window.addEventListener('scroll', function () {
      // Handling Content Scale.
      if (contentScale) {
        if (window.pageYOffset >= sticky) {
          contentScale.classList.add('cmp__sticky')
        } else {
          contentScale.classList.remove('cmp__sticky');
        }
  
        setScrollProgress();
      }
      
      // Wordsfall component.
      if (wordsFall) {
        if (window.scrollY >= blogContent.offsetTop - 40) {
          wordsFall.deactivate();
        } else {
          wordsFall.activate();
        }
      }
    });
  
    window.addEventListener('resize', function () {
      setScrollProgress();
    });
    
    if (contentScale) {
      const scrollProgress = contentScale.querySelector('.cmp__scroll-progress');
      scrollProgress.classList.add('cmp__no-transition');
      setTimeout(() => {
        setScrollProgress();
        scrollProgress.classList.remove('cmp__no-transition');
      });
    }
  }
  
  init();
})();
