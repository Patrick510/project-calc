
Alvorada Veículos@DESKTOP-BO8D7TC MINGW64 /c/dev/autoCalc (main)
$ git add README.md

Alvorada Veículos@DESKTOP-BO8D7TC MINGW64 /c/dev/autoCalc (main)
$ git commit -m "first-commit"
[main (root-commit) 8e31d6a] first-commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.md

Alvorada Veículos@DESKTOP-BO8D7TC MINGW64 /c/dev/autoCalc (main)
$ git branch -M main

Alvorada Veículos@DESKTOP-BO8D7TC MINGW64 /c/dev/autoCalc (main)
$ git remote add origin https://github.com/Patrick510/project-calc.git

Alvorada Veículos@DESKTOP-BO8D7TC MINGW64 /c/dev/autoCalc (main)
$ git push -u origin main
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 222 bytes | 222.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/Patrick510/project-calc.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.

Alvorada Veículos@DESKTOP-BO8D7TC MINGW64 /c/dev/autoCalc (main)
$ git branch
* main

Alvorada Veículos@DESKTOP-BO8D7TC MINGW64 /c/dev/autoCalc (main)
$ git checkout -b remote
Switched to a new branch 'remote'

Alvorada Veículos@DESKTOP-BO8D7TC MINGW64 /c/dev/autoCalc (remote)
$ git push -u origin remote
branch 'remote' set up to track 'origin/remote'.
Everything up-to-date

Alvorada Veículos@DESKTOP-BO8D7TC MINGW64 /c/dev/autoCalc (remote)
$

Alvorada Veículos@DESKTOP-BO8D7TC MINGW64 /c/dev/autoCalc (remote)
$ git branch -r
  origin/main
  origin/remote

Alvorada Veículos@DESKTOP-BO8D7TC MINGW64 /c/dev/autoCalc (remote)
$ git checkout remote
Already on 'remote'
Your branch is up to date with 'origin/remote'.