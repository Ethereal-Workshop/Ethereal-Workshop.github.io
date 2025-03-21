const memberinfo = [
    { member: "xmb9", discord: "988950574387068968", github: "EnterTheVoid-x86", website: "https://archima.xyz", role: "Owner of Ethereal Workshop", avatar: "988950574387068968/3813d82f009289a8caa9a7d73e7ee40b.png" },
    { member: "Sophie", discord: "1012095822957133976", github: "sophiaasophieee", website: "https://soaphia.xyz", role: "Co-Owner of Ethereal Workshop", avatar: "1012095822957133976/3b372610a74f2cf72f07422f4d665b8d.png" },
    { member: "Rifting", discord: "", github: "rifting", website: "", role: "Member of Ethereal Workshop", avatar: "578375908247863296/0afae146413d1e4685256f255a045f85.png" },
    { member: "Boeing 747", discord: "1037713379780993114", github: "notboeing747", website: "", role: "Member of Ethereal Workshop", avatar: "1037713379780993114/f192e1b55c294f7368c45476055cdfb0.png" },
    { member: "Appleflyer", discord: "1209096766075703368", github: "appleflyerv3", website: "https://appleflyer.xyz", role: "Member of Ethereal Workshop", avatar: "1209096766075703368/93d576e4acd9d5391fea5ba7a2991f35.png" },
    { member: "arbstro", discord: "1083909291091693708", github: "", website: "https://arb.arbstro.workers.dev/", role: "Member of Ethereal Workshop", avatar: "1083909291091693708/42f49642d9e406b398f91aeb54696ef9.png" },
    { member: "Writable", discord: "480818241145536513", github: "MunyDev", website: "", role: "Member of Ethereal Workshop", avatar: "480818241145536513/8342048b6d00229f43b6c835c083abfb.png" },
    { member: "kxtz", discord: "952792525637312552", github: "kxtzownsu", website: "https://kxtz.dev", role: "Member of Ethereal Workshop", avatar: "952792525637312552/0354985352dbfdbc9ccd1e3270ef3c74.png" }
];

function renderMembers(data) {
    const container = document.getElementById("members-container");
    container.innerHTML = "";

    data.forEach(({ member, discord, github, website, role, avatar }) => {
        const div = document.createElement("div");
        div.className = "member";

        const img = document.createElement("img");
        img.src = `https://cdn.discordapp.com/avatars/${avatar}`;
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

        if (website) {
            const websiteLink = document.createElement("a");
            websiteLink.href = `${website}`;
            websiteLink.innerHTML = `<i class="fa-solid fa-globe fa-sm"></i>`;
            div.appendChild(websiteLink);
        }

        container.appendChild(div);
    });
}

renderMembers(memberinfo);
