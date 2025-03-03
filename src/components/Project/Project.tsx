import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>Proyectos</h2>
      <div className="projects">



      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            
              <div className="project-links">
                {/* <a href="https://github.com/verocampero/verocampero.github.io" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a> */}
                <a href="https://drive.google.com/file/d/10VoB48RpYnL_MyyXfv52fLQeKZ95vD_C/view?usp=sharing" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> 
                
                </div>
            </header>
            <div className="body">
              <h3>Tu Evento</h3>
              {/* <p>
              Junto al equipo de CountryDevs, desarrollamos una aplicación móvil para iOS y Android, totalmente adaptada para cualquier dispositivo, incluyendo tablets. La aplicación permite gestionar eventos desde cero, crear presupuestos personalizados, exportarlos en formato Excel y asignar tareas a distintos trabajadores, gracias a un sistema de roles con permisos específicos. También ofrece un control eficiente del inventario, permitiendo gestionar el stock y escanear códigos QR generados por la misma aplicación al registrar nuevos productos. Además, cuenta con múltiples funcionalidades adicionales y ha sido diseñada para ser escalable, adaptándose fácilmente a las necesidades futuras del negocio.
                 </p> */}
            </div>
            <footer> <ul className="tech-list">  <li>ReactNative</li>  <li>Expo</li> <li>Node.js</li>  <li>MongoDB</li> <li>StyleSheet</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            
              <div className="project-links">
                {/* <a href="https://github.com/verocampero/verocampero.github.io" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a> */}
                <a href="https://padelove.live/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>PadelLove</h3>
              {/* <p>Desarrollamos un marketplace que permite gestionar de manera eficiente tanto compras como ventas. Este sistema cuenta con diferentes roles para los usuarios, incluyendo vendedores regulares, vendedores designados por la empresa y tiendas autorizadas. La plataforma está diseñada para facilitar la interacción entre los distintos tipos de usuarios y optimizar el proceso de compra y venta, brindando una experiencia fluida y segura.


                 </p> */}
            </div>
            <footer> <ul className="tech-list"> <li>Html</li> <li>Tailwind Css</li> <li>React</li>  <li>MongoDB</li> <li>Redux</li> <li>Node.js</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            
              <div className="project-links">
                {/* <a href="https://github.com/verocampero/verocampero.github.io" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a> */}
                <a href="https://www.pettiti.com.ar/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Pettiti Red Multimarcas</h3>
              {/* <p> Web desarrollada como proyecto final del curso que realice en digitalmind. 
                 </p> */}
            </div>
            <footer> <ul className="tech-list"> <li>Wix</li> </ul> </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            
              <div className="project-links">
                {/* <a href="https://github.com/verocampero/verocampero.github.io" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a> */}
                <a href="https://www.countrydevs.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Country Devs</h3>
              {/* <p> Web desarrollada como proyecto final del curso que realice en digitalmind. 
                 </p> */}
            </div>
            <footer> <ul className="tech-list"> <li>React</li> <li>Material UI</li> </ul> </footer>
          </div>
        </ScrollAnimation>



        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            
              <div className="project-links">
                <a href="https://github.com/verocampero/verocampero.github.io" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://cool-service.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Cool Service</h3>
              {/* <p> Web desarrollada como proyecto final del curso que realice en digitalmind. 
                 </p> */}
            </div>
            <footer> <ul className="tech-list"> <li>Html</li> <li>Css</li> <li>JavaScript</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
             
              <div className="project-links">
                <a href="https://github.com/No-Country/c16-121-t-reactnative" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                {/* <a href="https://ai-chatbot-t8fn.onrender.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a> */}
              </div>
            </header>
            <ScrollAnimation></ScrollAnimation>
            <div className="body">
              <h3>Gota de vida  </h3>
             {/* <p>Desarrollamos esta aplicación mobile en una simulación de NoCountry. Es una aplicación diseñada para conectar de manera eficiente a personas que necesitan donaciones de sangre con donantes dispuestos a ayudar. </p> */}
            </div>
            <footer>
              <ul className="tech-list">
              <li>React Native </li>
                <li>Expo</li>
                <li>AWS</li>
                <li>GraphQL</li>
                <li>Navegación</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
             
              <div className="project-links">
                <a href="https://github.com/verocampero/cocteles.github.io" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://cocteles-github-io.vercel.app/" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Api cocteles</h3>
              {/* <p>
               Desarrolle esta web con fines practicos, para seguir fortaleciendo mis conocimientos en el consumo de Apis.
              </p> */}
            
            </div>
            <footer>
              <ul className="tech-list">
              <li>Html</li>
                <li>Css</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
             
              <div className="project-links">
                <a href="https://github.com/No-Country/S-14-20-T-JAVA" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                {/* <a href="https://medibook.vinayaksingh.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>BizWiz</h3>
              {/* <p>Esta red social fue desarrollada en mi segunda participación en NoCountry.BizWiz esta enfocado en las necesidades específicas de los emprendedores, lo que les permite interactuar de manera más efectiva con su público objetivo. </p> */}
            </div>
            <footer>
              <ul className="tech-list">
                <li className="">Css</li>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>Ract</li>
                <li>Vite</li>
                <li>React Router Dom</li>
                

              </ul>
            </footer>
          </div>
        </ScrollAnimation>
{/* 
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/CodeVinayak/Real-Time-Hand-Gesture-Driven-3D-Object-Manipulation" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://youtu.be/NOm-3MynPLE" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Real-Time Hand Gesture-Driven 3D Object Manipulation</h3>
              <p>Developed a real-time hand gesture recognition system for intuitive 3D object manipulation. Leveraged a multimodal approach integrating OpenCV for video processing, MediaPipe for hand detection/landmark extraction, and scikit-learn for machine learning model training. Achieved 95.2% accuracy in hand gesture classification with efficient real-time performance.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>OpenCV</li>
                <li>MediaPipe</li>
                <li>scikit-learn</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://velocityai.vinayaksingh.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>VeloCityAI</h3>
              <p>
                VelocityAI is a website that allows users to get instant answers to any question and generate stunning AI pictures using OpenAI's GPT-3 and DALL-E model.With VelocityAI, users can type in text-based prompts and receive a corresponding response.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Html</li>
                <li>css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}


      </div>
    </Container>
  );
}