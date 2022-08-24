export default function Navbar () {
    return (
      <div>
<nav className="header__nav">
        <input type="checkbox" name="" id="check" />
        <label className="checkbox__label" for="check">&#8801;</label>
        <ul className="header__menu">
          <li className="header__menu__item"><a href="#about">Sobre</a></li>
          <li className="header__menu__item"><a href="#hobbies">Hobbies</a></li>
          <li className="header__menu__item"><a href="#courses">Formações</a></li>
          <li className="header__menu__item"><a href="#skills">Ferramentas</a></li>
          <li className="header__menu__item"><a href="#projects">Projetos</a></li>
          <li className="header__menu__item"><a href="#contact">Contato</a></li>
        </ul>
      </nav>
      </div>
        
    )
}