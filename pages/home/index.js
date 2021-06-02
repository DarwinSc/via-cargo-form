import HeaderTopBar from '../../components/HeaderTopBar'
import HeaderContent from '../../components/HeaderContent'
import Footer from '../../components/Footer'
import Form from '../../components/Form'

export default function Home() {
  return (
    <>
      <HeaderTopBar/>

      <HeaderContent/>

      <div className="container">
        <br/>
        <hr/>
        <br/>
        <div className="row">
          <div className="col-md-12">
            <Form/>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
      </div>

      <Footer/>
    </>
  )
}
