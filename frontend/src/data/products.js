import shirtAssortment from '../assets/youngfit-shirt-assortment.jpg';
import shirtColors from '../assets/youngfit-shirt-colors.jpg';
import shirtColorsBright from '../assets/youngfit-shirt-colors-bright.jpg';
import shirtDetail from '../assets/youngfit-shirt-detail.jpg';
import shirtTexture from '../assets/youngfit-shirt-texture.jpg';

const shirtImages = [
  shirtColors,
  shirtColorsBright,
  shirtDetail,
  shirtTexture,
  shirtAssortment,
];

export const products = [
  {
    id: 1,
    name: 'Rain Dobby Plain Shirt',
    slug: 'rain-dobby-plain-shirt',
    category: 'Shirts',
    price: 'Wholesale pricing on enquiry',
    label: 'Young Fit',
    image: shirtImages[4],
    description:
      'A bestselling seasonal full-sleeve plain shirt with a distinctive Rain Dobby texture. Ask about current colors and running sets.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    material: 'Rain Dobby weave',
    minimumOrder: 'Bulk wholesale bundles; ask about current set options',
  },
  {
    id: 2,
    name: 'Waffle Weave Shirt',
    slug: 'waffle-weave-shirt',
    category: 'Shirts',
    price: 'Wholesale pricing on enquiry',
    label: 'Young Fit',
    image: shirtImages[3],
    description:
      'Full-sleeve shirts in waffle checks and waffle plains. Contact us to check current patterns and availability.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    material: 'Waffle checks & plains',
    minimumOrder: 'Bulk wholesale bundles; confirm current set options',
  },
  {
    id: 3,
    name: 'Satin Lining & Print Shirt',
    slug: 'satin-lining-print-shirt',
    category: 'Shirts',
    price: 'Wholesale pricing on enquiry',
    label: 'Young Fit',
    image: shirtImages[2],
    description:
      'Full-sleeve premium styles with a high-sheen finish for casual and semi-formal wear. Ask about current prints.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    material: 'Satin lining & prints',
    minimumOrder: 'Bulk wholesale bundles; confirm style-specific options',
  },
  {
    id: 4,
    name: 'Oxford Base & Checks Shirt',
    slug: 'oxford-base-checks-shirt',
    category: 'Shirts',
    price: 'Wholesale pricing on enquiry',
    label: 'Young Fit',
    image: shirtImages[0],
    description:
      'Heavy-duty, structured full-sleeve shirts in timeless Oxford base and Oxford check designs for casual wear.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    material: 'Oxford base & checks',
    minimumOrder: 'Bulk wholesale bundles; confirm current options',
  },
  {
    id: 5,
    name: 'Striped & Floral Shirt',
    slug: 'striped-floral-shirt',
    category: 'Shirts',
    price: 'Wholesale pricing on enquiry',
    label: 'Young Fit',
    image: shirtImages[1],
    description:
      'Full-sleeve patterned casual shirts featuring striped and floral styles. Ask us about available designs.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    material: 'Striped & floral patterns',
    minimumOrder: 'Bulk wholesale bundles; confirm current options',
  },
  {
    id: 6,
    name: 'Formal Cotton Shirt',
    slug: 'formal-cotton-shirt',
    category: 'Shirts',
    price: 'Wholesale pricing on enquiry',
    label: 'Young Fit',
    image: shirtImages[0],
    description:
      'High-quality full-sleeve cotton shirts in solid patterns, designed for corporate and office wear.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    material: 'Cotton · solid patterns',
    minimumOrder: 'Bulk wholesale bundles; confirm current options',
  },
];

export const categories = ['All', ...new Set(products.map((product) => product.category))];
