const customElement = require('custom-element')

const headerProto = customElement(window.HTMLHeadingElement.prototype)
headerProto.extends = 'header'

const header = Object.create(headerProto)

module.exports = header

header.on('attached', function () {
  this.innerHTML = `
    <div class="header-wrap">
      <section class="header-about">
        <h1>Yoshua Wuyts</h1>
        <h2>Engineer</h2>
      </section>
      <section class="header-contact">
        npm install -g yoshua
      </section>
    </div>
  `
})
