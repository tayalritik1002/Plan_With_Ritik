
import Card from "./Card";

function Tours({ tours,removeTour } ) {
    return (
        <div className="container">
            <div>
                <h2 className="title">Plan With Ritik</h2>
            </div>

            <div className="cards">
                {
                    tours.map((tour) =>{
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>  // pass copy of tour object

                    })
                }

            </div>
        </div>
    );

}

export default Tours;