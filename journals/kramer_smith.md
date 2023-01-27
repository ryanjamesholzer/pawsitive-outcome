## January 27th, 2023

    Today, Angel drove while we prepared our project for submission. We

cleaned up a LOT of code. Every file was reformatted with Prettier and we
deleted a few console logs and print statements. We removed inline styles
from .js files and put them in .css files and imported them to their
corresponding .js files. We also added a custom cursor, which everyone was
really excited about. That was a great learning experience as none of us
had done that before.

    We also finally got our site deployed with the advice from another group.


    I'm proud of the project we made. This was a great experience that I will

always remember. I'm grateful to have such a great team. I think we really
lucked out with the team we have.

## January 26th, 2023

    Today, we continued trying to deploy the site with Ryan driving. We were

able to make some progress. We can see our front end through the link, but
the container for the main web app was not connecting to the container of
database. We worked on this for the majority of the day, but didn't quite
get it. At the end of the day, Angel and I stayed up quite late working on
adding toast messages in a separate branch. We didn't finish it, but I want
to continue working on this as a stretch goal.

## January 25th, 2023

    Today Michelle drove while we worked on deploying the site. This was a

confusing day. It was spent editing a lot of docker files and variables in
gitlab. We worked through several errors in our code that were causing
issues on CapRover. Today was almost a blur because we spent so much time
tweaking code and not feeling like we made a ton of progress. Hopefully, we
will finish this up tomorrow. I would love to be able to show my friends and
family the site we made.

## January 24th, 2023

Today, we all worked unit testing. Each of us wrote a unit test. This was a
big learning experience for all of us as we have never done it before. It'
was fun though. I can see how testing could go very in depth and be very
useful in a large codebase.

## January 23rd, 2023

Today, Michelle drove while we merged in Michelle and my work from the
weekend. After that, we worked on having the user redirected to the login
page if they don't have a jwt token. We didn't get it working quite right,
so we added it to our stretch goals list. After that, we worked on adding a
"filter by" function to our search-bar on the ListAdoptions page. Triston
did good work on this while we were working on the login redirect mentioned
above.

## January 22nd, 2023

    Today is Sunday. I worked on the AdoptionDetailsModal. It looks ok. It

really sunk in using grids and tables for me. I also created a functional
404 page. That was much easier than I expected. I styled the
ConfirmationModal. I put a funny picture of a dog with a questioning glance
from a popular meme above the confirmation message. I had to photoshop out
the background from behind the dog to make it look better. I cleaned up the
code and put all the in-line styles in a separate css file and imported them
to their corresponding files. I shrunk down the LoginForm after Michelle
told the group that it's too big and looks funny on her laptop.

## January 21st, 2023

    Today is Saturday. I would love to work on this project all day, but

life. I did accomplish some things. I worked on the SignUpFormModal. I
learned a lot about using grids. I also decided to download Photoshop so
I could create custom photos for the site. I think I spent more time on
Photoshop than anything... but the login page looks great. I kept the group
updated in our Discord channel and it seemed they liked the photo of the dog
with the googly eyes more than the rest, so that's what I put on the Login
page. I think it looks good and it matches our them pretty well. Michelle
worked on the Adoptions List page.

## January 20th, 2023

    Today, I drove. During our standup, we discussed the styling of the

site. One of the first styling concerns of mine was the ListDogs page. I
worked on it the night before, and wanted the rest of the group's input.
They liked the bones of it, but we did decide to change a few things minor
things, and the site quickly looked better. We then went down a rabbit hole
of searching for fancy buttons to use which turned in to considering
adapting some code we found online. The code that was found online was huge
and felt like a labyrinth to me. Ryan brought up a good point that we could
just save it for a stretch goal and work on something else for now. The team
unanimously agreed.
We decided to split up into two groups. Michelle, Angel, and I worked on
the styling of the webpage together with my still driving. Ryan and Triston
worked on the README for the site and re-did the wire-frame. Michelle,
Angel, and I made great improvements to the look of the site. We learned how
to set the background of the site to a vector image and how to scale it. We
found a really nice looking one. We then tweaked borders and buttons and
other small things, and the site looked MUCH better. Ryan and Triston joined
later and gave great suggestions as well. At the end of the class day, the
site was looking great. I really didn't think I would enjoy the design
portion of the front end as much as I did, but I'm proud of the work we did
today.
After class ended, Angel, Ryan, and I stayed up a little late and worked on
the Login page. We learned a lot about css tonight through trial and many
errors, but we finally accomplished what we wanted to, and I think it looks
REALLY nice. Our issue was placing a photo in the EXACT spot it needed to be.
Margins, and padding, and the DOM tree made this a bit more confusing that I
thought it would be, but after doing that, I have a MUCH better understanding
of HTML, CSS, and overall page layout.

