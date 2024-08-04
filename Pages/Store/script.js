// script.js
const products = [
    {
        id: 1,
        name: 'Basic Antivirus',
        description: 'Avast Antivirus is a family of cross-platform internet security applications developed by Avast for Microsoft Windows, macOS, Android, and iOS. Avast offers free and paid products that provide computer security, browser security, antivirus software, firewall, anti-phishing, antispyware, and anti-spam, among other services.',
        price: 'Free',
        rating: 4.5,
        category: 'Protection',
        image: '../../images/avast.jpeg',
        link: 'https://www.avast.com/lp-ppc-free-av-brand?full_trSrc=mmm_ava_tst_007_402_c&om_sem_cid=hho_sem_sy:~en-ww_ava_sch_brn_exc_bng_dtp~&gclid=fd0c5e9a0da41bd069783834b8d7e10b&gclsrc=3p.ds&msclkid=fd0c5e9a0da41bd069783834b8d7e10b&utm_source=bing&utm_medium=cpc&utm_campaign=en-ww_ava_sch_brn_exc_bng_dtp&utm_term=avast%20antivirus&utm_content=top-avast_antivirus-exact?full_trSrc=mmm_ava_tst_007_402_c&om_sem_cid=hho_sem_sy:~en-ww_ava_sch_brn_exc_bng_dtp~&gclid=fd0c5e9a0da41bd069783834b8d7e10b&gclsrc=3p.ds&msclkid=fd0c5e9a0da41bd069783834b8d7e10b&utm_source=bing&utm_medium=cpc&utm_campaign=en-ww_ava_sch_brn_exc_bng_dtp&utm_term=avast%20antivirus&utm_content=top-avast_antivirus-exact#pc'
    },
    {
        id: 2,
        name: 'Norton Antivirus Plus',
        description: "We're so confident in our antivirus and malware protection, it comes with our Virus Protection Promise. If your device gets a virus our experts can't remove, you will get your money back",
        price: 'R 349.99',
        rating: 4.5,
        category: 'Protection',
        image: '../../images/norton.jpeg',
        link: 'https://za.norton.com/'
    },
    {
        id: 4,
        name: 'Cynet',
        description: "Explore Cynet’s All-in-One Cybersecurity Platform. Natively automated, fully integrated, end-to-end platform. Understand all the features included in Cynet's offering and the associated costs.",
        price: 'R 127,92',
        rating: 4.7,
        category: 'Endpoint Security',
        image: '../../images/Cynet.jpeg',
        link: 'https://www.cynet.com/packages/'
        
    },
    {
        id: 5,
        name: 'Total Av',
        description: 'Protect your email from phishing and spam.',
        price: 'Free',
        rating: 4.2,
        category: 'Protection',
        image: '../../images/TotalAV.jpeg',
        link: ' https://www.totalav.com/free-antivirus-software-3?exit='
    },
    {
        id: 6,
        name: 'Avg',
        description: 'Enjoy a lifetime of powerful & essential free or unlimited premium antivirus protection. Fast, reliable & easy antivirus software. Get Internet Security from AVG.',
        price: 'Free',
        rating: 4.6,
        category: 'Data Security',
        image: '../../images/avg-logo-v2.png',
        link: ''
    },
    {
        id: 7,
        name: 'Bitdefender Antivirus Plus',
        description: 'Comprehensive network security solutions.',
        price: 'R127,92',
        rating: 4.5,
        category: 'Network Security',
        image: '../../images/BitdefenderAntivirusPlus.jpeg',
        link: 'https://www.bitdefender.com/pages/consumer/en/new/cl-offer-opt/avguide?clickid=VBLwfi1yNxyKUAf2SrRnuS%3AWUkCzgbTyw0f5040&irgwc=1&MPid=1246806&cid=aff%7Cc%7Cir&pid=50offer'
    },
    {
        id: 8,
        name: 'panda cloud antivirus',
        description: 'rowse, Shop or Bank Online Fully Protected with Panda Dome Next-gen Antivirus 2024. Exclusive Online Offer! Up to 45% Off Next-gen Antivirus for All Devices.',
        price: 'R146,20',
        rating: 4.3,
        category: 'Security Tools',
        image: '../../images/Panda.jpeg',
        link: 'https://example.com/vulnerability-scanner'
    },
    {
        id: 9,
        name: 'Perimeter81',
        description: 'Identity management through Perimeter 81 enables a stronger, user-centric security stance by transforming how your organization handles access and passwords.',
        price: 'R146,20',
        rating: 3.9,
        category: 'Identity Management',
        image: '../../images/Perimeter.jpeg',
        link: 'https://www.perimeter81.com/pricing?accountid=F119L94U&utm_source=bing&utm_medium=cpc&utm_campaign=369307536&utm_adgroup=1315016737840866&utm_target=kwd-82188779977909:aud-808109859&utm_matchtype=e&utm_network=o&utm_device=c&utm_creative=82188826678847&utm_term=perimeter%2081%20pricing&utm_adposition=&utm_content=1315016737840866&utm_placement&utm_campaigntype=performance&msclkid=6476d9ca3ac51506e5f0bf65165ef861'
    }
];

const categories = ['All', ...new Set(products.map(product => product.category))];

const categoryMenu = document.getElementById('category-menu');
categories.forEach(category => {
    const a = document.createElement('a');
    a.href = "#";
    a.textContent = category;
    a.className = 'category-item'; // Added class for styling
    a.onclick = (event) => {
        event.preventDefault();
        if (category === 'All') {
            displayProducts(products);
        } else {
            filterProducts(category);
        }
    };
    categoryMenu.appendChild(a);
});

const productList = document.getElementById('product-list');

function displayProducts(productsToDisplay) {
    productList.innerHTML = '';
    productsToDisplay.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Rating: ${product.rating}</p>
            <p>Price: ${product.price}</p>
            <button onclick="openModal(${product.id})">View</button>
        `;
        productList.appendChild(productItem);
    });
}

function filterProducts(category) {
    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

// Display all products initially
displayProducts(products);

function openModal(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('product-modal');
    modal.querySelector('.modal-content').innerHTML = `
        <span class="close" onclick="closeModal()"><i class="fa-solid fa-x"></i></span>
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}">
        <p>${product.description}</p>
        <p>Rating: ${product.rating}</p>
        <p>Price: ${product.price}</p>
        <button onclick="window.open('${product.link}', '_blank')">Visit Webpage</button>
        <button class="back-btn" onclick="closeModal()"><i class="fa-solid fa-arrow-left"></i> Back</button>
    `;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('product-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}