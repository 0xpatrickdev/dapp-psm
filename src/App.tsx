import './installSesLockdown';
import { motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swap from 'components/Swap';
import ChainConnection from 'components/ChainConnection';
import { INTER_LOGO } from 'assets/assets';
import { MdBarChart } from 'react-icons/md';
import { FiExternalLink } from 'react-icons/fi';
import NoticeBanner from 'components/NoticeBanner';

import 'styles/globals.css';

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        closeOnClick={false}
        newestOnTop={true}
        hideProgressBar={true}
        autoClose={false}
        style={{ marginTop: 96 }}
        toastStyle={{
          boxShadow: '0px 0px 32px -2px var(--color-glow)',
          wordBreak: 'break-word',
        }}
      ></ToastContainer>
      <motion.div className="flex flex-col min-h-screen">
        <NoticeBanner />
        <motion.div className="min-w-screen container p-4 mx-auto flex justify-between items-center">
          <a href="https://inter.trade/" target="inter.trade">
            <img
              src={INTER_LOGO}
              className="item"
              alt="Inter Logo"
              width="200"
            />
          </a>
          <ChainConnection />
        </motion.div>
        <motion.div className="flex-1 min-w-screen container mx-auto flex justify-center mt-16 mb-16">
          <Swap />
        </motion.div>
        <motion.div className="min-w-screen container flex justify-left p-3">
          <a
            href="https://analytics.inter.trade/"
            target="bridge-docs"
            className="text-md px-2 text-blue-500 hover:text-blue-700"
          >
            <MdBarChart className="inline text-lg align-text-bottom" />
            Stats <FiExternalLink className="inline text-xs align-baseline" />
          </a>
        </motion.div>
      </motion.div>
    </>
  );
};

export default App;
