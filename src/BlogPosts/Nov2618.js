import React, { Component } from 'react';
import Footer from '../FooterContact.js';
import '../App.css'; import NavBar from '../NavBar';
import { Link } from "react-router-dom";


class Nov2618 extends Component {

    render() {
        return (
            <div>
                <section>
                    <NavBar />
                </section>
                <header className="AllBlogHeaders"> Find New Friends </header>
                <p className="AllBlogBodies">So a few years ago, had you asked me to plan a party with ALL of my friends, 
                    it would have gone something like this… “Well, these people won’t like these people, so we need to have 
                    two rooms so they have their space… and these people will expect this kind of food, but this person will 
                    drink way to much and need to be watched around this group of people…” I could never have everyone I know 
                    together, because they were so diverse, and so set in their own ways.
                    Yesterday I caught myself thinking, “Man, person X would get along great with my sister! And person X would 
                    get along great with my professional friends! And…” and I was very surprised at the fact that I couldn’t 
                    think of any current friends that couldn’t, at the very least, get along well enough once they met. This 
                    lead me down a trail of thought that resulted in realizing that I’m just generally surrounding myself by 
                    better people.
                    When a person has a fixed mindset, they can be a very successful person in their own right, but very closed 
                    off to new opportunities. And it can cause stress and problems for those around them. But people in a growth 
                    mindset are always open to meeting new people, hearing about different things, and even if they don’t agree, 
                    most are decent enough people to respectfully handle the situation. The people I was hanging out with in years 
                    previous were nobodies, content with where they were and not trying to go anywhere. And I was in the same mindset, 
                    because that’s what I was around. But I wasn’t satisfied, and I didn’t even realize it. Now I surround myself with 
                    people that want to grow and explore and learn, and having picked up on that mindset, I find myself much happier 
                    with my life when I reflect on it.
                    My dad always told me “you become like the five people you are around the most.” And gosh darn it, he was right. 
                    I don’t even want to be around those friends from before, because I don’t want to be dragged back down to that 
                    mindset. Having a new group of mature, open-minded people to be around has relieved a stress off of me I didn’t 
                    know I had. There is less drama, less arguments, and more trust.
                    Now this is not to say it was easy. It has been very hard to let go of some of the old friends I was close to, 
                    especially when they don’t even understand why. And it takes time, I didn’t just decide who I was keeping around 
                    or letting go of in half an hour. But when I opened by eyes to really seeing what kind of mindset people had and 
                    how the responded to situations, it became easier to just let those people fall to the wayside. So this blog posts’ 
                    call to action is to examine the people you are around on a daily basis, and if they are helping improve your life 
                    or impeding it. Take some time to think it over, and have a happy Monday!
                </p>
                <section> 
                    <Link to={"/BlogPosts"} className="AverageHomeLink"> Back to Blog </Link>
                </section>
                <section>
                    <Footer />
                </section>
            </div>
        )
    }
}
export default Nov2618;