import React from "react";
import "../style/Home.css";
import Navbar from "./Navbar";
import SlideShow from "./SlideShow";
import SlideImage from "./SlideImage";
import TilesContainer from "./TilesContainer";
import img1 from "../images/img-1.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";
import img4 from "../images/img-4.jpg";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <SlideShow>
          <SlideImage
            src={img1}
            section="Reseaux & Infrastructure"
            details="Maîtrisez l’évolution de votre Datacenter, vos Clouds et vos applications Saas."
            link="infrastructure-reseaux"
          />
          <SlideImage
            src={img2}
            section="Développement logiciel"
            details="Maîtrisez vos développements et garantissez la meilleure expérience utilisateur à vos clients."
            link="developpement-logiciel"
          />
          <SlideImage
            src={img3}
            section="Gestion de projet"
            details="Bordez vos budgets, prévenez vos risques, en garantissant vos coûts, vos délais, et votre qualité logicielle."
            link="gestion-de-projet"
          />
          <SlideImage
            src={img4}
            section="Consulting en stratégie IT"
            details="Ayez toujours un coup d’avance en garantissant l’efficacité de votre veille stratégique."
            link="consulting-en-strategie-it"
          />
        </SlideShow>
        <TilesContainer/>
        <div className="text-section">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        consequat turpis in augue gravida, ut vestibulum lorem tempor. Morbi ut
        leo aliquet, vulputate velit quis, rhoncus quam. Praesent ac vulputate
        nisl. Nulla tellus libero, placerat ut nisi vitae, tincidunt varius
        libero. Pellentesque ultrices malesuada velit, sit amet lacinia enim
        gravida facilisis. Donec ac massa justo. Nullam ultricies vulputate
        egestas. Aliquam sed lacinia velit. Morbi commodo, neque vitae suscipit
        congue, erat dui aliquet urna, a facilisis libero turpis id dui. In
        posuere tortor nisl. Duis aliquet lorem erat, sit amet consequat magna
        feugiat a. Phasellus non pretium nisl. Quisque vel ex sit amet ipsum
        sodales laoreet ut aliquet nulla. Praesent in nisl at erat blandit
        accumsan quis blandit erat. Integer egestas mi lectus, sed tincidunt
        lacus feugiat nec. Proin semper, purus ac fermentum sollicitudin, lectus
        nunc efficitur velit, eget imperdiet sapien ante ac lacus. Ut vel ligula
        interdum mi fringilla vestibulum in ut augue. Ut purus magna, commodo in
        massa at, commodo volutpat velit. Donec a efficitur lacus, eget
        imperdiet augue. Quisque ut enim aliquam, hendrerit nibh placerat,
        tempus orci. Cras sodales vitae lorem nec cursus. Curabitur condimentum
        mi a dui vestibulum, non aliquet nulla bibendum. Aliquam mi felis,
        egestas eget mauris a, sollicitudin consectetur erat. Curabitur
        porttitor eget nibh sed venenatis. Suspendisse potenti. Praesent vitae
        risus sapien. Phasellus suscipit iaculis velit, a efficitur lacus
        venenatis id. Nam dignissim varius eleifend. Ut eu rhoncus dolor.
        Maecenas rhoncus gravida purus sit amet vehicula. Ut at volutpat arcu.
        Morbi ut massa ligula. Cras libero felis, viverra at mollis eu,
        consectetur ut nibh. Morbi in mi augue. Sed elit tellus, vestibulum vel
        semper sit amet, dapibus quis urna. In et rhoncus ligula. Sed
        ullamcorper ipsum non nibh tincidunt vestibulum. Pellentesque luctus
        egestas risus, et malesuada odio volutpat at. Vivamus sit amet leo quis
        ante tincidunt gravida at vitae dui. Pellentesque volutpat sollicitudin
        commodo. Sed quis ornare neque. Donec a mattis ipsum, a pellentesque
        orci. Nullam auctor ipsum non gravida dignissim. Ut purus risus, finibus
        id nulla id, molestie venenatis arcu. Fusce ut augue turpis. In lorem
        libero, sodales ut nibh vitae, lobortis malesuada sapien. Vivamus
        dapibus, lacus ut ornare venenatis, arcu nibh condimentum leo, a
        dignissim lectus turpis in enim. Sed scelerisque pulvinar sollicitudin.
        Etiam consectetur faucibus ante, id interdum est vehicula suscipit.
        Fusce a lacus sit amet ex facilisis ultrices a in est. Vivamus sed orci
        nisl. Nulla massa elit, semper nec ipsum iaculis, facilisis ornare
        ipsum. Nulla nibh est, convallis vel rutrum id, vestibulum a justo.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Integer massa quam, vestibulum feugiat porttitor in,
        mollis nec est. Aenean egestas, purus suscipit convallis efficitur, est
        nulla vestibulum diam, vel lacinia risus felis sit amet mauris.
      </div>
      </div>
    );
  }
}

export default Home;
