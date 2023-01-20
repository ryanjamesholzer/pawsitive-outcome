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