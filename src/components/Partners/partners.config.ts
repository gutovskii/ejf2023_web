export interface PartnersConfig {
  [companyName: string]: PartnerData;
}

export interface PartnerData {
  description: string;
  url: string;
  btnText: string;
  imgSrcs: {
    first: string;
    second: string;
    third: string;
  };
  logoSrc: string;
}

export const partnersConfig: PartnersConfig = {
  SoftServe: {
    logoSrc: '/images/company-full-logos/softserve.svg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem repellat ut explicabo vel facilis, obcaecati quisquam amet sunt, nulla aut quis sed at nam aperiam distinctio. Corporis rem quisquam aut, quibusdam dolorem dicta? In ab sequi reiciendis minima obcaecati maxime, quasi animi illum provident eveniet voluptatibus ratione aspernatur dolorem dolores odit tempora sapiente nisi fuga tempore consectetur eligendi? Maxime dolorum, voluptas illo nisi necessitatibus odio quo aliquam repellendus! Delectus doloremque esse voluptatibus sunt expedita? Possimus sint, ex cumque dolor quae voluptatem tempore molestias dolores temporibus obcaecati quisquam quos hic ullam quibusdam amet aspernatur veniam quia ipsa quasi a maxime et nemo nisi! Dolorum vel praesentium cupiditate dolores, deserunt nemo mollitia officia doloremque magni magnam quibusdam autem illum, maiores velit laboriosam maxime. Accusantium incidunt similique aspernatur enim distinctio aut nobis exercitationem deserunt eligendi deleniti, nemo omnis dolore esse possimus sint rerum sunt eaque tempora? Perspiciatis sint sed, ex soluta odio dolorem asperiores quibusdam nesciunt aspernatur sunt animi vitae inventore corrupti a necessitatibus aliquam itaque quos nulla ipsam suscipit! A totam aliquid, modi necessitatibus voluptatum magnam facilis earum harum hic vero doloremque officiis corrupti repellendus, dolorem voluptatem perferendis recusandae impedit eveniet exercitationem, quia debitis perspiciatis velit praesentium. Neque placeat accusantium provident iure! Labore, corrupti perspiciatis eum atque minima voluptatibus voluptates quibusdam vel esse autem dolorem molestiae quasi officia ab recusandae modi et saepe iusto, repellat eius. Dolore eum, id nam explicabo ratione delectus consectetur ducimus harum veniam, autem distinctio recusandae quos esse a. Doloribus, pariatur sequi id vel praesentium consequatur aperiam, iusto ut similique amet repellat placeat rerum blanditiis quo voluptatem saepe sint quisquam corporis esse necessitatibus. Corrupti pariatur reprehenderit labore suscipit similique magnam fuga ipsa inventore repudiandae tenetur ipsum voluptas eum repellendus, iste voluptate ex delectus possimus, veritatis iure? Velit repellat quae quisquam nisi. Obcaecati corporis nemo sequi deserunt. Architecto.',
    url: 'https://google.com',
    btnText: 'Перейти на DOU',
    imgSrcs: {
      first: '/images/company-photos/softserve1.png',
      second: '/images/company-photos/softserve2.png',
      third: '/images/company-photos/softserve3.png',
    },
  },
  A: {
    logoSrc: '/images/company-full-logos/softserve.svg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem repellat ut explicabo vel facilis, obcaecati quisquam amet sunt, nulla aut quis sed at nam aperiam distinctio. Corporis rem quisquam aut, quibusdam dolorem dicta? In ab sequi reiciendis minima obcaecati maxime, quasi animi illum provident eveniet voluptatibus ratione aspernatur dolorem dolores odit tempora sapiente nisi fuga tempore consectetur eligendi? Maxime dolorum, voluptas illo nisi necessitatibus odio quo aliquam repellendus! Delectus doloremque esse voluptatibus sunt expedita? Possimus sint, ex cumque dolor quae voluptatem tempore molestias dolores temporibus obcaecati quisquam quos hic ullam quibusdam amet aspernatur veniam quia ipsa quasi a maxime et nemo nisi! Dolorum vel praesentium cupiditate dolores, deserunt nemo mollitia officia doloremque magni magnam quibusdam autem illum, maiores velit laboriosam maxime. Accusantium incidunt similique aspernatur enim distinctio aut nobis exercitationem deserunt eligendi deleniti, nemo omnis dolore esse possimus sint rerum sunt eaque tempora? Perspiciatis sint sed, ex soluta odio dolorem asperiores quibusdam nesciunt aspernatur sunt animi vitae inventore corrupti a necessitatibus aliquam itaque quos nulla ipsam suscipit! A totam aliquid, modi necessitatibus voluptatum magnam facilis earum harum hic vero doloremque officiis corrupti repellendus, dolorem voluptatem perferendis recusandae impedit eveniet exercitationem, quia debitis perspiciatis velit praesentium. Neque placeat accusantium provident iure! Labore, corrupti perspiciatis eum atque minima voluptatibus voluptates quibusdam vel esse autem dolorem molestiae quasi officia ab recusandae modi et saepe iusto, repellat eius. Dolore eum, id nam explicabo ratione delectus consectetur ducimus harum veniam, autem distinctio recusandae quos esse a. Doloribus, pariatur sequi id vel praesentium consequatur aperiam, iusto ut similique amet repellat placeat rerum blanditiis quo voluptatem saepe sint quisquam corporis esse necessitatibus. Corrupti pariatur reprehenderit labore suscipit similique magnam fuga ipsa inventore repudiandae tenetur ipsum voluptas eum repellendus, iste voluptate ex delectus possimus, veritatis iure? Velit repellat quae quisquam nisi. Obcaecati corporis nemo sequi deserunt. Architecto.',
    url: 'https://google.com',
    btnText: 'Перейти на DOU',
    imgSrcs: {
      first: '',
      second: '',
      third: '/images/company-photos/softserve3.png',
    },
  },
  B: {
    logoSrc: '/images/company-full-logos/softserve.svg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem repellat ut explicabo vel facilis, obcaecati quisquam amet sunt, nulla aut quis sed at nam aperiam distinctio. Corporis rem quisquam aut, quibusdam dolorem dicta? In ab sequi reiciendis minima obcaecati maxime, quasi animi illum provident eveniet voluptatibus ratione aspernatur dolorem dolores odit tempora sapiente nisi fuga tempore consectetur eligendi? Maxime dolorum, voluptas illo nisi necessitatibus odio quo aliquam repellendus! Delectus doloremque esse voluptatibus sunt expedita? Possimus sint, ex cumque dolor quae voluptatem tempore molestias dolores temporibus obcaecati quisquam quos hic ullam quibusdam amet aspernatur veniam quia ipsa quasi a maxime et nemo nisi! Dolorum vel praesentium cupiditate dolores, deserunt nemo mollitia officia doloremque magni magnam quibusdam autem illum, maiores velit laboriosam maxime. Accusantium incidunt similique aspernatur enim distinctio aut nobis exercitationem deserunt eligendi deleniti, nemo omnis dolore esse possimus sint rerum sunt eaque tempora? Perspiciatis sint sed, ex soluta odio dolorem asperiores quibusdam nesciunt aspernatur sunt animi vitae inventore corrupti a necessitatibus aliquam itaque quos nulla ipsam suscipit! A totam aliquid, modi necessitatibus voluptatum magnam facilis earum harum hic vero doloremque officiis corrupti repellendus, dolorem voluptatem perferendis recusandae impedit eveniet exercitationem, quia debitis perspiciatis velit praesentium. Neque placeat accusantium provident iure! Labore, corrupti perspiciatis eum atque minima voluptatibus voluptates quibusdam vel esse autem dolorem molestiae quasi officia ab recusandae modi et saepe iusto, repellat eius. Dolore eum, id nam explicabo ratione delectus consectetur ducimus harum veniam, autem distinctio recusandae quos esse a. Doloribus, pariatur sequi id vel praesentium consequatur aperiam, iusto ut similique amet repellat placeat rerum blanditiis quo voluptatem saepe sint quisquam corporis esse necessitatibus. Corrupti pariatur reprehenderit labore suscipit similique magnam fuga ipsa inventore repudiandae tenetur ipsum voluptas eum repellendus, iste voluptate ex delectus possimus, veritatis iure? Velit repellat quae quisquam nisi. Obcaecati corporis nemo sequi deserunt. Architecto.',
    url: 'https://google.com',
    btnText: 'Перейти на DOU',
    imgSrcs: {
      first: '',
      second: '',
      third: '/images/company-photos/softserve3.png',
    },
  },
  C: {
    logoSrc: '/images/company-full-logos/softserve.svg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem repellat ut explicabo vel facilis, obcaecati quisquam amet sunt, nulla aut quis sed at nam aperiam distinctio. Corporis rem quisquam aut, quibusdam dolorem dicta? In ab sequi reiciendis minima obcaecati maxime, quasi animi illum provident eveniet voluptatibus ratione aspernatur dolorem dolores odit tempora sapiente nisi fuga tempore consectetur eligendi? Maxime dolorum, voluptas illo nisi necessitatibus odio quo aliquam repellendus! Delectus doloremque esse voluptatibus sunt expedita? Possimus sint, ex cumque dolor quae voluptatem tempore molestias dolores temporibus obcaecati quisquam quos hic ullam quibusdam amet aspernatur veniam quia ipsa quasi a maxime et nemo nisi! Dolorum vel praesentium cupiditate dolores, deserunt nemo mollitia officia doloremque magni magnam quibusdam autem illum, maiores velit laboriosam maxime. Accusantium incidunt similique aspernatur enim distinctio aut nobis exercitationem deserunt eligendi deleniti, nemo omnis dolore esse possimus sint rerum sunt eaque tempora? Perspiciatis sint sed, ex soluta odio dolorem asperiores quibusdam nesciunt aspernatur sunt animi vitae inventore corrupti a necessitatibus aliquam itaque quos nulla ipsam suscipit! A totam aliquid, modi necessitatibus voluptatum magnam facilis earum harum hic vero doloremque officiis corrupti repellendus, dolorem voluptatem perferendis recusandae impedit eveniet exercitationem, quia debitis perspiciatis velit praesentium. Neque placeat accusantium provident iure! Labore, corrupti perspiciatis eum atque minima voluptatibus voluptates quibusdam vel esse autem dolorem molestiae quasi officia ab recusandae modi et saepe iusto, repellat eius. Dolore eum, id nam explicabo ratione delectus consectetur ducimus harum veniam, autem distinctio recusandae quos esse a. Doloribus, pariatur sequi id vel praesentium consequatur aperiam, iusto ut similique amet repellat placeat rerum blanditiis quo voluptatem saepe sint quisquam corporis esse necessitatibus. Corrupti pariatur reprehenderit labore suscipit similique magnam fuga ipsa inventore repudiandae tenetur ipsum voluptas eum repellendus, iste voluptate ex delectus possimus, veritatis iure? Velit repellat quae quisquam nisi. Obcaecati corporis nemo sequi deserunt. Architecto.',
    url: 'https://google.com',
    btnText: 'Перейти на DOU',
    imgSrcs: {
      first: '',
      second: '',
      third: '/images/company-photos/softserve3.png',
    },
  },
  D: {
    logoSrc: '/images/company-full-logos/softserve.svg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem repellat ut explicabo vel facilis, obcaecati quisquam amet sunt, nulla aut quis sed at nam aperiam distinctio. Corporis rem quisquam aut, quibusdam dolorem dicta? In ab sequi reiciendis minima obcaecati maxime, quasi animi illum provident eveniet voluptatibus ratione aspernatur dolorem dolores odit tempora sapiente nisi fuga tempore consectetur eligendi? Maxime dolorum, voluptas illo nisi necessitatibus odio quo aliquam repellendus! Delectus doloremque esse voluptatibus sunt expedita? Possimus sint, ex cumque dolor quae voluptatem tempore molestias dolores temporibus obcaecati quisquam quos hic ullam quibusdam amet aspernatur veniam quia ipsa quasi a maxime et nemo nisi! Dolorum vel praesentium cupiditate dolores, deserunt nemo mollitia officia doloremque magni magnam quibusdam autem illum, maiores velit laboriosam maxime. Accusantium incidunt similique aspernatur enim distinctio aut nobis exercitationem deserunt eligendi deleniti, nemo omnis dolore esse possimus sint rerum sunt eaque tempora? Perspiciatis sint sed, ex soluta odio dolorem asperiores quibusdam nesciunt aspernatur sunt animi vitae inventore corrupti a necessitatibus aliquam itaque quos nulla ipsam suscipit! A totam aliquid, modi necessitatibus voluptatum magnam facilis earum harum hic vero doloremque officiis corrupti repellendus, dolorem voluptatem perferendis recusandae impedit eveniet exercitationem, quia debitis perspiciatis velit praesentium. Neque placeat accusantium provident iure! Labore, corrupti perspiciatis eum atque minima voluptatibus voluptates quibusdam vel esse autem dolorem molestiae quasi officia ab recusandae modi et saepe iusto, repellat eius. Dolore eum, id nam explicabo ratione delectus consectetur ducimus harum veniam, autem distinctio recusandae quos esse a. Doloribus, pariatur sequi id vel praesentium consequatur aperiam, iusto ut similique amet repellat placeat rerum blanditiis quo voluptatem saepe sint quisquam corporis esse necessitatibus. Corrupti pariatur reprehenderit labore suscipit similique magnam fuga ipsa inventore repudiandae tenetur ipsum voluptas eum repellendus, iste voluptate ex delectus possimus, veritatis iure? Velit repellat quae quisquam nisi. Obcaecati corporis nemo sequi deserunt. Architecto.',
    url: 'https://google.com',
    btnText: 'Перейти на DOU',
    imgSrcs: {
      first: '',
      second: '',
      third: '/images/company-photos/softserve3.png',
    },
  },
  E: {
    logoSrc: '/images/company-full-logos/softserve.svg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem repellat ut explicabo vel facilis, obcaecati quisquam amet sunt, nulla aut quis sed at nam aperiam distinctio. Corporis rem quisquam aut, quibusdam dolorem dicta? In ab sequi reiciendis minima obcaecati maxime, quasi animi illum provident eveniet voluptatibus ratione aspernatur dolorem dolores odit tempora sapiente nisi fuga tempore consectetur eligendi? Maxime dolorum, voluptas illo nisi necessitatibus odio quo aliquam repellendus! Delectus doloremque esse voluptatibus sunt expedita? Possimus sint, ex cumque dolor quae voluptatem tempore molestias dolores temporibus obcaecati quisquam quos hic ullam quibusdam amet aspernatur veniam quia ipsa quasi a maxime et nemo nisi! Dolorum vel praesentium cupiditate dolores, deserunt nemo mollitia officia doloremque magni magnam quibusdam autem illum, maiores velit laboriosam maxime. Accusantium incidunt similique aspernatur enim distinctio aut nobis exercitationem deserunt eligendi deleniti, nemo omnis dolore esse possimus sint rerum sunt eaque tempora? Perspiciatis sint sed, ex soluta odio dolorem asperiores quibusdam nesciunt aspernatur sunt animi vitae inventore corrupti a necessitatibus aliquam itaque quos nulla ipsam suscipit! A totam aliquid, modi necessitatibus voluptatum magnam facilis earum harum hic vero doloremque officiis corrupti repellendus, dolorem voluptatem perferendis recusandae impedit eveniet exercitationem, quia debitis perspiciatis velit praesentium. Neque placeat accusantium provident iure! Labore, corrupti perspiciatis eum atque minima voluptatibus voluptates quibusdam vel esse autem dolorem molestiae quasi officia ab recusandae modi et saepe iusto, repellat eius. Dolore eum, id nam explicabo ratione delectus consectetur ducimus harum veniam, autem distinctio recusandae quos esse a. Doloribus, pariatur sequi id vel praesentium consequatur aperiam, iusto ut similique amet repellat placeat rerum blanditiis quo voluptatem saepe sint quisquam corporis esse necessitatibus. Corrupti pariatur reprehenderit labore suscipit similique magnam fuga ipsa inventore repudiandae tenetur ipsum voluptas eum repellendus, iste voluptate ex delectus possimus, veritatis iure? Velit repellat quae quisquam nisi. Obcaecati corporis nemo sequi deserunt. Architecto.',
    url: 'https://google.com',
    btnText: 'Перейти на DOU',
    imgSrcs: {
      first: '',
      second: '',
      third: '/images/company-photos/softserve3.png',
    },
  },
  F: {
    logoSrc: '/images/company-full-logos/softserve.svg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem repellat ut explicabo vel facilis, obcaecati quisquam amet sunt, nulla aut quis sed at nam aperiam distinctio. Corporis rem quisquam aut, quibusdam dolorem dicta? In ab sequi reiciendis minima obcaecati maxime, quasi animi illum provident eveniet voluptatibus ratione aspernatur dolorem dolores odit tempora sapiente nisi fuga tempore consectetur eligendi? Maxime dolorum, voluptas illo nisi necessitatibus odio quo aliquam repellendus! Delectus doloremque esse voluptatibus sunt expedita? Possimus sint, ex cumque dolor quae voluptatem tempore molestias dolores temporibus obcaecati quisquam quos hic ullam quibusdam amet aspernatur veniam quia ipsa quasi a maxime et nemo nisi! Dolorum vel praesentium cupiditate dolores, deserunt nemo mollitia officia doloremque magni magnam quibusdam autem illum, maiores velit laboriosam maxime. Accusantium incidunt similique aspernatur enim distinctio aut nobis exercitationem deserunt eligendi deleniti, nemo omnis dolore esse possimus sint rerum sunt eaque tempora? Perspiciatis sint sed, ex soluta odio dolorem asperiores quibusdam nesciunt aspernatur sunt animi vitae inventore corrupti a necessitatibus aliquam itaque quos nulla ipsam suscipit! A totam aliquid, modi necessitatibus voluptatum magnam facilis earum harum hic vero doloremque officiis corrupti repellendus, dolorem voluptatem perferendis recusandae impedit eveniet exercitationem, quia debitis perspiciatis velit praesentium. Neque placeat accusantium provident iure! Labore, corrupti perspiciatis eum atque minima voluptatibus voluptates quibusdam vel esse autem dolorem molestiae quasi officia ab recusandae modi et saepe iusto, repellat eius. Dolore eum, id nam explicabo ratione delectus consectetur ducimus harum veniam, autem distinctio recusandae quos esse a. Doloribus, pariatur sequi id vel praesentium consequatur aperiam, iusto ut similique amet repellat placeat rerum blanditiis quo voluptatem saepe sint quisquam corporis esse necessitatibus. Corrupti pariatur reprehenderit labore suscipit similique magnam fuga ipsa inventore repudiandae tenetur ipsum voluptas eum repellendus, iste voluptate ex delectus possimus, veritatis iure? Velit repellat quae quisquam nisi. Obcaecati corporis nemo sequi deserunt. Architecto.',
    url: 'https://google.com',
    btnText: 'Перейти на DOU',
    imgSrcs: {
      first: '',
      second: '',
      third: '/images/company-photos/softserve3.png',
    },
  },
  G: {
    logoSrc: '/images/company-full-logos/softserve.svg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem repellat ut explicabo vel facilis, obcaecati quisquam amet sunt, nulla aut quis sed at nam aperiam distinctio. Corporis rem quisquam aut, quibusdam dolorem dicta? In ab sequi reiciendis minima obcaecati maxime, quasi animi illum provident eveniet voluptatibus ratione aspernatur dolorem dolores odit tempora sapiente nisi fuga tempore consectetur eligendi? Maxime dolorum, voluptas illo nisi necessitatibus odio quo aliquam repellendus! Delectus doloremque esse voluptatibus sunt expedita? Possimus sint, ex cumque dolor quae voluptatem tempore molestias dolores temporibus obcaecati quisquam quos hic ullam quibusdam amet aspernatur veniam quia ipsa quasi a maxime et nemo nisi! Dolorum vel praesentium cupiditate dolores, deserunt nemo mollitia officia doloremque magni magnam quibusdam autem illum, maiores velit laboriosam maxime. Accusantium incidunt similique aspernatur enim distinctio aut nobis exercitationem deserunt eligendi deleniti, nemo omnis dolore esse possimus sint rerum sunt eaque tempora? Perspiciatis sint sed, ex soluta odio dolorem asperiores quibusdam nesciunt aspernatur sunt animi vitae inventore corrupti a necessitatibus aliquam itaque quos nulla ipsam suscipit! A totam aliquid, modi necessitatibus voluptatum magnam facilis earum harum hic vero doloremque officiis corrupti repellendus, dolorem voluptatem perferendis recusandae impedit eveniet exercitationem, quia debitis perspiciatis velit praesentium. Neque placeat accusantium provident iure! Labore, corrupti perspiciatis eum atque minima voluptatibus voluptates quibusdam vel esse autem dolorem molestiae quasi officia ab recusandae modi et saepe iusto, repellat eius. Dolore eum, id nam explicabo ratione delectus consectetur ducimus harum veniam, autem distinctio recusandae quos esse a. Doloribus, pariatur sequi id vel praesentium consequatur aperiam, iusto ut similique amet repellat placeat rerum blanditiis quo voluptatem saepe sint quisquam corporis esse necessitatibus. Corrupti pariatur reprehenderit labore suscipit similique magnam fuga ipsa inventore repudiandae tenetur ipsum voluptas eum repellendus, iste voluptate ex delectus possimus, veritatis iure? Velit repellat quae quisquam nisi. Obcaecati corporis nemo sequi deserunt. Architecto.',
    url: 'https://google.com',
    btnText: 'Перейти на DOU',
    imgSrcs: {
      first: '',
      second: '',
      third: '/images/company-photos/softserve3.png',
    },
  },
};

export const companyLogosSrc = ['/images/company-mini-logos/softserve.png'];
