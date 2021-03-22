import Header from './components/Header'
import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import {Container,Row,Col} from 'react-bootstrap'
import Footer from './components/Footer'
import HomeScreen from './components/Screens/HomeScreen'
import Sidebar from './components/sidebar.js'
import Blog from './components/Blogs.js'
import Profile from './components/Screens/Profile';
import Users from './components/Screens/Users';
import QuestionScreen from './components/Screens/QuestionScreen'
import UnansweredScreen from './components/Screens/UnansweredScreen'
import TagsScreen from './components/Screens/TagsScreen'
import Login from './components/Login'
import Ecommerce from './components/Ecommerce'
import  './bootstrap.min.css'


function App() {

  
  return (
  <Router >
    <Header />
    
    <main>
      <Container fluid >
        <Row>
            <Col  lg='2' className='ps-absolute sidebarSection'>
             <Sidebar/>                            
              
            </Col>
            <Col lg="10" className="bg-light">
              <Row> 
                <Col lg="12" >
                  <Route  path='/' component={HomeScreen} exact  />
                  <Route  path='/ecommerce' component={Ecommerce}   />
                  <Route  path='/home' component={HomeScreen}  />
                  <Route  path='/profile' component={Profile}  />
                  <Route  path='/users' component={Users}  />
                  <Route  path='/questions' component={QuestionScreen}   />
                  <Route  path='/tags' component={TagsScreen }    />
                  <Route  path='/unanswered' component={UnansweredScreen}   />
                  <Route  path='/login' component={Login}   />
                  <Route  path='/blogs' component={Blog}   />

                </Col> 
                
              </Row>
            </Col>    
          </Row>
        
        </Container>
    </main>
    <Footer/>
  </Router>
  );
}

export default App;
