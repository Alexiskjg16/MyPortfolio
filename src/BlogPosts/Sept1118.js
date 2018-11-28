import React, { Component } from 'react';
import Footer from '../FooterContact.js';
import Subscribe from "./Subscribe";
import '../App.css';
import NavBar from '../NavBar';


class Sept1118 extends Component {

    render() {
        return (
            <div>
                 <section>
                    <NavBar />
                </section>
                <header className="AllBlogHeaders"> The Imposter Syndrome </header>
                <p className="AllBlogBodies">
                Wikipedia defines imposter syndrome as ‘a psychological pattern in which an individual doubts their accomplishments and has
                 a persistent internalized fear of being exposed as a “fraud”.’ Being thrown into coding boot camp, they fully warn us about 
                 this effect, stating that learning so much so quickly makes us feel vastly less prepared than we actually are. And boy is 
                 that true.
                I still feel like the imposter when people say I’m gonna get a great job, do all this fancy stuff, etc etc. Like, no, I barely
                 know anything. But then I look back on what I’ve accomplished so far…. I’ve done A LOT. I’ve learned a lot. They call it a boot
                 camp because it’s so intense and so quick; so even though it’s only been 8 weeks, it should have taken us much longer to 
                 complete at a more normal pace. The important thing to remember here is : we’ve done it. Yeah, it might be super fast-paced, 
                 and yeah, it might seem like we’re barely scratching the surface, but… WE’VE DONE IT. We’ve gotten the concepts. We’ve moved 
                 through it all. We made the progress. I have a full GitHub repo to prove that, even if some of them are less-than-pretty. And a
                 key importance is to remember, we WANT to be here. We took the initiative and did the work, it’s not like it was thrust upon us.
                 So even if we’re not that ‘great’ at it, we have absolutely shown we are willing to put in the time and hard work to get where
                 we are today. And that in itself speaks volumes, that we deserve to be here as much as everybody else. We might not know everything 
                 now, but we have shown we will figure it out. We will do what it takes to find the solution. When the going gets tough, and you stay 
                 up until 1am trying to figure out why your code isn’t working, and you have a kid crying on your lap, and you haven’t eaten a proper 
                 meal in a few days… Even if you don’t get the exact answer right then. An ‘imposter’ would give up, copy+paste, and call it a night. 
                 We have proven, we are not that. We have shown our worth is in more than just our fingertips, more than our smarts. It is in the 
                 initiative. It is in the drive to complete the task, and complete it wholly. We are not imposters, on any level.
                 </p>
                 <section>
                    <Subscribe />
                </section>
                 <section>
                    <Footer />
                </section>
                </div>
        )
    }
}
export default Sept1118;