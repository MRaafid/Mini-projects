function createPost(Title,content)
    {
        //<div class="social-card"></div>
        const socialCard = document.createElement('div');
        socialCard.setAttribute('class', 'social-card');


        //<div class="post-icon"></div>
        const postIcon = document.createElement('div');
        postIcon.setAttribute('class', 'post-icon');

        //<div class="post-title">Title</div>
        const postTitle = document.createElement('div')
        postTitle.setAttribute('class', 'post-title');

        //<div class="post-user">Posted by Joe Mockery</div>
        const postUser = document.createElement('div');
        postUser.setAttribute('class', 'post-user');

        //<div class="post-content">Post content goes here...</div>
        const postContent = document.createElement('div');
        postContent.setAttribute('class', 'post-content');

        //adding texts
        postTitle.innerText =Title;
        postUser.innerText ='Posted by Joe Mockery';
        postContent.innerText =content;

        // Adding as child of social card
        socialCard.append(postIcon,postTitle,postUser,postContent);

        //Appding soccial media to the body
        document.body.prepend(socialCard);
    }

createPost('The Power of Persistence','Success is not the result of spontaneous combustion. You must set yourself on fire.');

createPost('Embracing Change','The only way to make sense out of change is to plunge into it, move with it, and join the dance.')

createPost('Overcoming Doubts','The only limit to our realization of tomorrow is our doubts of today.');