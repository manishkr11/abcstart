import React, {useEffect, useState} from 'react'
import './LearnBootStyle.css'


function LearnBoot() {

    const [i, setI] = useState(0)
    const [time, setDateTime] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => {
            setI(i + 1);
            setDateTime(new Date())
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      });

    return (
        <div>
                {/* <div className="jumbotron text-center">
                    <h1>My First Bootstrap Page</h1>
                    <p>Resize this responsive page to see the effect!</p>
                </div> */}
                <strong>{time.toLocaleTimeString()}</strong>

                {/* <div className="progress">
                    <div className="progress-bar" style={{width:`${i}%`}}>{i}%</div>
                </div> */}

                <div className="alert alert-success">
                    <strong>Success!</strong> Indicates a successful or positive action.
                </div>

                {/* <div className="row">
                    <div className="col">My First Bootstrap Page</div>
                    <div className="col">My First Bootstrap Page</div>
                    <div className="col">My First Bootstrap Page</div>
                </div>  

                <div className="row">
                    <div className="col-sm-4 sk">.col-sm-3</div>
                    <div className="col-sm-8 sk">.col-sm-3</div>
                </div> 

                <blockquote className="blockquote">
                    <p>For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</p>
                    <footer className="blockquote-footer">From WWF's website</footer>
                </blockquote>
                <p className="text-white bg-success">Use <kbd>ctrl + p</kbd> to open the Print dialog box.</p> */}

                
        </div>
    )
}

export default LearnBoot
