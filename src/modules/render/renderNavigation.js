import { list } from "postcss";
import { DATA } from "../const";
import { createElement } from "../createElement";
//import { dataNavigation } from "../dataNavigation";

export const renderNavigation = (gender) => {
  const navigation = document.querySelector('.navigation');

  navigation.textContent = ''

  const container = createElement('div',
    {
      className: 'container'
    },
    {
      parent: navigation,
    }
  );

  const genderList = createElement('ul',
    {
      className: 'navigation__gender gender',
    },
    {
      parent: container,
    }
  );

  for (const genderName in DATA.navigation) {
    createElement('a',
      {
        className: `gender__link
      ${gender === genderName ? 'gender__link_active' : ''}`,
        href: `#/${genderName}`,
        textContent: DATA.navigation[genderName].title
      },
      {
        parent: createElement('li',
          {
            className: 'gender__item',
          },
          {
            parent: genderList,
          },
        ),
      },
    );
  };

  const categoryElems = DATA.navigation[gender].list.map((item) =>
    createElement('li',
      {
        className: 'category__item',
      },
      {
        append: createElement('a',
          {
            className: 'category__link',
            textContent: item.title,
            href: `#/${gender}/${item.slug}`,
          },
          {
            cb(elem) {
              elem.addEventListener('click', () => {
                document
                  .querySelector('.category__link_active')
                  ?.classList.remove('category__link_active');

                elem.classList.add('category__link_active');
              });
            },
          },
        ),
      },
    ),
  );

  createElement(
    'ul',
    {
      className: 'navigation__category category',
    },
    {
      parent: container,
      appends: categoryElems
    },
  );
};


  /*navigation.innerHTML =
  `
   <div class="container">
   <ul class = "navigation__gender gender">
     <li class ="gender__item">
       <a href="#" class ="gender__link gender__link_active">Женщины</a>
     </li>
     <li class ="gender__item">
       <a href="#" class ="gender__link">Мужчины</a>
     </li>
   </ul>

   <ul class="navigation__category category">
     <li class="category__item">
       <a href="#" class="category__link category__link_active">Бюстгальтеры</a>
     </li>
     <li class="category__item">
       <a href="#" class="category__link">Трусы</a>
     </li>
     <li class="category__item">
       <a href="#" class="category__link">Носки</a>
     </li>
     <li class="category__item">
       <a href="#" class="category__link">Халаты</a>
     </li>
     <li class="category__item">
       <a href="#" class="category__link">Термобелье</a>
     </li>
     <li class="category__item">
       <a href="#" class="category__link">Пижамы</a>
     </li>

   </ul>
 </div>
   `;

};
*/