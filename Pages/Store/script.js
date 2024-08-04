// script.js
const products = [
    {
        id: 1,
        name: 'Basic Antivirus',
        description: 'Avast Antivirus is a family of cross-platform internet security applications developed by Avast for Microsoft Windows, macOS, Android, and iOS. Avast offers free and paid products that provide computer security, browser security, antivirus software, firewall, anti-phishing, antispyware, and anti-spam, among other services.',
        price: 'Free',
        rating: 4.5+"/"+5,
        category: 'Protection',
        image: '../../images/avast.jpeg',
        link: 'https://www.avast.com/lp-ppc-free-av-brand?full_trSrc=mmm_ava_tst_007_402_c&om_sem_cid=hho_sem_sy:~en-ww_ava_sch_brn_exc_bng_dtp~&gclid=fd0c5e9a0da41bd069783834b8d7e10b&gclsrc=3p.ds&msclkid=fd0c5e9a0da41bd069783834b8d7e10b&utm_source=bing&utm_medium=cpc&utm_campaign=en-ww_ava_sch_brn_exc_bng_dtp&utm_term=avast%20antivirus&utm_content=top-avast_antivirus-exact?full_trSrc=mmm_ava_tst_007_402_c&om_sem_cid=hho_sem_sy:~en-ww_ava_sch_brn_exc_bng_dtp~&gclid=fd0c5e9a0da41bd069783834b8d7e10b&gclsrc=3p.ds&msclkid=fd0c5e9a0da41bd069783834b8d7e10b&utm_source=bing&utm_medium=cpc&utm_campaign=en-ww_ava_sch_brn_exc_bng_dtp&utm_term=avast%20antivirus&utm_content=top-avast_antivirus-exact#pc'
    },
    {
        id: 2,
        name: 'Norton Antivirus Plus',
        description: "We're so confident in our antivirus and malware protection, it comes with our Virus Protection Promise. If your device gets a virus our experts can't remove, you will get your money back",
        price: 'R 349.99',
        rating: 4.5+"/"+5,
        category: 'Protection',
        image: '../../images/norton.jpeg',
        link: 'https://za.norton.com/'
    },
    {
        id: 3,
        name: 'Cisco Meraki MX',
        description: 'Protect your network from unauthorized access.',
        price: '$100.00',
        rating: 4.3,
        category: 'Network Security',
        image: 'path/to/firewall1.jpg',
        link: 'https://example.com/firewall-protection'
    },
    {
        id: 4,
        name: '',
        description: 'Download Our Fast, Powerful, Simple To Use, Antivirus Protection',
        price: 'Free',
        rating: 4.6,
        category: 'Endpoint Security',
        image: 'path/to/endpoint1.jpg',
        link: ''
    },
    {
        id: 5,
        name: 'Total Av',
        description: 'Protect your email from phishing and spam.',
        price: '$30.00',
        rating: 4.2,
        category: 'Protection',
        image: 'path/to/email1.jpg',
        link: ' https://www.totalav.com/free-antivirus-software-3?exit='
    },
    {
        id: 6,
        name: 'Data Encryption',
        description: 'Secure your data with advanced encryption.',
        price: '$80.00',
        rating: 4.7,
        category: 'Data Security',
        image: 'path/to/encryption1.jpg',
        link: 'https://example.com/data-encryption'
    },
    {
        id: 7,
        name: 'Network Security',
        description: 'Comprehensive network security solutions.',
        price: '$120.00',
        rating: 4.5,
        category: 'Network Security',
        image: 'path/to/network1.jpg',
        link: 'https://example.com/network-security'
    },
    {
        id: 8,
        name: 'Cloud Security',
        description: 'Protect your cloud infrastructure.',
        price: '$200.00',
        rating: 4.8,
        category: 'Cloud Security',
        image: 'path/to/cloud1.jpg',
        link: 'https://example.com/cloud-security'
    },
    {
        id: 9,
        name: 'Identity Management',
        description: 'Securely manage user identities.',
        price: '$60.00',
        rating: 4.4,
        category: 'Identity Management',
        image: 'path/to/identity1.jpg',
        link: 'https://example.com/identity-management'
    },
    {
        id: 10,
        name: 'Vulnerability Scanner',
        description: 'Identify and fix vulnerabilities.',
        price: '$90.00',
        rating: 4.3,
        category: 'Security Tools',
        image: 'path/to/scanner1.jpg',
        link: 'https://example.com/vulnerability-scanner'
    },
    {
        id: 11,
        name: 'Web Security',
        description: 'Protect your website from attacks.',
        price: '$70.00',
        rating: 4.2,
        category: 'Web Security',
        image: 'path/to/web1.jpg',
        link: 'https://example.com/web-security'
    },
    {
        id: 12,
        name: 'SIEM Solution',
        description: 'Security Information and Event Management.',
        price: '$250.00',
        rating: 4.6,
        category: 'Security Tools',
        image: 'path/to/siem1.jpg',
        link: 'https://example.com/siem-solution'
    },
    {
        id: 13,
        name: 'Penetration Testing',
        description: 'Simulate attacks to test defenses.',
        price: '$300.00',
        rating: 4.7,
        category: 'Security Tools',
        image: 'path/to/pen1.jpg',
        link: 'https://example.com/penetration-testing'
    },
    {
        id: 14,
        name: 'DDoS Protection',
        description: 'Prevent Distributed Denial of Service attacks.',
        price: '$180.00',
        rating: 4.5,
        category: 'Network Security',
        image: 'path/to/ddos1.jpg',
        link: 'https://example.com/ddos-protection'
    },
    {
        id: 15,
        name: 'Mobile Security',
        description: 'Protect your mobile devices.',
        price: '$40.00',
        rating: 4.3,
        category: 'Endpoint Security',
        image: 'path/to/mobile1.jpg',
        link: 'https://example.com/mobile-security'
    },
    {
        id: 16,
        name: 'Web Application Firewall',
        description: 'Protect your web applications.',
        price: '$110.00',
        rating: 4.6,
        category: 'Web Security',
        image: 'path/to/waf1.jpg',
        link: 'https://example.com/web-application-firewall'
    },
    {
        id: 17,
        name: 'Backup Solution',
        description: 'Ensure data integrity with regular backups.',
        price: '$130.00',
        rating: 4.5,
        category: 'Data Security',
        image: 'path/to/backup1.jpg',
        link: 'https://example.com/backup-solution'
    },
    {
        id: 18,
        name: 'Ransomware Protection',
        description: 'Prevent and mitigate ransomware attacks.',
        price: '$160.00',
        rating: 4.4,
        category: 'Protection',
        image: 'path/to/ransomware1.jpg',
        link: 'https://example.com/ransomware-protection'
    },
    {
        id: 19,
        name: 'Patch Management',
        description: 'Automate patching of systems and applications.',
        price: '$50.00',
        rating: 4.5,
        category: 'Security Tools',
        image: 'path/to/patch1.jpg',
        link: 'https://example.com/patch-management'
    },
    {
        id: 20,
        name: 'Security Awareness Training',
        description: 'Train employees on security best practices.',
        price: '$70.00',
        rating: 4.6,
        category: 'Training',
        image: 'path/to/training1.jpg',
        link: 'https://example.com/security-awareness-training'
    }
];

const categories = [...new Set(products.map(product => product.category))];

const categoryMenu = document.getElementById('category-menu');
categories.forEach(category => {
    const a = document.createElement('a');
    a.href = "#";
    a.textContent = category;
    a.onclick = (event) => {
        event.preventDefault();
        filterProducts(category);
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
            <p>${product.description}</p>
            <p>Rating: ${product.rating}</p>
            <p>Price: ${product.price}</p>
            <button onclick="window.open('${product.link}', '_blank')">View</button>
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