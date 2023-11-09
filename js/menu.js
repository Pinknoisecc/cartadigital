const menu = [
    {
        category: 'entradas',
        items: [
            { name: 'Ratatouille de berenjenas', price: '$8.900', image: './img/Fectuccine a la crema.png', description: 'Láminas de berenjenas a la parrilla sobre pomodoro casero. Rellenas de ricotta, nueces y espinacas.' },
            { name: 'Tartara de tuna y espárragos', price: '$9.500', image: './img/Fectuccine a la crema.png', description: 'Sobre crema de palta y aceite de cilantro.' },
            { name: 'Ceviche de pescado blanco', price: '$9.500', image: './img/Fectuccine a la crema.png', description: 'Sopa de ají amarillo, palta y camote frito.' },
        ]
    },
    {
        category: 'compartir',
        items: [
            { name: 'La huerta', price: '$6.500', image: './img/Fectuccine a la crema.png', description: 'Mix de hojas verdes, tomates, vegetales asados, papas, palta, semillas y pepino.' },
            { name: 'Del campo', price: '$6.800', image: './img/Fectuccine a la crema.png', description: 'Papas mayo, ensalada a la chilena, choclo, cebollas y tomates.' },
            { name: 'Verde y salmón', price: '$7.300', image: './img/Fectuccine a la crema.png', description: 'Brocoli, hojas verdes, palta, pepino, salmón y gajos de naranjas.' },
            { name: 'Selección de empanadas', price: '$13.500', image: './img/Fectuccine a la crema.png', description: 'Pulpo a la parmesana con ají amarillo. Ostión, queso de cabra y espárragos. Carne braseada y mozzarella. Quesos.' },
            { name: 'Pilpil de camarones y ostiones a la parmesana', price: '$14.200', image: './img/Fectuccine a la crema.png', description: 'Acompañado de ...' },
        ]
    },
    {
        category: 'carnes',
        items: [
            { name: 'Pastel de choclo (Solo fin de semana)', price: '$10.800', image: './img/Fectuccine a la crema.png', description: 'Láminas de berenjenas a la parrilla sobre pomodoro casero. Rellenas de ricotta, nueces y espinacas.' },
            { name: 'Conejo confit', price: '$11.500', image: './img/Fectuccine a la crema.png', description: 'Láminas de berenjenas a la parrilla sobre pomodoro casero. Rellenas de ricotta, nueces y espinacas.' },
            { name: 'Costillar de cerdo a la leña', price: '$12.500', image: './img/Fectuccine a la crema.png', description: 'Sobre dúo de puré (zapallo y espinaca) y coleslaw.' },
            { name: 'Reineta a la lata', price: '$12.900', image: './img/Fectuccine a la crema.png', description: 'Acompañada de papas fritas.' },
            { name: 'Merluza austral a la plancha', price: '$13.500', image: './img/Fectuccine a la crema.png', description: 'Acompañada de spaguettis con mantequilla, escamas de ajo frito y perejil.' },
            { name: 'Braseado de osobuco', price: '$14.600', image: './img/Fectuccine a la crema.png', description: 'Acompañado de gnocchis 4 quesos y...' },
            { name: 'Filete, tocino y queso azul tostado', price: '$14.600', image: './img/Fectuccine a la crema.png', description: 'Sobre risotto de hongos silvestres y demi-glace de tomillo.' },
        ]
    },
    {
        category: 'pastas',
        items: [
            { name: 'Sorrentino de mozzarella quemada', price: '$9.500', image: './img/Fectuccine a la crema.png', description: 'Tocino crocante, y tomates secos en salvia.' },
            { name: 'Canelones de setas y berenjenas ahumadas', price: '$9.800', image: './img/Fectuccine a la crema.png', description: 'En salsa de tomates casera, bechamel y parmesano.' },
            { name: 'Lasagna clásica', price: '$9.800', image: './img/Fectuccine a la crema.png', description: 'Boloñesa, queso y crema.' },
            { name: 'Lasagneta de vegetales a la parrilla', price: '$9.800', image: './img/Fectuccine a la crema.png', description: 'Bechamel de puerros, mozzarella...' },
            { name: 'Tortelli de ricotta casera', price: '$9.800', image: './img/Fectuccine a la crema.png', description: 'Zapallo camote asado, espinacas, y nueces tostadas in salsa...' },
            { name: 'Gnocchis de papas', price: '$9.800', image: './img/Fectuccine a la crema.png', description: '...' },
            { name: 'Tortelloni de conejo', price: '$10.100', image: './img/Fectuccine a la crema.png', description: '...' },
            { name: 'Pozuelo de jaiba', price: '$10.500', image: './img/Fectuccine a la crema.png', description: 'En mantequilla de crustáceos y apio. (Camarones, machas y albaca)' },
            { name: 'Spaguetti', price: '$10.500', image: './img/Fectuccine a la crema.png', description: 'Spaguetti...' },
            { name: 'Fetuccine al huevo', price: '$10.600', image: './img/Fectuccine a la crema.png', description: 'Con camarones a la crema y espárragos y tomates confitados.' },
        ]
    },
    {
        category: 'postres',
        items: [
            { name: 'Panqueque celestino', price: '$3.500', image: './img/Fectuccine a la crema.png', description: 'Con helado de vainilla.' },
            { name: 'Cheesecake de frutos rojos', price: '$4.000', image: './img/Fectuccine a la crema.png', description: 'Base de galleta, capa de queso crema endulzado y cobertura de frutos rojos.' },
            { name: 'Torta de chocolate', price: '$4.000', image: './img/Fectuccine a la crema.png', description: 'Delicioso bizcocho de chocolate, manjar y capa de chocolate crujiente.' },
            { name: 'Pannacotta de chirimoya con sopa de naranjas', price: '$4.000', image: './img/Fectuccine a la crema.png', description: 'Crema de leche fresca y gelatina con sabor a chirimoya natural acompañada de sopa de naranjas frescas.' },
            { name: 'Suspiro limeño', price: '$4.500', image: './img/Fectuccine a la crema.png', description: 'Capa de manjar blanco y merengue italiano espolvoreado con canela.' },
        ]
    },
    {
        category: 'cocteleria',
        items: [
            { name: 'Pisco sour', price: '$4.000', image: './img/Fectuccine a la crema.png', description: 'Pisco, jugo de limón y azúcar.' },
            { name: 'Chardonnay Sour', price: '$4.000', image: './img/Fectuccine a la crema.png', description: 'Vino blanco chardonnay, jugo de limón y azúcar.' },
            { name: 'Amaretto Sour', price: '$4.000', image: './img/Fectuccine a la crema.png', description: 'Licor de almendras, jugo de limón y azúcar.' },
            { name: 'Vaina', price: '$4.000', image: './img/Fectuccine a la crema.png', description: 'Vino dulce, coñac, yema de huevo y azúcar.' },
            { name: 'Espumante', price: '$4.000', image: './img/Fectuccine a la crema.png', description: 'Copa de espumante brut, demi sec y rosé.' },
            { name: 'Mojito Cubano', price: '$4.000', image: './img/Fectuccine a la crema.png', description: 'Ron blanco, limón, menta, azúcar y agua mineral.' },
            { name: 'Mojito Espumante', price: '$4.000', image: './img/Fectuccine a la crema.png', description: 'Ron de manzana, limón, menta, agua mineral y espumante.' },
            { name: 'Aperol Spitz', price: '$4.000', image: './img/Fectuccine a la crema.png', description: 'Licor Aperol, naranjas frescas y espumante.' },
            { name: 'Ramazotti Spitz', price: '$4.000', image: './img/Fectuccine a la crema.png', description: 'Licor de Ramazotti, naranjas frescas y espumante.' },
            { name: 'Negroni', price: '$4.000', image: './img/Fectuccine a la crema.png', description: 'Gin, Campari, vermut rojo, hielo y rodajas de naranja.' },
            { name: 'Tequila Margarita', price: '$4.000', image: './img/Fectuccine a la crema.png', description: 'Tequila, Triple Sec y jugo de limón.' },
            { name: 'Clavo Oxidado', price: '$4.000', image: './img/Fectuccine a la crema.png', description: 'Whisky, Drambuie y clavo de olor.' },
            { name: 'Campari', price: '$4.000', image: './img/Fectuccine a la crema.png', description: 'Con jugo de...' },
        ]
    },
];