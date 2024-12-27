import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const blogPosts = [
  {
    title: 'IPFS Cluster and Pinata Cloud',
    description: 'Simplifying Data Management in Decentralized Applications-A Guide to IPFS Cluster and Pinata Cloud',
    category: 'Cloud',
    image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*KI_bXIfnByBQZXE-AfyICg.jpeg',
    link: 'https://medium.com/@uvherath/enhancing-decentralized-data-management-with-ipfs-cluster-and-pinata-cloud-010195c3a4ed',
  },
  {
    title: 'New UX/UI Design Trends',
    description: 'In this post, we’ll explore 7 trends in the UX/UI landscape.',
    category: 'Development',
    image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*wz3_MbYjw-zQdb4Bp4BYgQ.png',
    link: 'https://medium.com/@uvherath/new-ux-ui-design-trends-6597ead35aec',
  },
  {
    title: 'A* Algorithm',
    description: 'The A* algorithm is a shining example of how smart design can lead to powerful results.',
    category: 'AI',
    image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*QYfdtd642TLeuVfqp4GgjQ.png',
    link: 'https://medium.com/@uvherath/a-algorithm-d4ed9084f13a',
  },
];

export default function Blog() {
  const [filter, setFilter] = React.useState('All');

  const categories = ['All', 'AI', 'Cloud', 'Development'];
  const filteredPosts = filter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text">
            Blog Posts
          </h1>
          <p className="text-gray-400 dark:text-gray-400">
            Sharing thoughts and experiences in technology
          </p>
        </motion.div>

        <div className="flex justify-center mb-8 space-x-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden bg-white shadow-lg dark:bg-gray-900 rounded-xl"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
                <span className="absolute px-3 py-1 text-sm text-white bg-purple-600 rounded-full top-4 right-4">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {post.title}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  {post.description}
                </p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                >
                  Read More
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
