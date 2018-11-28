import React, { Component } from 'react';
import Footer from '../FooterContact.js';
import Subscribe from "./Subscribe";
import '../App.css';
import NavBar from '../NavBar';


class Sept2418 extends Component {

    render() {
        return (
            <div>
                <section>
                    <NavBar />
                </section>
                <header className="AllBlogHeaders"> Lexy's CodeCamp Survival Guide </header>
                <p className="AllBlogBodies">Everyone said it would be intense. Everyone said they had to develop ways to deal with it. I received so
                many different tips and tricks on how to survive the crazy three months I would be basically living at Suncoast
Developers Guild, so I’ve compiled a lot of them here. </p>
                <p className="AllBlogBodies">Self Care :
                Sleep!!!! I love to sleep and always keep it a priority, but with how exhausted I am the by the end of the day,
                I need to take that into account and make sure I get the extra time.
                Eat!!! Healthy eating should always be a priority, just as much as good sleep, but when sitting in front of
                a computer all day it is really easy to either not eat at all, or just snack on junk constantly. A good
                breakfast with healthy fats and proteins is a great way to start the day and give me a good boost.
                Relaxxx. I need to take time for myself . Wether it’s just half an hour before bed to go for a golf cart ride
                around the block, watch an episode of my favorite show, or take a bubble bath. I am constantly overworking
myself and not getting a break to unwind, and it never ends well. </p>
                <p className="AllBlogBodies">The imposter syndrome is real.(see my previous post.) But I have been told soooo many times it’s not about
                    what you know, but your problem-solving skills. You’ll never know everything there is to know about coding.
                    But if you know the right questions to ask and where to look for the answers, that takes a lot of pressure
    off. So go easy on yourself if you don’t spit out answers right away! </p>
                <p className="AllBlogBodies">Bring it With You :
                Maybe it’s being a mom and a female, but I always tend to over-prep. But it hasn’t steered me wrong yet. In my everyday bag I always have these necessities :
                Advil/Ibuprofen, 
                Chapstick, 
                A granola bar, 
                Headphones, 
                Laptop Charger, 
                Phone Charger(sorry about that one time I forgot, Mom!), 
                Gum, 
                Spare notebook paper, 
                A sweater(if you’re in an office space like ours that is always freezing!), 
                Water Bottle, 
                Fidget Spinner(if you have trouble sitting still like me!)
</p>
                <p className="AllBlogBodies">Time Management :
                With such an intense period of time to learn a large amount, time management is SO important. You have to
                balance working your brain to death, taking care of yourself, still working part-time if you’re like me, and
                being a parent if you’re like me. I feel like there’s never enough time in the day, and end up crashing in
                bed every night exhausted. But I’ve found giving myself a few extra minutes in the morning to get ready,
                drink my coffee, and play with my son for a few minutes is a great way to start the day. While we are at
                school the time management is thankfully taken care of for us, but when we leave at 5, I try to take time
                off until after supper to get things done I need to, be a mom, or just unwind from the hard day. After my
                son goes to bed it’s back to the laptop, working on the days homework. Wash, rinse, repeat. But eventually
it falls into a rhythm that is swallowable, and for the most part has no issues. </p>
                <p className="AllBlogBodies">Support :
                When you interview here they ask you what your support system is like. Let me tell you, without my sister,
                brother-in-law, and other friends (*cough*Alex&Keri*cough*) I would struggle so much. Mandy and Keri both did
                the same program I’m in, so having them to commiserate with is immensely comforting, not to mention they have
                a solution to every problem I present to them. Non-coding support is just as important… there are days I go
                over to my best friends house and she shoves a beer in my hand the second I walk in, cause she knows I need
                it. Not to mention my parents watching my son for me, helping support my financially, and listening to me
                struggle with homework every night. Without the mental and physical help I get from them, I doubt I would have
made it past the second week of school. </p>
                <p className="AllBlogBodies">Honorable Mentions :
                COOFFFFFFFFEEEEEE!!!!!!!!!!!!! ❤ ❤ ❤ ( I usually have 2–3 cups per day)
                90s-2000s Rap & R&B is commonly known in the developer community as the best music to code to. I don’t
                know if it’s the beat, the mood, or the fact that most of us are around millennial age anyways, but I can
definitely get more work done with that music versus say, classical or other ‘brainfood’ music. </p>
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
export default Sept2418;