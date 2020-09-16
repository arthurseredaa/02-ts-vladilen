import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  let history = useHistory();
  return (
    <>
      <h2>Information page</h2>
      <p style={{ padding: "0 100px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum rem eum
        delectus doloremque laudantium quam molestiae aut temporibus soluta esse
        perferendis ducimus repudiandae provident, pariatur similique obcaecati
        cum architecto id corrupti et dolore exercitationem? Sint tempore
        cupiditate cumque quidem, nesciunt adipisci facilis quos sequi
        perspiciatis obcaecati quo ad nobis? Nobis quo officia enim quibusdam,
        iste deserunt, similique porro aperiam suscipit maiores tenetur
        doloribus autem exercitationem consequuntur atque optio, iure sunt eaque
        vero molestias et praesentium possimus sit eligendi? Repudiandae
        laudantium distinctio veritatis architecto ab asperiores sit assumenda
        ipsam officiis beatae nam est vitae ullam accusantium voluptate, iusto
        dolores iure eos eveniet nihil quisquam illum quos at! Esse architecto
        provident neque similique qui magnam porro, debitis commodi perferendis
        culpa nisi ullam officiis dignissimos impedit obcaecati cum. Temporibus
        aliquam dolorem atque, voluptatibus nemo, optio natus qui vel alias quis
        at vero perferendis eveniet repellat beatae velit nostrum. Quas
        voluptatem libero doloribus quisquam expedita alias odit id placeat
        illum, qui esse! Aspernatur rem mollitia ex voluptatibus enim
        consequuntur repellendus dignissimos quibusdam doloremque fuga, itaque
        quo totam nam, voluptatum temporibus necessitatibus. Accusamus aperiam
        alias hic illum sit rem. Nemo consectetur eligendi similique optio atque
        mollitia incidunt expedita ipsum ducimus nihil doloribus commodi
        praesentium perferendis quidem soluta, asperiores, enim facere,
        voluptatibus quod sint obcaecati in. Nobis et saepe in maxime molestiae
        totam tempora, quo sequi commodi quis cupiditate? Eaque quidem
        dignissimos adipisci aperiam, iure nihil commodi quo molestias, id,
        blanditiis animi harum sint delectus excepturi placeat iste itaque
        repellat culpa cupiditate autem repudiandae enim pariatur optio. Unde
        possimus cupiditate et, repellat porro, asperiores quo assumenda
        perspiciatis ullam quisquam sit vel neque, consectetur ipsum. Possimus,
        harum veniam. Voluptas, vero quibusdam repudiandae optio facilis illo
        cumque velit, aliquam sunt quod ullam ea odio quas. Sapiente magni neque
        corrupti facilis est dicta animi eaque quo itaque, culpa illum
        consequuntur perferendis quae, cumque ad fugit suscipit libero nisi modi
        ducimus, natus adipisci. Dolorem vel architecto minus suscipit, qui
        ratione sint amet, ipsam cum voluptatibus quo dolores quos nisi neque,
        saepe ea iste officiis. Eveniet, omnis expedita. Ex, obcaecati! In
        facere voluptatum doloribus eveniet alias voluptatibus consequuntur
      </p>
      <button
        className="btn"
        style={{ margin: "30px 0" }}
        onClick={() => history.push("/")}
      >
        Back to todo list
      </button>
    </>
  );
};
