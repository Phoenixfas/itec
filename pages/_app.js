import '../styles/globals.css'
import Footer from './Footer'
import Navbar from './Navbar'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
// import WhatsApp from './WhatsApp'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      {/* <WhatsApp /> */}
      <Footer />
    </Provider>
  )
}