## January 19th, 2023

    Today, Michelle drove. As a group we worked on adding a search bar to

the ListDogs page. We then moved the AddDog button from the nav to the
ListDogs page. We did this to help clean up the Nav bar and it just made
sense that on the ListDogs page would be where the user would want to go to
add a dog. After that, we created the ConfirmationModal. This is neat
because you can pass it a message and a function, so the confirmation modal
is modular and can be used for many different functions that would want a
confirmation from the user.
At the end of the day, we realized, we were mostly done with the
functionality of the site. Our plan was to work on the majority of the
functionality of the site first, then worry about the styling. Today, we
realized that we had hit that milestone. We talked about how we would go
go about styling as it's not nearly as complicated as the functionality, but
we all want some say in the styling. The plan we came up with was for those
of us who want to work on the site at night, we can, but we will show our
progress at the first stand up meeting we have together. During class time,
we will reconvene every hour to give feedback on whichever page we're
working on.
Before the end of class that day, we tried to incorporate Tailwind and only
use Bootstrap for the Modal component we have. This did not go well.
Bootstrap interfered with tailwind, and we couldn't remove Bootstrap without
having to completely rebuild our modals. We decided not to use Tailwind. We
considered it because it was new and a challenge, yet I hear it's somehow
better than Bootstrap. None of us have used it before, so it wasn't worth
changing to so close to the deadline of the project if it wasn't going to go
smoothly.
Tonight I worked the ListDogs page. My goal was to make it look EXACTLY
like the design we had in the wire-frame. I think I did a good job at it;
however, excalidraw's styling doesn't exactly transfer well to a website.
I kept the group updated throughout the night in our discord, but not all
saw it, as I was working quite late in the night. I will talk to the group
during our stand up about the styling. Although is does closely resemble the
excalidraw drawing, I think it looks cheesy...

## January 18th, 2023

    Today, Triston drove and we all worked together to solve multiple bugs

and add some new features. First we fixed a bug in the SignUpForm. The
console said we were changing a defined item to undefined.
We then fixed a bug that caused the addDogModal to almost instantly
close. This was because the result.Success was not being changed back to
false after each dog was added. The modal is programmed to close whenever
the result.isSuccess is false. This was an easy fix, yet hard at the time to
spot. We just set result.isSuccess back to false after we confirmed that the
POST fetch for adding a dog was successful by writing result.isSuccess = false
Next, we made the SignUpForm a modal. It looks much nicer. This went
smoothly as we have had plenty of experience setting up modals in this
project.
While working with the SingUpFormModal, we were trying to access the
error message from bad requests from the modal itself and not through the
RTK code. This was a little more difficult than we expected because,
unknowingly, we needed to really dig into the result object. We finally
found our way to the error message. Our line to access the message was
"result.error.data.detail".
After that, we added a delete dog function. Through a copy and paste
error, one of us accidentally pasted "ListDogs" into the providesTags
section of our showDog query. So after we deleted a dog, we invalidated the
ListDogs query. That would make the ListDogs.js re-render. Which meant the
DogDetailModal would try to that dog detail again. It would then cause an
error because the dog detail modal for the deleted dog would try to make
a fetch. It would fail because the dog had been deleted. This was one of
those fun coding moments where you find one misplaced word that caused a
series of unexpected events, change it, and it fixes everything. We just
removed ListDogs from the providesTags section in the showDog query, and it
worked!
Lastly, we worked on adding a delete adoption function. The idea of this
was if a user accidentally files an adoption, they can press "Undo." This
would delete the adoption record, but set the adopted dog's "is_adopted"
property back to false. That way, the dog could still be listed as up for
adoption. This was a bang your head against the wall kind of moment. We
spent quite a lot of time on this only to later find out that we were
weren't correctly giving the SQL the id of the dog to be listed back up
for adoption. We were passing the id of the adoption to be deleted, but not
the id of the dog. We thought we were, but somehow didn't see that we
actually weren't.
It's crazy how you can look at the same code for hours and not see such
an obvious mistake. It seems silly writing it out. The reader probably is
probably thinking, "That's sounds so easy. I can't believe they spent so
long." Or maybe they understand? Either way, today was frustrating, yet fun.
The problem solving part of all this is great. I know I will really enjoy
this career.

