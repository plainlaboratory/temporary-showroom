const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', () => {
            teamMembers.forEach(otherMember => {
                if (otherMember !== member) {
                    otherMember.classList.remove('active');
                }
            });
        });

        member.addEventListener('click', () => {
            if (member.classList.contains('active')) {
                member.classList.remove('active');
            } else {
                teamMembers.forEach(otherMember => otherMember.classList.remove('active'));
                member.classList.add('active');
            }
        });
    });