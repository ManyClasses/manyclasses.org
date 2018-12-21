---
title: 'Encrypted Consent: A tool for ManyClasses research'
author: ['Josh de Leeuw', 'Ben Motz']
date: '2018-12-20'
slug: encrypted-consent
categories: []
tags: []
summary: 'Students participating in ManyClasses 1 need to be given the option to provide informed consent, but ideally instructors should not know which students have consented to participate. We created a tool to enable encrypted consent.'
---

Students enrolled in a class participating in [ManyClasses 1](../projects/many-classes-1/) can choose whether they permit their coursework and grades to be analyzed by the researchers.[^1] The need to collect informed consent presents a challenge in real classrooms.  While the researchers need to know who has agreed to participate (in order to include the right students), the instructor, in principle, should _not_ know who has consented.  If the instructor knows who has consented, it introduces the possibility of inappropriate coercion (the power differential between instructor and student should not be a factor in whether a student chooses to consent).

One solution would be to simply have the students complete the consent process in an environment that is not part of their normal class, like on the ManyClasses website. But this raises both technical and practical challenges. Students need to be matched to their consent responses in some robust fashion, and linking responses on a ManyClasses website to a particular student is challenging. Asking students to engage in the extra task of going to the ManyClasses website to provide informed consent is an additional burden on students that we would like to avoid if possible. Ideally, we would like students to be able to provide informed consent in the context of their normal course site. In ManyClasses 1, this means providing informed consent through the Canvas LMS. However, we cannot simply include a Canvas question with a *yes* or *no* response because the teacher would then see which students have consented to participate.

**The challenge is: How to obtain informed consent in a course site, where the researchers can tell who consented, while preventing the instructor from knowing who consented?**

We call our solution: *Encrypted consent*.

The idea is straightforward. Students respond to the consent question with a coded response. In our initial setup, the code is a 6-digit number. Students click a radio button to indicate if they do or do not consent, and the appropriate response code is then displayed. Students copy and paste the number into a textbox, and the number is submitted with their assignment. Each 6-digit number is linked to a response option in a database that the ManyClasses research team controls. Teachers can see the 6-digit number, but without access to the database have no way to identify whether a student has consented to participate. Importantly, each 6-digit number is presented only once as a possible response, so that no one can refresh the consent form repeatedly to make a list of the digits that correspond to a particular consent option.

**screenshot / demo**

If you are interested in the technology side of the solution, we've made the [source code available on GitHub](https://github.com/ManyClasses/encrypted-consent). It uses PHP and an sqlite database. We've licensed the software under the MIT license so you are free to use it for whatever purpose you would like.

[^1]: Future ManyClasses studies may have sufficient safeguards in place (e.g., automated treatment assignment, secure transfer of de-identified passively-collected research data, etc.) to mitigate the need for affirmative consent, but for now, students will be invited to provide their consent to become research participants before their coursework is included in ManyClasses 1.