## January 17th, 2023

    Today, Angel drove. We all worked on consolidating of all the RTK

queries into one file. We needed to consolidate it all into one file because
we needed to invalidate a tag that was in another file. So we just decided
to put all of the queries and mutations in one file. We then created an
AdoptionDetailModal and updated the activeModal and setActiveModal modal
like variables and functions to better reflect which modals they are for to
help eliminate confusion as we have a lot of modals. Such as
activeAdoptionDetailModal. We then added a password confirmation field to
the SignUpForm and we're not checking that the password and the password
confirmation match.

    Today reaffirmed why Redux is so popular. Invalidating the ListDogs tag

made the ListDogs query update so whenever we file a new adoption, ListDogs
does not display the dog from the adoption as it's no longer available for
adoption. That's much simpler than forcing the useEffect to run again and
update the list of available dogs.

## January 13th, 2023

    Today, we worked using Redux to handle the state of the authorization.

Ryan drove while we all worked through the day's problems and goals. Some of
the members of the group were hesitant to do this because they had put so
effort into writing the code for authorization without Redux, but after we
worked through it, we all really saw the benefit of Redux. It really cleans
up your code and makes updating state on multiple components much easier.

## January 11th, 2023

    Today, we worked on filtering the dogs in the dogs list by the dogs that

hadn't been adopted. This meant we needed to change the boolean value for
is_adopted in the dogOut model to be truthy whenever a new adoption is filed
for that specific dog. One of the things we needed to do to accomplish this
was, we had to change the SQL in the adoption_in_to_out method in the
AdoptionQueries. I'm beginning to to really enjoy SQL DDL. I thought the
code we wrote to accomplish that was really clever. After that, we worked on
the logout button and feature. We used the useContext hook, but it was a lot
of work, and very confusing. We asked a SEIR for help, but ended up deleting
what the SEIR told us to do after Triston had a better, cleaner solution.

    Today, I learned some cool new tricks with the SQL DDL and useContext. I

also got lots of practice passing props into other components.

## January 10th, 2023

    Today, we worked in a group of five. I drove. Yesterday, the group of

three, Ryan, Triston, and Angel, worked on the authentication of the
project. Authorization was a blocker for all the other components on the
site, so we all worked on authorization together. We completed authorization
for the dog components and all walked away with a much better understanding of
authorization.

## January 9th, 2023

    Today we broke up the larger group into groups of three and two.

Michelle and I were the group of two. I drove and Michelle navigated. We
got ListDogs, DogDetailModal, and most of AddDogModal completed. It was
nice to go back to React. Today also really helped build my skills in
updating state and creating modals.

## January 6th, 2023

    Today, Angel and I drove. While Angel was driving, the rest of the team

and I guided him through setting up authentication. When it was my turn to
drive, Angel and the rest of the team guided me through setting up authorization,
correcting bugs we had in several routes, and corrected a few models. Now,
all of our routes are working bug free.

As I'm writing this, I'm realizing that I need to take notes to have better
journal entries.

Today really helped me understand FastAPI much better. Watching lectures and
reading explorations is good, but actually being the one typing out the code
really helps it sink in. I have a much better understanding of queries and
routes.
