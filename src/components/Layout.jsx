import { motion } from 'framer-motion';

const Layout = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-[#F7F7F7] flex flex-col justify-end sm:justify-center items-center font-sans overflow-hidden">
        {/* The White Card */}
        <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md bg-white shadow-lg sm:rounded-lg overflow-hidden min-h-[600px] flex flex-col"
        >
            <div className="p-6 flex-1 flex flex-col">
                {title && <h1 className="text-2xl font-bold text-pop-text mb-6">{title}</h1>}
                {children}
            </div>
        </motion.div>
    </div>
  );
};

export default Layout;