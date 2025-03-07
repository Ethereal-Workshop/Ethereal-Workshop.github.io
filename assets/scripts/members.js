// Example member data
const memberinfo = [
    { member: "xmb9", discord: "988950574387068968", github: "EnterTheVoid-x86", role: "Owner of Ethereal Workshop" },
    { member: "Sophie", discord: "1012095822957133976", github: "sophiaasophieee", role: "Co-Owner of Ethereal Workshop" },
    { member: "Kelsea", discord: "1175643738752680030", github: "kelpseastem", role: "Member of Ethereal Workshop" },
    { member: "Rifting", discord: "", github: "rifting", role: "Member of Ethereal Workshop" },
    { member: "Boeing", discord: "1037713379780993114", github: "notboeing747", role: "Member of Ethereal Workshop" },
    { member: "Apple", discord: "1209096766075703368", github: "appleflyerv3", role: "Member of Ethereal Workshop" },
    { member: "Arbstro", discord: "1083909291091693708", github: "", role: "Member of Ethereal Workshop" },
    { member: "Writable", discord: "480818241145536513", github: "MunyDev", role: "Member of Ethereal Workshop" },
    { member: "Kxtz", discord: "952792525637312552", github: "kxtzownsu", role: "Member of Ethereal Workshop" }
];

function renderMembers(data) {
    const container = document.getElementById("members-container");
    container.innerHTML = "";

    data.forEach(({ member, discord, github, role }) => {
        const div = document.createElement("div");
        div.className = "member";

        const img = document.createElement("img");
        img.src = `assets/members/${member}.png`;
        img.alt = member;
        img.className = "membericon";

        const h6Name = document.createElement("h6");
        h6Name.textContent = member;

        const h6Role = document.createElement("h6");
        h6Role.textContent = role;

        div.appendChild(img);
        div.appendChild(h6Name);
        div.appendChild(h6Role);

        if (github) {
            const githubLink = document.createElement("a");
            githubLink.href = `https://github.com/${github}`;
            githubLink.innerHTML = `<i class="fa-brands fa-github fa-sm"></i>`;
            div.appendChild(githubLink);
        }

        if (discord) {
            const discordLink = document.createElement("a");
            discordLink.href = `https://discord.com/users/${discord}`;
            discordLink.innerHTML = `<i class="fa-brands fa-discord fa-sm"></i>`;
            div.appendChild(discordLink);
        }

        container.appendChild(div);
    });
}

renderMembers(memberinfo);
