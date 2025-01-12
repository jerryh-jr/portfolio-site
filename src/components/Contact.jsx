import React from 'react';

export default function Contact() {
  return (
      <div className="flex flex-col place-items-center mt-2.5 h-40">
          <div className=" flex justify-center gap-4">
              <a href="www.linkedin.com/in/jerry-hudgins-jr">LinkedIn</a>
              <a href="https://github.com/jerryh-jr">GitHub</a>
              <p>Email: jerry@jerry-codes.com</p>
          </div>
          <small>Photo by <a
              href="https://unsplash.com/@billy_huy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Billy
              Huynh</a> on
              <a href="https://unsplash.com/photos/blue-skies-filled-of-stars-W8KTS-mhFUE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </small>
      </div>

  )
};
