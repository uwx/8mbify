/*!
 * This software is compiled from several sources, the licenses for which are
 * included herein.
 *
 * ---
 *
 * ffmpeg:
 *
 *  Copyright (c) 2000-2023 Fabrice Bellard et al
 *
 *                   GNU LESSER GENERAL PUBLIC LICENSE
 *                        Version 2.1, February 1999
 *
 *  Copyright (C) 1991, 1999 Free Software Foundation, Inc.
 *  51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
 *  Everyone is permitted to copy and distribute verbatim copies
 *  of this license document, but changing it is not allowed.
 *
 * [This is the first released version of the Lesser GPL.  It also counts
 *  as the successor of the GNU Library Public License, version 2, hence
 *  the version number 2.1.]
 *
 *                             Preamble
 *
 *   The licenses for most software are designed to take away your
 * freedom to share and change it.  By contrast, the GNU General Public
 * Licenses are intended to guarantee your freedom to share and change
 * free software--to make sure the software is free for all its users.
 *
 *   This license, the Lesser General Public License, applies to some
 * specially designated software packages--typically libraries--of the
 * Free Software Foundation and other authors who decide to use it.  You
 * can use it too, but we suggest you first think carefully about whether
 * this license or the ordinary General Public License is the better
 * strategy to use in any particular case, based on the explanations below.
 *
 *   When we speak of free software, we are referring to freedom of use,
 * not price.  Our General Public Licenses are designed to make sure that
 * you have the freedom to distribute copies of free software (and charge
 * for this service if you wish); that you receive source code or can get
 * it if you want it; that you can change the software and use pieces of
 * it in new free programs; and that you are informed that you can do
 * these things.
 *
 *   To protect your rights, we need to make restrictions that forbid
 * distributors to deny you these rights or to ask you to surrender these
 * rights.  These restrictions translate to certain responsibilities for
 * you if you distribute copies of the library or if you modify it.
 *
 *   For example, if you distribute copies of the library, whether gratis
 * or for a fee, you must give the recipients all the rights that we gave
 * you.  You must make sure that they, too, receive or can get the source
 * code.  If you link other code with the library, you must provide
 * complete object files to the recipients, so that they can relink them
 * with the library after making changes to the library and recompiling
 * it.  And you must show them these terms so they know their rights.
 *
 *   We protect your rights with a two-step method: (1) we copyright the
 * library, and (2) we offer you this license, which gives you legal
 * permission to copy, distribute and/or modify the library.
 *
 *   To protect each distributor, we want to make it very clear that
 * there is no warranty for the free library.  Also, if the library is
 * modified by someone else and passed on, the recipients should know
 * that what they have is not the original version, so that the original
 * author's reputation will not be affected by problems that might be
 * introduced by others.
 *
 *   Finally, software patents pose a constant threat to the existence of
 * any free program.  We wish to make sure that a company cannot
 * effectively restrict the users of a free program by obtaining a
 * restrictive license from a patent holder.  Therefore, we insist that
 * any patent license obtained for a version of the library must be
 * consistent with the full freedom of use specified in this license.
 *
 *   Most GNU software, including some libraries, is covered by the
 * ordinary GNU General Public License.  This license, the GNU Lesser
 * General Public License, applies to certain designated libraries, and
 * is quite different from the ordinary General Public License.  We use
 * this license for certain libraries in order to permit linking those
 * libraries into non-free programs.
 *
 *   When a program is linked with a library, whether statically or using
 * a shared library, the combination of the two is legally speaking a
 * combined work, a derivative of the original library.  The ordinary
 * General Public License therefore permits such linking only if the
 * entire combination fits its criteria of freedom.  The Lesser General
 * Public License permits more lax criteria for linking other code with
 * the library.
 *
 *   We call this license the "Lesser" General Public License because it
 * does Less to protect the user's freedom than the ordinary General
 * Public License.  It also provides other free software developers Less
 * of an advantage over competing non-free programs.  These disadvantages
 * are the reason we use the ordinary General Public License for many
 * libraries.  However, the Lesser license provides advantages in certain
 * special circumstances.
 *
 *   For example, on rare occasions, there may be a special need to
 * encourage the widest possible use of a certain library, so that it becomes
 * a de-facto standard.  To achieve this, non-free programs must be
 * allowed to use the library.  A more frequent case is that a free
 * library does the same job as widely used non-free libraries.  In this
 * case, there is little to gain by limiting the free library to free
 * software only, so we use the Lesser General Public License.
 *
 *   In other cases, permission to use a particular library in non-free
 * programs enables a greater number of people to use a large body of
 * free software.  For example, permission to use the GNU C Library in
 * non-free programs enables many more people to use the whole GNU
 * operating system, as well as its variant, the GNU/Linux operating
 * system.
 *
 *   Although the Lesser General Public License is Less protective of the
 * users' freedom, it does ensure that the user of a program that is
 * linked with the Library has the freedom and the wherewithal to run
 * that program using a modified version of the Library.
 *
 *   The precise terms and conditions for copying, distribution and
 * modification follow.  Pay close attention to the difference between a
 * "work based on the library" and a "work that uses the library".  The
 * former contains code derived from the library, whereas the latter must
 * be combined with the library in order to run.
 *
 *                   GNU LESSER GENERAL PUBLIC LICENSE
 *    TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
 *
 *   0. This License Agreement applies to any software library or other
 * program which contains a notice placed by the copyright holder or
 * other authorized party saying it may be distributed under the terms of
 * this Lesser General Public License (also called "this License").
 * Each licensee is addressed as "you".
 *
 *   A "library" means a collection of software functions and/or data
 * prepared so as to be conveniently linked with application programs
 * (which use some of those functions and data) to form executables.
 *
 *   The "Library", below, refers to any such software library or work
 * which has been distributed under these terms.  A "work based on the
 * Library" means either the Library or any derivative work under
 * copyright law: that is to say, a work containing the Library or a
 * portion of it, either verbatim or with modifications and/or translated
 * straightforwardly into another language.  (Hereinafter, translation is
 * included without limitation in the term "modification".)
 *
 *   "Source code" for a work means the preferred form of the work for
 * making modifications to it.  For a library, complete source code means
 * all the source code for all modules it contains, plus any associated
 * interface definition files, plus the scripts used to control compilation
 * and installation of the library.
 *
 *   Activities other than copying, distribution and modification are not
 * covered by this License; they are outside its scope.  The act of
 * running a program using the Library is not restricted, and output from
 * such a program is covered only if its contents constitute a work based
 * on the Library (independent of the use of the Library in a tool for
 * writing it).  Whether that is true depends on what the Library does
 * and what the program that uses the Library does.
 *
 *   1. You may copy and distribute verbatim copies of the Library's
 * complete source code as you receive it, in any medium, provided that
 * you conspicuously and appropriately publish on each copy an
 * appropriate copyright notice and disclaimer of warranty; keep intact
 * all the notices that refer to this License and to the absence of any
 * warranty; and distribute a copy of this License along with the
 * Library.
 *
 *   You may charge a fee for the physical act of transferring a copy,
 * and you may at your option offer warranty protection in exchange for a
 * fee.
 *
 *   2. You may modify your copy or copies of the Library or any portion
 * of it, thus forming a work based on the Library, and copy and
 * distribute such modifications or work under the terms of Section 1
 * above, provided that you also meet all of these conditions:
 *
 *     a) The modified work must itself be a software library.
 *
 *     b) You must cause the files modified to carry prominent notices
 *     stating that you changed the files and the date of any change.
 *
 *     c) You must cause the whole of the work to be licensed at no
 *     charge to all third parties under the terms of this License.
 *
 *     d) If a facility in the modified Library refers to a function or a
 *     table of data to be supplied by an application program that uses
 *     the facility, other than as an argument passed when the facility
 *     is invoked, then you must make a good faith effort to ensure that,
 *     in the event an application does not supply such function or
 *     table, the facility still operates, and performs whatever part of
 *     its purpose remains meaningful.
 *
 *     (For example, a function in a library to compute square roots has
 *     a purpose that is entirely well-defined independent of the
 *     application.  Therefore, Subsection 2d requires that any
 *     application-supplied function or table used by this function must
 *     be optional: if the application does not supply it, the square
 *     root function must still compute square roots.)
 *
 * These requirements apply to the modified work as a whole.  If
 * identifiable sections of that work are not derived from the Library,
 * and can be reasonably considered independent and separate works in
 * themselves, then this License, and its terms, do not apply to those
 * sections when you distribute them as separate works.  But when you
 * distribute the same sections as part of a whole which is a work based
 * on the Library, the distribution of the whole must be on the terms of
 * this License, whose permissions for other licensees extend to the
 * entire whole, and thus to each and every part regardless of who wrote
 * it.
 *
 * Thus, it is not the intent of this section to claim rights or contest
 * your rights to work written entirely by you; rather, the intent is to
 * exercise the right to control the distribution of derivative or
 * collective works based on the Library.
 *
 * In addition, mere aggregation of another work not based on the Library
 * with the Library (or with a work based on the Library) on a volume of
 * a storage or distribution medium does not bring the other work under
 * the scope of this License.
 *
 *   3. You may opt to apply the terms of the ordinary GNU General Public
 * License instead of this License to a given copy of the Library.  To do
 * this, you must alter all the notices that refer to this License, so
 * that they refer to the ordinary GNU General Public License, version 2,
 * instead of to this License.  (If a newer version than version 2 of the
 * ordinary GNU General Public License has appeared, then you can specify
 * that version instead if you wish.)  Do not make any other change in
 * these notices.
 *
 *   Once this change is made in a given copy, it is irreversible for
 * that copy, so the ordinary GNU General Public License applies to all
 * subsequent copies and derivative works made from that copy.
 *
 *   This option is useful when you wish to copy part of the code of
 * the Library into a program that is not a library.
 *
 *   4. You may copy and distribute the Library (or a portion or
 * derivative of it, under Section 2) in object code or executable form
 * under the terms of Sections 1 and 2 above provided that you accompany
 * it with the complete corresponding machine-readable source code, which
 * must be distributed under the terms of Sections 1 and 2 above on a
 * medium customarily used for software interchange.
 *
 *   If distribution of object code is made by offering access to copy
 * from a designated place, then offering equivalent access to copy the
 * source code from the same place satisfies the requirement to
 * distribute the source code, even though third parties are not
 * compelled to copy the source along with the object code.
 *
 *   5. A program that contains no derivative of any portion of the
 * Library, but is designed to work with the Library by being compiled or
 * linked with it, is called a "work that uses the Library".  Such a
 * work, in isolation, is not a derivative work of the Library, and
 * therefore falls outside the scope of this License.
 *
 *   However, linking a "work that uses the Library" with the Library
 * creates an executable that is a derivative of the Library (because it
 * contains portions of the Library), rather than a "work that uses the
 * library".  The executable is therefore covered by this License.
 * Section 6 states terms for distribution of such executables.
 *
 *   When a "work that uses the Library" uses material from a header file
 * that is part of the Library, the object code for the work may be a
 * derivative work of the Library even though the source code is not.
 * Whether this is true is especially significant if the work can be
 * linked without the Library, or if the work is itself a library.  The
 * threshold for this to be true is not precisely defined by law.
 *
 *   If such an object file uses only numerical parameters, data
 * structure layouts and accessors, and small macros and small inline
 * functions (ten lines or less in length), then the use of the object
 * file is unrestricted, regardless of whether it is legally a derivative
 * work.  (Executables containing this object code plus portions of the
 * Library will still fall under Section 6.)
 *
 *   Otherwise, if the work is a derivative of the Library, you may
 * distribute the object code for the work under the terms of Section 6.
 * Any executables containing that work also fall under Section 6,
 * whether or not they are linked directly with the Library itself.
 *
 *   6. As an exception to the Sections above, you may also combine or
 * link a "work that uses the Library" with the Library to produce a
 * work containing portions of the Library, and distribute that work
 * under terms of your choice, provided that the terms permit
 * modification of the work for the customer's own use and reverse
 * engineering for debugging such modifications.
 *
 *   You must give prominent notice with each copy of the work that the
 * Library is used in it and that the Library and its use are covered by
 * this License.  You must supply a copy of this License.  If the work
 * during execution displays copyright notices, you must include the
 * copyright notice for the Library among them, as well as a reference
 * directing the user to the copy of this License.  Also, you must do one
 * of these things:
 *
 *     a) Accompany the work with the complete corresponding
 *     machine-readable source code for the Library including whatever
 *     changes were used in the work (which must be distributed under
 *     Sections 1 and 2 above); and, if the work is an executable linked
 *     with the Library, with the complete machine-readable "work that
 *     uses the Library", as object code and/or source code, so that the
 *     user can modify the Library and then relink to produce a modified
 *     executable containing the modified Library.  (It is understood
 *     that the user who changes the contents of definitions files in the
 *     Library will not necessarily be able to recompile the application
 *     to use the modified definitions.)
 *
 *     b) Use a suitable shared library mechanism for linking with the
 *     Library.  A suitable mechanism is one that (1) uses at run time a
 *     copy of the library already present on the user's computer system,
 *     rather than copying library functions into the executable, and (2)
 *     will operate properly with a modified version of the library, if
 *     the user installs one, as long as the modified version is
 *     interface-compatible with the version that the work was made with.
 *
 *     c) Accompany the work with a written offer, valid for at
 *     least three years, to give the same user the materials
 *     specified in Subsection 6a, above, for a charge no more
 *     than the cost of performing this distribution.
 *
 *     d) If distribution of the work is made by offering access to copy
 *     from a designated place, offer equivalent access to copy the above
 *     specified materials from the same place.
 *
 *     e) Verify that the user has already received a copy of these
 *     materials or that you have already sent this user a copy.
 *
 *   For an executable, the required form of the "work that uses the
 * Library" must include any data and utility programs needed for
 * reproducing the executable from it.  However, as a special exception,
 * the materials to be distributed need not include anything that is
 * normally distributed (in either source or binary form) with the major
 * components (compiler, kernel, and so on) of the operating system on
 * which the executable runs, unless that component itself accompanies
 * the executable.
 *
 *   It may happen that this requirement contradicts the license
 * restrictions of other proprietary libraries that do not normally
 * accompany the operating system.  Such a contradiction means you cannot
 * use both them and the Library together in an executable that you
 * distribute.
 *
 *   7. You may place library facilities that are a work based on the
 * Library side-by-side in a single library together with other library
 * facilities not covered by this License, and distribute such a combined
 * library, provided that the separate distribution of the work based on
 * the Library and of the other library facilities is otherwise
 * permitted, and provided that you do these two things:
 *
 *     a) Accompany the combined library with a copy of the same work
 *     based on the Library, uncombined with any other library
 *     facilities.  This must be distributed under the terms of the
 *     Sections above.
 *
 *     b) Give prominent notice with the combined library of the fact
 *     that part of it is a work based on the Library, and explaining
 *     where to find the accompanying uncombined form of the same work.
 *
 *   8. You may not copy, modify, sublicense, link with, or distribute
 * the Library except as expressly provided under this License.  Any
 * attempt otherwise to copy, modify, sublicense, link with, or
 * distribute the Library is void, and will automatically terminate your
 * rights under this License.  However, parties who have received copies,
 * or rights, from you under this License will not have their licenses
 * terminated so long as such parties remain in full compliance.
 *
 *   9. You are not required to accept this License, since you have not
 * signed it.  However, nothing else grants you permission to modify or
 * distribute the Library or its derivative works.  These actions are
 * prohibited by law if you do not accept this License.  Therefore, by
 * modifying or distributing the Library (or any work based on the
 * Library), you indicate your acceptance of this License to do so, and
 * all its terms and conditions for copying, distributing or modifying
 * the Library or works based on it.
 *
 *   10. Each time you redistribute the Library (or any work based on the
 * Library), the recipient automatically receives a license from the
 * original licensor to copy, distribute, link with or modify the Library
 * subject to these terms and conditions.  You may not impose any further
 * restrictions on the recipients' exercise of the rights granted herein.
 * You are not responsible for enforcing compliance by third parties with
 * this License.
 *
 *   11. If, as a consequence of a court judgment or allegation of patent
 * infringement or for any other reason (not limited to patent issues),
 * conditions are imposed on you (whether by court order, agreement or
 * otherwise) that contradict the conditions of this License, they do not
 * excuse you from the conditions of this License.  If you cannot
 * distribute so as to satisfy simultaneously your obligations under this
 * License and any other pertinent obligations, then as a consequence you
 * may not distribute the Library at all.  For example, if a patent
 * license would not permit royalty-free redistribution of the Library by
 * all those who receive copies directly or indirectly through you, then
 * the only way you could satisfy both it and this License would be to
 * refrain entirely from distribution of the Library.
 *
 * If any portion of this section is held invalid or unenforceable under any
 * particular circumstance, the balance of the section is intended to apply,
 * and the section as a whole is intended to apply in other circumstances.
 *
 * It is not the purpose of this section to induce you to infringe any
 * patents or other property right claims or to contest validity of any
 * such claims; this section has the sole purpose of protecting the
 * integrity of the free software distribution system which is
 * implemented by public license practices.  Many people have made
 * generous contributions to the wide range of software distributed
 * through that system in reliance on consistent application of that
 * system; it is up to the author/donor to decide if he or she is willing
 * to distribute software through any other system and a licensee cannot
 * impose that choice.
 *
 * This section is intended to make thoroughly clear what is believed to
 * be a consequence of the rest of this License.
 *
 *   12. If the distribution and/or use of the Library is restricted in
 * certain countries either by patents or by copyrighted interfaces, the
 * original copyright holder who places the Library under this License may add
 * an explicit geographical distribution limitation excluding those countries,
 * so that distribution is permitted only in or among countries not thus
 * excluded.  In such case, this License incorporates the limitation as if
 * written in the body of this License.
 *
 *   13. The Free Software Foundation may publish revised and/or new
 * versions of the Lesser General Public License from time to time.
 * Such new versions will be similar in spirit to the present version,
 * but may differ in detail to address new problems or concerns.
 *
 * Each version is given a distinguishing version number.  If the Library
 * specifies a version number of this License which applies to it and
 * "any later version", you have the option of following the terms and
 * conditions either of that version or of any later version published by
 * the Free Software Foundation.  If the Library does not specify a
 * license version number, you may choose any version ever published by
 * the Free Software Foundation.
 *
 *   14. If you wish to incorporate parts of the Library into other free
 * programs whose distribution conditions are incompatible with these,
 * write to the author to ask for permission.  For software which is
 * copyrighted by the Free Software Foundation, write to the Free
 * Software Foundation; we sometimes make exceptions for this.  Our
 * decision will be guided by the two goals of preserving the free status
 * of all derivatives of our free software and of promoting the sharing
 * and reuse of software generally.
 *
 *                             NO WARRANTY
 *
 *   15. BECAUSE THE LIBRARY IS LICENSED FREE OF CHARGE, THERE IS NO
 * WARRANTY FOR THE LIBRARY, TO THE EXTENT PERMITTED BY APPLICABLE LAW.
 * EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR
 * OTHER PARTIES PROVIDE THE LIBRARY "AS IS" WITHOUT WARRANTY OF ANY
 * KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE
 * LIBRARY IS WITH YOU.  SHOULD THE LIBRARY PROVE DEFECTIVE, YOU ASSUME
 * THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.
 *
 *   16. IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN
 * WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MAY MODIFY
 * AND/OR REDISTRIBUTE THE LIBRARY AS PERMITTED ABOVE, BE LIABLE TO YOU
 * FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR
 * CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE
 * LIBRARY (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA BEING
 * RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A
 * FAILURE OF THE LIBRARY TO OPERATE WITH ANY OTHER SOFTWARE), EVEN IF
 * SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
 * DAMAGES.
 *
 *                      END OF TERMS AND CONDITIONS
 *
 *            How to Apply These Terms to Your New Libraries
 *
 *   If you develop a new library, and you want it to be of the greatest
 * possible use to the public, we recommend making it free software that
 * everyone can redistribute and change.  You can do so by permitting
 * redistribution under these terms (or, alternatively, under the terms of the
 * ordinary General Public License).
 *
 *   To apply these terms, attach the following notices to the library.  It is
 * safest to attach them to the start of each source file to most effectively
 * convey the exclusion of warranty; and each file should have at least the
 * "copyright" line and a pointer to where the full notice is found.
 *
 *     <one line to give the library's name and a brief idea of what it does.>
 *     Copyright (C) <year>  <name of author>
 *
 *     This library is free software; you can redistribute it and/or
 *     modify it under the terms of the GNU Lesser General Public
 *     License as published by the Free Software Foundation; either
 *     version 2.1 of the License, or (at your option) any later version.
 *
 *     This library is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 *     Lesser General Public License for more details.
 *
 *     You should have received a copy of the GNU Lesser General Public
 *     License along with this library; if not, write to the Free Software
 *     Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
 *
 * Also add information on how to contact you by electronic and paper mail.
 *
 * You should also get your employer (if you work as a programmer) or your
 * school, if any, to sign a "copyright disclaimer" for the library, if
 * necessary.  Here is a sample; alter the names:
 *
 *   Yoyodyne, Inc., hereby disclaims all copyright interest in the
 *   library `Frob' (a library for tweaking knobs) written by James Random Hacker.
 *
 *   <signature of Ty Coon>, 1 April 1990
 *   Ty Coon, President of Vice
 *
 * That's all there is to it!
 *
 *
 * ---
 *
 * ffmpeg-faandct:
 *
 * Copyright (c) 2003 Michael Niedermayer <michaelni@gmx.at>
 * Copyright (c) 2003 Roman Shaposhnik
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 *
 * ---
 *
 * ffmepg (JPEG components):
 *
 * The authors make NO WARRANTY or representation, either express or implied,
 * with respect to this software, its quality, accuracy, merchantability, or
 * fitness for a particular purpose.  This software is provided "AS IS", and
 * you, its user, assume the entire risk as to its quality and accuracy.
 *
 * This software is copyright (C) 1991, 1992, Thomas G. Lane.
 * All Rights Reserved except as specified below.
 *
 * Permission is hereby granted to use, copy, modify, and distribute this
 * software (or portions thereof) for any purpose, without fee, subject to
 * these conditions:
 * (1) If any part of the source code for this software is distributed, then
 * this README file must be included, with this copyright and no-warranty
 * notice unaltered; and any additions, deletions, or changes to the original
 * files must be clearly indicated in accompanying documentation.
 * (2) If only executable code is distributed, then the accompanying
 * documentation must state that "this software is based in part on the work
 * of the Independent JPEG Group".
 * (3) Permission for use of this software is granted only if the user accepts
 * full responsibility for any undesirable consequences; the authors accept
 * NO LIABILITY for damages of any kind.
 *
 * These conditions apply to any software derived from or based on the IJG
 * code, not just to the unmodified library.  If you use our work, you ought
 * to acknowledge us.
 *
 * Permission is NOT granted for the use of any IJG author's name or company
 * name in advertising or publicity relating to this software or products
 * derived from it.  This software may be referred to only as "the Independent
 * JPEG Group's software".
 *
 * We specifically permit and encourage the use of this software as the basis
 * of commercial products, provided that all warranty or liability claims are
 * assumed by the product vendor.
 *
 *
 * ---
 *
 * ffmpeg-avsscanf:
 *
 * Copyright (c) 2005-2014 Rich Felker, et al.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *
 * ---
 *
 * ffmpeg oggdec:
 *
 *     Copyright (C) 2005  Michael Ahlberg, Måns Rullgård
 *     Copyright (C) 2005  Matthieu CASTET, Alex Beregszaszi
 *     Copyright (C) 2008  Reimar Döffinger
 *
 *     Permission is hereby granted, free of charge, to any person obtaining a
 *     copy of this software and associated documentation files (the
 *     "Software"), to deal in the Software without restriction, including
 *     without limitation the rights to use, copy, modify, merge, publish,
 *     distribute, sublicense, and/or sell copies of the Software, and to
 *     permit persons to whom the Software is furnished to do so, subject to
 *     the following conditions:
 *
 *     The above copyright notice and this permission notice shall be included
 *     in all copies or substantial portions of the Software.
 *
 *     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 *     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *     MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 *     IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 *     CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 *     TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 *     SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *
 * ---
 *
 * opus:
 *
 * Copyright 2001-2011 Xiph.Org, Skype Limited, Octasic,
 *                     Jean-Marc Valin, Timothy B. Terriberry,
 *                     CSIRO, Gregory Maxwell, Mark Borgerding,
 *                     Erik de Castro Lopo
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 * - Redistributions of source code must retain the above copyright notice,
 *   this list of conditions and the following disclaimer.
 * 
 * - Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 * 
 * - Neither the name of Internet Society, IETF or IETF Trust, nor the names of
 *   specific contributors, may be used to endorse or promote products derived
 *   from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS ``AS
 * IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 * Opus is subject to the royalty-free patent licenses which are specified at:
 * 
 * Xiph.Org Foundation:
 * https://datatracker.ietf.org/ipr/1524/
 * 
 * Microsoft Corporation:
 * https://datatracker.ietf.org/ipr/1914/
 * 
 * Broadcom Corporation:
 * https://datatracker.ietf.org/ipr/1526/
 *
 *
 * ---
 *
 * libvorbis, libogg:
 *
 * Copyright (c) 2002-2020 Xiph.org Foundation
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * - Redistributions of source code must retain the above copyright notice,
 *   this list of conditions and the following disclaimer.
 *
 * - Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * - Neither the name of the Xiph.org Foundation nor the names of its
 *   contributors may be used to endorse or promote products derived from this
 *   software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS ``AS
 * IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE FOUNDATION OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 *
 * ---
 *
 * lame:
 *
 *  Copyright (C) 1999-2017 The L.A.M.E. project
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Library General Public
 * License as published by the Free Software Foundation; either
 * version 2 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Library General Public License for more details.
 *
 * You should have received a copy of the GNU Library General Public
 * License along with this library; if not, write to the
 * Free Software Foundation, Inc., 59 Temple Place - Suite 330,
 * Boston, MA 02111-1307, USA.
 *
 *
 * ---
 *
 * libvpx:
 *
 * Copyright (c) 2010, The WebM Project authors. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *   * Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *
 *   * Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in
 *     the documentation and/or other materials provided with the
 *     distribution.
 *
 *   * Neither the name of Google, nor the WebM Project, nor the names
 *     of its contributors may be used to endorse or promote products
 *     derived from this software without specific prior written
 *     permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 *
 * ---
 *
 * libaom:
 *
 * Copyright (c) 2016, Alliance for Open Media. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in
 *    the documentation and/or other materials provided with the
 *    distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
 * FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 * ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 *
 * ---
 *
 * libopenh264:
 *
 * Copyright (c) 2013, Cisco Systems
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 * * Redistributions in binary form must reproduce the above copyright notice, this
 *   list of conditions and the following disclaimer in the documentation and/or
 *   other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 *
 *
 *
 * ---
 *
 * zlib:
 *
 * (C) 1995-2022 Jean-loup Gailly and Mark Adler
 *
 *  This software is provided 'as-is', without any express or implied
 *  warranty.  In no event will the authors be held liable for any damages
 *  arising from the use of this software.
 *
 *  Permission is granted to anyone to use this software for any purpose,
 *  including commercial applications, and to alter it and redistribute it
 *  freely, subject to the following restrictions:
 *
 *  1. The origin of this software must not be misrepresented; you must not
 *     claim that you wrote the original software. If you use this software
 *     in a product, an acknowledgment in the product documentation would be
 *     appreciated but is not required.
 *  2. Altered source versions must be plainly marked as such, and must not be
 *     misrepresented as being the original software.
 *  3. This notice may not be removed or altered from any source distribution.
 *
 *  Jean-loup Gailly        Mark Adler
 *  jloup@gzip.org          madler@alumni.caltech.edu
 *
 *
 * ---
 *
 * emscripten and musl:
 *
 * Copyright (c) 2010-2023 Emscripten authors, see AUTHORS file.
 * Copyright © 2005-2023 Rich Felker, et al.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

var LibAVFactory = (() => {
  var _scriptDir = import.meta.url;
  
  return (
async function(moduleArg = {}) {

// Support for growable heap + pthreads, where the buffer may change, so JS views
// must be updated.
function GROWABLE_HEAP_I8() {
  if (wasmMemory.buffer != HEAP8.buffer) {
    updateMemoryViews();
  }
  return HEAP8;
}
function GROWABLE_HEAP_U8() {
  if (wasmMemory.buffer != HEAP8.buffer) {
    updateMemoryViews();
  }
  return HEAPU8;
}
function GROWABLE_HEAP_I16() {
  if (wasmMemory.buffer != HEAP8.buffer) {
    updateMemoryViews();
  }
  return HEAP16;
}
function GROWABLE_HEAP_U16() {
  if (wasmMemory.buffer != HEAP8.buffer) {
    updateMemoryViews();
  }
  return HEAPU16;
}
function GROWABLE_HEAP_I32() {
  if (wasmMemory.buffer != HEAP8.buffer) {
    updateMemoryViews();
  }
  return HEAP32;
}
function GROWABLE_HEAP_U32() {
  if (wasmMemory.buffer != HEAP8.buffer) {
    updateMemoryViews();
  }
  return HEAPU32;
}
function GROWABLE_HEAP_F32() {
  if (wasmMemory.buffer != HEAP8.buffer) {
    updateMemoryViews();
  }
  return HEAPF32;
}
function GROWABLE_HEAP_F64() {
  if (wasmMemory.buffer != HEAP8.buffer) {
    updateMemoryViews();
  }
  return HEAPF64;
}

var Module = moduleArg;

var readyPromiseResolve, readyPromiseReject;

Module["ready"] = new Promise((resolve, reject) => {
 readyPromiseResolve = resolve;
 readyPromiseReject = reject;
});

if (typeof _scriptDir === "undefined") {
 if (typeof LibAV === "object" && LibAV && LibAV.base) _scriptDir = LibAV.base + "/libav-5.1.6.1.1-2e129ab-all.dbg.thr.mjs"; else if (typeof self && self && self.location) _scriptDir = self.location.href;
}

Module.locateFile = function(path, prefix) {
 if (path.lastIndexOf(".wasm") === path.length - 5 && path.indexOf("libav-") !== -1) {
  if (Module.wasmurl) return Module.wasmurl;
  if (Module.variant) return prefix + "libav-5.1.6.1.1-2e129ab-" + Module.variant + ".dbg.thr.wasm";
 }
 return prefix + path;
};

var moduleOverrides = Object.assign({}, Module);

var arguments_ = [];

var thisProgram = "./this.program";

var quit_ = (status, toThrow) => {
 throw toThrow;
};

var ENVIRONMENT_IS_WEB = typeof window == "object";

var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";

var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";

var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

var ENVIRONMENT_IS_PTHREAD = Module["ENVIRONMENT_IS_PTHREAD"] || false;

var scriptDirectory = "";

function locateFile(path) {
 if (Module["locateFile"]) {
  return Module["locateFile"](path, scriptDirectory);
 }
 return scriptDirectory + path;
}

var read_, readAsync, readBinary;

if (ENVIRONMENT_IS_NODE) {
 const {createRequire: createRequire} = await import("module");
 /** @suppress{duplicate} */ var require = createRequire(import.meta.url);
 var fs = require("fs");
 var nodePath = require("path");
 if (ENVIRONMENT_IS_WORKER) {
  scriptDirectory = nodePath.dirname(scriptDirectory) + "/";
 } else {
  scriptDirectory = require("url").fileURLToPath(new URL("./", import.meta.url));
 }
 read_ = (filename, binary) => {
  filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
  return fs.readFileSync(filename, binary ? undefined : "utf8");
 };
 readBinary = filename => {
  var ret = read_(filename, true);
  if (!ret.buffer) {
   ret = new Uint8Array(ret);
  }
  return ret;
 };
 readAsync = (filename, onload, onerror, binary = true) => {
  filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
  fs.readFile(filename, binary ? undefined : "utf8", (err, data) => {
   if (err) onerror(err); else onload(binary ? data.buffer : data);
  });
 };
 if (!Module["thisProgram"] && process.argv.length > 1) {
  thisProgram = process.argv[1].replace(/\\/g, "/");
 }
 arguments_ = process.argv.slice(2);
 quit_ = (status, toThrow) => {
  process.exitCode = status;
  throw toThrow;
 };
 global.Worker = require("worker_threads").Worker;
} else  if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
 if (ENVIRONMENT_IS_WORKER) {
  scriptDirectory = self.location.href;
 } else if (typeof document != "undefined" && document.currentScript) {
  scriptDirectory = document.currentScript.src;
 }
 if (_scriptDir) {
  scriptDirectory = _scriptDir;
 }
 if (scriptDirectory.startsWith("blob:")) {
  scriptDirectory = "";
 } else {
  scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
 }
 if (!ENVIRONMENT_IS_NODE) {
  read_ = url => {
   var xhr = new XMLHttpRequest;
   xhr.open("GET", url, false);
   xhr.send(null);
   return xhr.responseText;
  };
  if (ENVIRONMENT_IS_WORKER) {
   readBinary = url => {
    var xhr = new XMLHttpRequest;
    xhr.open("GET", url, false);
    xhr.responseType = "arraybuffer";
    xhr.send(null);
    return new Uint8Array(/** @type{!ArrayBuffer} */ (xhr.response));
   };
  }
  readAsync = (url, onload, onerror) => {
   var xhr = new XMLHttpRequest;
   xhr.open("GET", url, true);
   xhr.responseType = "arraybuffer";
   xhr.onload = () => {
    if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
     onload(xhr.response);
     return;
    }
    onerror();
   };
   xhr.onerror = onerror;
   xhr.send(null);
  };
 }
} else  {}

if (ENVIRONMENT_IS_NODE) {
 if (typeof performance == "undefined") {
  global.performance = require("perf_hooks").performance;
 }
}

var defaultPrint = console.log.bind(console);

var defaultPrintErr = console.error.bind(console);

if (ENVIRONMENT_IS_NODE) {
 defaultPrint = (...args) => fs.writeSync(1, args.join(" ") + "\n");
 defaultPrintErr = (...args) => fs.writeSync(2, args.join(" ") + "\n");
}

var out = Module["print"] || defaultPrint;

var err = Module["printErr"] || defaultPrintErr;

Object.assign(Module, moduleOverrides);

moduleOverrides = null;

if (Module["arguments"]) arguments_ = Module["arguments"];

if (Module["thisProgram"]) thisProgram = Module["thisProgram"];

if (Module["quit"]) quit_ = Module["quit"];

var wasmBinary;

if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];

if (typeof WebAssembly != "object") {
 abort("no native wasm support detected");
}

var wasmMemory;

var wasmModule;

var ABORT = false;

var EXITSTATUS;

/** @type {function(*, string=)} */ function assert(condition, text) {
 if (!condition) {
  abort(text);
 }
}

var HEAP, /** @type {!Int8Array} */ HEAP8, /** @type {!Uint8Array} */ HEAPU8, /** @type {!Int16Array} */ HEAP16, /** @type {!Uint16Array} */ HEAPU16, /** @type {!Int32Array} */ HEAP32, /** @type {!Uint32Array} */ HEAPU32, /** @type {!Float32Array} */ HEAPF32, /** @type {!Float64Array} */ HEAPF64;

function updateMemoryViews() {
 var b = wasmMemory.buffer;
 Module["HEAP8"] = HEAP8 = new Int8Array(b);
 Module["HEAP16"] = HEAP16 = new Int16Array(b);
 Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
 Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
 Module["HEAP32"] = HEAP32 = new Int32Array(b);
 Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
 Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
 Module["HEAPF64"] = HEAPF64 = new Float64Array(b);
}

var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 25165824;

if (ENVIRONMENT_IS_PTHREAD) {
 wasmMemory = Module["wasmMemory"];
} else {
 if (Module["wasmMemory"]) {
  wasmMemory = Module["wasmMemory"];
 } else {
  wasmMemory = new WebAssembly.Memory({
   "initial": INITIAL_MEMORY / 65536,
   "maximum": 2147483648 / 65536,
   "shared": true
  });
  if (!(wasmMemory.buffer instanceof SharedArrayBuffer)) {
   err("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag");
   if (ENVIRONMENT_IS_NODE) {
    err("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)");
   }
   throw Error("bad memory");
  }
 }
}

updateMemoryViews();

INITIAL_MEMORY = wasmMemory.buffer.byteLength;

var __ATPRERUN__ = [];

var __ATINIT__ = [];

var __ATEXIT__ = [];

var __ATPOSTRUN__ = [];

var runtimeInitialized = false;

function preRun() {
 if (Module["preRun"]) {
  if (typeof Module["preRun"] == "function") Module["preRun"] = [ Module["preRun"] ];
  while (Module["preRun"].length) {
   addOnPreRun(Module["preRun"].shift());
  }
 }
 callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
 runtimeInitialized = true;
 if (ENVIRONMENT_IS_PTHREAD) return;
 if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
 FS.ignorePermissions = false;
 TTY.init();
 callRuntimeCallbacks(__ATINIT__);
}

function postRun() {
 if (ENVIRONMENT_IS_PTHREAD) return;
 if (Module["postRun"]) {
  if (typeof Module["postRun"] == "function") Module["postRun"] = [ Module["postRun"] ];
  while (Module["postRun"].length) {
   addOnPostRun(Module["postRun"].shift());
  }
 }
 callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
 __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
 __ATINIT__.unshift(cb);
}

function addOnExit(cb) {}

function addOnPostRun(cb) {
 __ATPOSTRUN__.unshift(cb);
}

var runDependencies = 0;

var runDependencyWatcher = null;

var dependenciesFulfilled = null;

function getUniqueRunDependency(id) {
 return id;
}

function addRunDependency(id) {
 runDependencies++;
 Module["monitorRunDependencies"]?.(runDependencies);
}

function removeRunDependency(id) {
 runDependencies--;
 Module["monitorRunDependencies"]?.(runDependencies);
 if (runDependencies == 0) {
  if (runDependencyWatcher !== null) {
   clearInterval(runDependencyWatcher);
   runDependencyWatcher = null;
  }
  if (dependenciesFulfilled) {
   var callback = dependenciesFulfilled;
   dependenciesFulfilled = null;
   callback();
  }
 }
}

/** @param {string|number=} what */ function abort(what) {
 Module["onAbort"]?.(what);
 what = "Aborted(" + what + ")";
 err(what);
 ABORT = true;
 EXITSTATUS = 1;
 what += ". Build with -sASSERTIONS for more info.";
 /** @suppress {checkTypes} */ var e = new WebAssembly.RuntimeError(what);
 readyPromiseReject(e);
 throw e;
}

var dataURIPrefix = "data:application/octet-stream;base64,";

/**
 * Indicates whether filename is a base64 data URI.
 * @noinline
 */ var isDataURI = filename => filename.startsWith(dataURIPrefix);

/**
 * Indicates whether filename is delivered via file protocol (as opposed to http/https)
 * @noinline
 */ var isFileURI = filename => filename.startsWith("file://");

var wasmBinaryFile;

if (Module["locateFile"]) {
 wasmBinaryFile = "libav-5.1.6.1.1-2e129ab-all.dbg.thr.wasm";
 if (!isDataURI(wasmBinaryFile)) {
  wasmBinaryFile = locateFile(wasmBinaryFile);
 }
} else {
 wasmBinaryFile = new URL("libav-5.1.6.1.1-2e129ab-all.dbg.thr.wasm", import.meta.url).href;
}

function getBinarySync(file) {
 if (file == wasmBinaryFile && wasmBinary) {
  return new Uint8Array(wasmBinary);
 }
 if (readBinary) {
  return readBinary(file);
 }
 throw "both async and sync fetching of the wasm failed";
}

function getBinaryPromise(binaryFile) {
 if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
  if (typeof fetch == "function" && !isFileURI(binaryFile)) {
   return fetch(binaryFile, {
    credentials: "same-origin"
   }).then(response => {
    if (!response["ok"]) {
     throw `failed to load wasm binary file at '${binaryFile}'`;
    }
    return response["arrayBuffer"]();
   }).catch(() => getBinarySync(binaryFile));
  } else if (readAsync) {
   return new Promise((resolve, reject) => {
    readAsync(binaryFile, response => resolve(new Uint8Array(/** @type{!ArrayBuffer} */ (response))), reject);
   });
  }
 }
 return Promise.resolve().then(() => getBinarySync(binaryFile));
}

function instantiateArrayBuffer(binaryFile, imports, receiver) {
 return getBinaryPromise(binaryFile).then(binary => WebAssembly.instantiate(binary, imports)).then(receiver, reason => {
  err(`failed to asynchronously prepare wasm: ${reason}`);
  abort(reason);
 });
}

function instantiateAsync(binary, binaryFile, imports, callback) {
 if (!binary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(binaryFile) &&  !isFileURI(binaryFile) &&  !ENVIRONMENT_IS_NODE && typeof fetch == "function") {
  return fetch(binaryFile, {
   credentials: "same-origin"
  }).then(response => {
   /** @suppress {checkTypes} */ var result = WebAssembly.instantiateStreaming(response, imports);
   return result.then(callback, function(reason) {
    err(`wasm streaming compile failed: ${reason}`);
    err("falling back to ArrayBuffer instantiation");
    return instantiateArrayBuffer(binaryFile, imports, callback);
   });
  });
 }
 return instantiateArrayBuffer(binaryFile, imports, callback);
}

function createWasm() {
 var info = {
  "env": wasmImports,
  "wasi_snapshot_preview1": wasmImports
 };
 /** @param {WebAssembly.Module=} module*/ function receiveInstance(instance, module) {
  wasmExports = instance.exports;
  wasmExports = Asyncify.instrumentWasmExports(wasmExports);
  registerTLSInit(wasmExports["_emscripten_tls_init"]);
  wasmTable = wasmExports["__indirect_function_table"];
  addOnInit(wasmExports["__wasm_call_ctors"]);
  wasmModule = module;
  removeRunDependency("wasm-instantiate");
  return wasmExports;
 }
 addRunDependency("wasm-instantiate");
 function receiveInstantiationResult(result) {
  receiveInstance(result["instance"], result["module"]);
 }
 if (Module["instantiateWasm"]) {
  try {
   return Module["instantiateWasm"](info, receiveInstance);
  } catch (e) {
   err(`Module.instantiateWasm callback failed with error: ${e}`);
   readyPromiseReject(e);
  }
 }
 instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult).catch(readyPromiseReject);
 return {};
}

var tempDouble;

var tempI64;

function libavjs_main_thread(ignore) {
 noExitRuntime = Module.noExitRuntime = true;
 var origOnmessage = onmessage;
 onmessage = function(ev) {
  var a;
  function reply(succ, ret) {
   var transfer = [];
   if (typeof ret === "object" && ret && ret.libavjsTransfer) transfer = ret.libavjsTransfer;
   postMessage({
    c: "libavjs_ret",
    a: [ a[0], a[1], succ, ret ]
   }, transfer);
  }
  if (ev.data && ev.data.c === "libavjs_run") {
   a = ev.data.a;
   var succ = true;
   var ret;
   try {
    ret = Module[a[1]].apply(Module, a.slice(2));
   } catch (ex) {
    succ = false;
    ret = ex + "\n" + ex.stack;
   }
   if (succ && ret && ret.then) {
    ret.then(function(ret) {
     reply(true, ret);
    }).catch(function(ret) {
     reply(false, ret + "\n" + ret.stack);
    });
   } else {
    reply(succ, ret);
   }
  } else if (ev.data && ev.data.c === "libavjs_wait_reader") {
   var name = "" + ev.data.fd;
   var waiters = Module.ff_reader_dev_waiters[name] || [];
   delete Module.ff_reader_dev_waiters[name];
   for (var i = 0; i < waiters.length; i++) waiters[i]();
  } else {
   return origOnmessage.apply(this, arguments);
  }
 };
 postMessage({
  c: "libavjs_ready"
 });
}

function libavjs_wait_reader(fd) {
 return Asyncify.handleAsync(function() {
  return new Promise(function(res) {
   var name = "" + fd;
   var waiters = Module.ff_reader_dev_waiters[name];
   if (!waiters) waiters = Module.ff_reader_dev_waiters[name] = [];
   waiters.push(res);
   postMessage({
    c: "libavjs_wait_reader",
    fd: fd
   });
  });
 });
}

function jsfetch_open_js(url) {
 return Asyncify.handleAsync(function() {
  return Promise.all([]).then(function() {
   url = UTF8ToString(url);
   if (url.slice(0, 8) === "jsfetch:") return fetch(url.slice(8)); else return fetch(url);
  }).then(function(response) {
   if (!Module.libavjsJSFetch) Module.libavjsJSFetch = {
    ctr: 1,
    fetches: {}
   };
   var jsf = Module.libavjsJSFetch;
   var idx = jsf.ctr++;
   var reader = response.body.getReader();
   var jsfo = jsf.fetches[idx] = {
    url: url,
    response: response,
    reader: reader,
    next: reader.read().then(function(res) {
     jsfo.buf = res;
    }).catch(function(rej) {
     jsfo.rej = rej;
    }),
    buf: null,
    rej: null
   };
   return idx;
  }).catch(function(ex) {
   Module.fsThrownError = ex;
   console.error(ex);
   return -11;
  });
 });
}

function jsfetch_read_js(idx, toBuf, size) {
 var jsfo = Module.libavjsJSFetch.fetches[idx];
 return Asyncify.handleAsync(function() {
  return Promise.all([]).then(function() {
   if (jsfo.buf || jsfo.rej) {
    var fromBuf = jsfo.buf;
    var rej = jsfo.rej;
    if (fromBuf) {
     if (fromBuf.done) {
      return -541478725;
     }
     if (fromBuf.value.length > size) {
      Module.HEAPU8.set(fromBuf.value.subarray(0, size), toBuf);
      fromBuf.value = fromBuf.value.subarray(size);
      return size;
     }
     var ret = fromBuf.value.length;
     Module.HEAPU8.set(fromBuf.value, toBuf);
     jsfo.buf = jsfo.rej = null;
     jsfo.next = jsfo.reader.read().then(function(res) {
      jsfo.buf = res;
     }).catch(function(rej) {
      jsfo.rej = rej;
     });
     return ret;
    }
    Module.fsThrownError = rej;
    console.error(rej);
    return -11;
   }
   return Promise.race([ jsfo.next, new Promise(function(res) {
    setTimeout(res, 100);
   }) ]).then(function() {
    return -6;
   });
  });
 });
}

function jsfetch_close_js(idx) {
 var jsfo = Module.libavjsJSFetch.fetches[idx];
 if (jsfo) {
  try {
   jsfo.reader.cancel();
  } catch (ex) {}
  delete Module.libavjsJSFetch.fetches[idx];
 }
}

/** @constructor */ function ExitStatus(status) {
 this.name = "ExitStatus";
 this.message = `Program terminated with exit(${status})`;
 this.status = status;
}

var terminateWorker = worker => {
 worker.terminate();
 worker.onmessage = e => {};
};

var killThread = pthread_ptr => {
 var worker = PThread.pthreads[pthread_ptr];
 delete PThread.pthreads[pthread_ptr];
 terminateWorker(worker);
 __emscripten_thread_free_data(pthread_ptr);
 PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker), 1);
 worker.pthread_ptr = 0;
};

var cancelThread = pthread_ptr => {
 var worker = PThread.pthreads[pthread_ptr];
 worker.postMessage({
  "cmd": "cancel"
 });
};

var cleanupThread = pthread_ptr => {
 var worker = PThread.pthreads[pthread_ptr];
 PThread.returnWorkerToPool(worker);
};

var zeroMemory = (address, size) => {
 GROWABLE_HEAP_U8().fill(0, address, address + size);
 return address;
};

var spawnThread = threadParams => {
 var worker = PThread.getNewWorker();
 if (!worker) {
  return 6;
 }
 PThread.runningWorkers.push(worker);
 PThread.pthreads[threadParams.pthread_ptr] = worker;
 worker.pthread_ptr = threadParams.pthread_ptr;
 var msg = {
  "cmd": "run",
  "start_routine": threadParams.startRoutine,
  "arg": threadParams.arg,
  "pthread_ptr": threadParams.pthread_ptr
 };
 if (ENVIRONMENT_IS_NODE) {
  worker.unref();
 }
 worker.postMessage(msg, threadParams.transferList);
 return 0;
};

var runtimeKeepaliveCounter = 0;

var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;

var withStackSave = f => {
 var stack = stackSave();
 var ret = f();
 stackRestore(stack);
 return ret;
};

var convertI32PairToI53Checked = (lo, hi) => ((hi + 2097152) >>> 0 < 4194305 - !!lo) ? (lo >>> 0) + hi * 4294967296 : NaN;

/** @type{function(number, (number|boolean), ...number)} */ var proxyToMainThread = (funcIndex, emAsmAddr, sync, ...callArgs) => withStackSave(() => {
 var serializedNumCallArgs = callArgs.length;
 var args = stackAlloc(serializedNumCallArgs * 8);
 var b = ((args) >> 3);
 for (var i = 0; i < callArgs.length; i++) {
  var arg = callArgs[i];
  GROWABLE_HEAP_F64()[b + i] = arg;
 }
 return __emscripten_run_on_main_thread_js(funcIndex, emAsmAddr, serializedNumCallArgs, args, sync);
});

function _proc_exit(code) {
 if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(0, 0, 1, code);
 EXITSTATUS = code;
 if (!keepRuntimeAlive()) {
  PThread.terminateAllThreads();
  Module["onExit"]?.(code);
  ABORT = true;
 }
 quit_(code, new ExitStatus(code));
}

/** @param {boolean|number=} implicit */ var exitJS = (status, implicit) => {
 EXITSTATUS = status;
 if (ENVIRONMENT_IS_PTHREAD) {
  exitOnMainThread(status);
  throw "unwind";
 }
 _proc_exit(status);
};

var _exit = exitJS;

var handleException = e => {
 if (e instanceof ExitStatus || e == "unwind") {
  return EXITSTATUS;
 }
 quit_(1, e);
};

var PThread = {
 unusedWorkers: [],
 runningWorkers: [],
 tlsInitFunctions: [],
 pthreads: {},
 init() {
  if (ENVIRONMENT_IS_PTHREAD) {
   PThread.initWorker();
  } else {
   PThread.initMainThread();
  }
 },
 initMainThread() {
  var pthreadPoolSize = navigator.hardwareConcurrency;
  while (pthreadPoolSize--) {
   PThread.allocateUnusedWorker();
  }
  addOnPreRun(() => {
   addRunDependency("loading-workers");
   PThread.loadWasmModuleToAllWorkers(() => removeRunDependency("loading-workers"));
  });
 },
 initWorker() {
  PThread["receiveObjectTransfer"] = PThread.receiveObjectTransfer;
  PThread["threadInitTLS"] = PThread.threadInitTLS;
  PThread["setExitStatus"] = PThread.setExitStatus;
  noExitRuntime = false;
 },
 setExitStatus: status => EXITSTATUS = status,
 terminateAllThreads__deps: [ "$terminateWorker" ],
 terminateAllThreads: () => {
  for (var worker of PThread.runningWorkers) {
   terminateWorker(worker);
  }
  for (var worker of PThread.unusedWorkers) {
   terminateWorker(worker);
  }
  PThread.unusedWorkers = [];
  PThread.runningWorkers = [];
  PThread.pthreads = [];
 },
 returnWorkerToPool: worker => {
  var pthread_ptr = worker.pthread_ptr;
  delete PThread.pthreads[pthread_ptr];
  PThread.unusedWorkers.push(worker);
  PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker), 1);
  worker.pthread_ptr = 0;
  __emscripten_thread_free_data(pthread_ptr);
 },
 receiveObjectTransfer(data) {},
 threadInitTLS() {
  PThread.tlsInitFunctions.forEach(f => f());
 },
 loadWasmModuleToWorker: worker => new Promise(onFinishedLoading => {
  worker.onmessage = e => {
   var d = e["data"];
   var cmd = d["cmd"];
   if (d["targetThread"] && d["targetThread"] != _pthread_self()) {
    var targetWorker = PThread.pthreads[d["targetThread"]];
    if (targetWorker) {
     targetWorker.postMessage(d, d["transferList"]);
    } else {
     err(`Internal error! Worker sent a message "${cmd}" to target pthread ${d["targetThread"]}, but that thread no longer exists!`);
    }
    return;
   }
   if (cmd === "checkMailbox") {
    checkMailbox();
   } else if (cmd === "spawnThread") {
    spawnThread(d);
   } else if (cmd === "cleanupThread") {
    cleanupThread(d["thread"]);
   } else if (cmd === "killThread") {
    killThread(d["thread"]);
   } else if (cmd === "cancelThread") {
    cancelThread(d["thread"]);
   } else if (cmd === "loaded") {
    worker.loaded = true;
    if (ENVIRONMENT_IS_NODE && !worker.pthread_ptr) {
     worker.unref();
    }
    onFinishedLoading(worker);
   } else if (cmd === "alert") {
    alert(`Thread ${d["threadId"]}: ${d["text"]}`);
   } else if (d.target === "setimmediate") {
    worker.postMessage(d);
   } else if (cmd === "callHandler") {
    Module[d["handler"]](...d["args"]);
   } else if (cmd) {
    err(`worker sent an unknown command ${cmd}`);
   }
  };
  worker.onerror = e => {
   var message = "worker sent an error!";
   err(`${message} ${e.filename}:${e.lineno}: ${e.message}`);
   throw e;
  };
  if (ENVIRONMENT_IS_NODE) {
   worker.on("message", data => worker.onmessage({
    data: data
   }));
   worker.on("error", e => worker.onerror(e));
  }
  var handlers = [];
  var knownHandlers = [ "onExit", "onAbort", "print", "printErr" ];
  for (var handler of knownHandlers) {
   if (Module.hasOwnProperty(handler)) {
    handlers.push(handler);
   }
  }
  worker.postMessage({
   "cmd": "load",
   "handlers": handlers,
   "urlOrBlob": Module["mainScriptUrlOrBlob"],
   "wasmMemory": wasmMemory,
   "wasmModule": wasmModule
  });
 }),
 loadWasmModuleToAllWorkers(onMaybeReady) {
  if (ENVIRONMENT_IS_PTHREAD) {
   return onMaybeReady();
  }
  let pthreadPoolReady = Promise.all(PThread.unusedWorkers.map(PThread.loadWasmModuleToWorker));
  pthreadPoolReady.then(onMaybeReady);
 },
 allocateUnusedWorker() {
  var worker;
  if (!Module["locateFile"]) {
   worker = new Worker(new URL("libav-5.1.6.1.1-2e129ab-all.dbg.thr.worker.mjs", import.meta.url), {
    type: "module"
   });
  } else {
   var pthreadMainJs = locateFile("libav-5.1.6.1.1-2e129ab-all.dbg.thr.worker.mjs");
   worker = new Worker(pthreadMainJs, {
    type: "module"
   });
  }
  PThread.unusedWorkers.push(worker);
 },
 getNewWorker() {
  if (PThread.unusedWorkers.length == 0) {
   PThread.allocateUnusedWorker();
   PThread.loadWasmModuleToWorker(PThread.unusedWorkers[0]);
  }
  return PThread.unusedWorkers.pop();
 }
};

Module["PThread"] = PThread;

var callRuntimeCallbacks = callbacks => {
 while (callbacks.length > 0) {
  callbacks.shift()(Module);
 }
};

var establishStackSpace = () => {
 var pthread_ptr = _pthread_self();
 var stackHigh = GROWABLE_HEAP_U32()[(((pthread_ptr) + (52)) >> 2)];
 var stackSize = GROWABLE_HEAP_U32()[(((pthread_ptr) + (56)) >> 2)];
 var stackLow = stackHigh - stackSize;
 _emscripten_stack_set_limits(stackHigh, stackLow);
 stackRestore(stackHigh);
};

Module["establishStackSpace"] = establishStackSpace;

function exitOnMainThread(returnCode) {
 if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(1, 0, 0, returnCode);
 _exit(returnCode);
}

/**
     * @param {number} ptr
     * @param {string} type
     */ function getValue(ptr, type = "i8") {
 if (type.endsWith("*")) type = "*";
 switch (type) {
 case "i1":
  return GROWABLE_HEAP_I8()[ptr];

 case "i8":
  return GROWABLE_HEAP_I8()[ptr];

 case "i16":
  return GROWABLE_HEAP_I16()[((ptr) >> 1)];

 case "i32":
  return GROWABLE_HEAP_I32()[((ptr) >> 2)];

 case "i64":
  abort("to do getValue(i64) use WASM_BIGINT");

 case "float":
  return GROWABLE_HEAP_F32()[((ptr) >> 2)];

 case "double":
  return GROWABLE_HEAP_F64()[((ptr) >> 3)];

 case "*":
  return GROWABLE_HEAP_U32()[((ptr) >> 2)];

 default:
  abort(`invalid type for getValue: ${type}`);
 }
}

var invokeEntryPoint = (ptr, arg) => {
 var result = (a1 => dynCall_ii(ptr, a1))(arg);
 function finish(result) {
  if (keepRuntimeAlive()) {
   PThread.setExitStatus(result);
  } else {
   __emscripten_thread_exit(result);
  }
 }
 finish(result);
};

Module["invokeEntryPoint"] = invokeEntryPoint;

var noExitRuntime = Module["noExitRuntime"] || true;

var registerTLSInit = tlsInitFunc => PThread.tlsInitFunctions.push(tlsInitFunc);

/**
     * @param {number} ptr
     * @param {number} value
     * @param {string} type
     */ function setValue(ptr, value, type = "i8") {
 if (type.endsWith("*")) type = "*";
 switch (type) {
 case "i1":
  GROWABLE_HEAP_I8()[ptr] = value;
  break;

 case "i8":
  GROWABLE_HEAP_I8()[ptr] = value;
  break;

 case "i16":
  GROWABLE_HEAP_I16()[((ptr) >> 1)] = value;
  break;

 case "i32":
  GROWABLE_HEAP_I32()[((ptr) >> 2)] = value;
  break;

 case "i64":
  abort("to do setValue(i64) use WASM_BIGINT");

 case "float":
  GROWABLE_HEAP_F32()[((ptr) >> 2)] = value;
  break;

 case "double":
  GROWABLE_HEAP_F64()[((ptr) >> 3)] = value;
  break;

 case "*":
  GROWABLE_HEAP_U32()[((ptr) >> 2)] = value;
  break;

 default:
  abort(`invalid type for setValue: ${type}`);
 }
}

var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;

/**
     * Given a pointer 'idx' to a null-terminated UTF8-encoded string in the given
     * array that contains uint8 values, returns a copy of that string as a
     * Javascript String object.
     * heapOrArray is either a regular array, or a JavaScript typed array view.
     * @param {number} idx
     * @param {number=} maxBytesToRead
     * @return {string}
     */ var UTF8ArrayToString = (heapOrArray, idx, maxBytesToRead) => {
 var endIdx = idx + maxBytesToRead;
 var endPtr = idx;
 while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
 if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
  return UTF8Decoder.decode(heapOrArray.slice(idx, endPtr));
 }
 var str = "";
 while (idx < endPtr) {
  var u0 = heapOrArray[idx++];
  if (!(u0 & 128)) {
   str += String.fromCharCode(u0);
   continue;
  }
  var u1 = heapOrArray[idx++] & 63;
  if ((u0 & 224) == 192) {
   str += String.fromCharCode(((u0 & 31) << 6) | u1);
   continue;
  }
  var u2 = heapOrArray[idx++] & 63;
  if ((u0 & 240) == 224) {
   u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
  } else {
   u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
  }
  if (u0 < 65536) {
   str += String.fromCharCode(u0);
  } else {
   var ch = u0 - 65536;
   str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
  }
 }
 return str;
};

/**
     * Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the
     * emscripten HEAP, returns a copy of that string as a Javascript String object.
     *
     * @param {number} ptr
     * @param {number=} maxBytesToRead - An optional length that specifies the
     *   maximum number of bytes to read. You can omit this parameter to scan the
     *   string until the first 0 byte. If maxBytesToRead is passed, and the string
     *   at [ptr, ptr+maxBytesToReadr[ contains a null byte in the middle, then the
     *   string will cut short at that byte index (i.e. maxBytesToRead will not
     *   produce a string of exact length [ptr, ptr+maxBytesToRead[) N.B. mixing
     *   frequent uses of UTF8ToString() with and without maxBytesToRead may throw
     *   JS JIT optimizations off, so it is worth to consider consistently using one
     * @return {string}
     */ var UTF8ToString = (ptr, maxBytesToRead) => ptr ? UTF8ArrayToString(GROWABLE_HEAP_U8(), ptr, maxBytesToRead) : "";

var ___assert_fail = (condition, filename, line, func) => {
 abort(`Assertion failed: ${UTF8ToString(condition)}, at: ` + [ filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function" ]);
};

var ___emscripten_init_main_thread_js = tb => {
 __emscripten_thread_init(tb, /*is_main=*/ !ENVIRONMENT_IS_WORKER, /*is_runtime=*/ 1, /*can_block=*/ !ENVIRONMENT_IS_WEB, /*default_stacksize=*/ 1048576, /*start_profiling=*/ false);
 PThread.threadInitTLS();
};

var ___emscripten_thread_cleanup = thread => {
 if (!ENVIRONMENT_IS_PTHREAD) cleanupThread(thread); else postMessage({
  "cmd": "cleanupThread",
  "thread": thread
 });
};

function pthreadCreateProxied(pthread_ptr, attr, startRoutine, arg) {
 if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(2, 0, 1, pthread_ptr, attr, startRoutine, arg);
 return ___pthread_create_js(pthread_ptr, attr, startRoutine, arg);
}

var ___pthread_create_js = (pthread_ptr, attr, startRoutine, arg) => {
 if (typeof SharedArrayBuffer == "undefined") {
  err("Current environment does not support SharedArrayBuffer, pthreads are not available!");
  return 6;
 }
 var transferList = [];
 var error = 0;
 if (ENVIRONMENT_IS_PTHREAD && (transferList.length === 0 || error)) {
  return pthreadCreateProxied(pthread_ptr, attr, startRoutine, arg);
 }
 if (error) return error;
 var threadParams = {
  startRoutine: startRoutine,
  pthread_ptr: pthread_ptr,
  arg: arg,
  transferList: transferList
 };
 if (ENVIRONMENT_IS_PTHREAD) {
  threadParams.cmd = "spawnThread";
  postMessage(threadParams, transferList);
  return 0;
 }
 return spawnThread(threadParams);
};

var PATH = {
 isAbs: path => path.charAt(0) === "/",
 splitPath: filename => {
  var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
  return splitPathRe.exec(filename).slice(1);
 },
 normalizeArray: (parts, allowAboveRoot) => {
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
   var last = parts[i];
   if (last === ".") {
    parts.splice(i, 1);
   } else if (last === "..") {
    parts.splice(i, 1);
    up++;
   } else if (up) {
    parts.splice(i, 1);
    up--;
   }
  }
  if (allowAboveRoot) {
   for (;up; up--) {
    parts.unshift("..");
   }
  }
  return parts;
 },
 normalize: path => {
  var isAbsolute = PATH.isAbs(path), trailingSlash = path.substr(-1) === "/";
  path = PATH.normalizeArray(path.split("/").filter(p => !!p), !isAbsolute).join("/");
  if (!path && !isAbsolute) {
   path = ".";
  }
  if (path && trailingSlash) {
   path += "/";
  }
  return (isAbsolute ? "/" : "") + path;
 },
 dirname: path => {
  var result = PATH.splitPath(path), root = result[0], dir = result[1];
  if (!root && !dir) {
   return ".";
  }
  if (dir) {
   dir = dir.substr(0, dir.length - 1);
  }
  return root + dir;
 },
 basename: path => {
  if (path === "/") return "/";
  path = PATH.normalize(path);
  path = path.replace(/\/$/, "");
  var lastSlash = path.lastIndexOf("/");
  if (lastSlash === -1) return path;
  return path.substr(lastSlash + 1);
 },
 join: (...paths) => PATH.normalize(paths.join("/")),
 join2: (l, r) => PATH.normalize(l + "/" + r)
};

var initRandomFill = () => {
 if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
  return view => (view.set(crypto.getRandomValues(new Uint8Array(view.byteLength))), 
  view);
 } else if (ENVIRONMENT_IS_NODE) {
  try {
   var crypto_module = require("crypto");
   var randomFillSync = crypto_module["randomFillSync"];
   if (randomFillSync) {
    return view => crypto_module["randomFillSync"](view);
   }
   var randomBytes = crypto_module["randomBytes"];
   return view => (view.set(randomBytes(view.byteLength)),  view);
  } catch (e) {}
 }
 abort("initRandomDevice");
};

var randomFill = view => (randomFill = initRandomFill())(view);

var PATH_FS = {
 resolve: (...args) => {
  var resolvedPath = "", resolvedAbsolute = false;
  for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
   var path = (i >= 0) ? args[i] : FS.cwd();
   if (typeof path != "string") {
    throw new TypeError("Arguments to path.resolve must be strings");
   } else if (!path) {
    return "";
   }
   resolvedPath = path + "/" + resolvedPath;
   resolvedAbsolute = PATH.isAbs(path);
  }
  resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(p => !!p), !resolvedAbsolute).join("/");
  return ((resolvedAbsolute ? "/" : "") + resolvedPath) || ".";
 },
 relative: (from, to) => {
  from = PATH_FS.resolve(from).substr(1);
  to = PATH_FS.resolve(to).substr(1);
  function trim(arr) {
   var start = 0;
   for (;start < arr.length; start++) {
    if (arr[start] !== "") break;
   }
   var end = arr.length - 1;
   for (;end >= 0; end--) {
    if (arr[end] !== "") break;
   }
   if (start > end) return [];
   return arr.slice(start, end - start + 1);
  }
  var fromParts = trim(from.split("/"));
  var toParts = trim(to.split("/"));
  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
   if (fromParts[i] !== toParts[i]) {
    samePartsLength = i;
    break;
   }
  }
  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
   outputParts.push("..");
  }
  outputParts = outputParts.concat(toParts.slice(samePartsLength));
  return outputParts.join("/");
 }
};

var FS_stdin_getChar_buffer = [];

var lengthBytesUTF8 = str => {
 var len = 0;
 for (var i = 0; i < str.length; ++i) {
  var c = str.charCodeAt(i);
  if (c <= 127) {
   len++;
  } else if (c <= 2047) {
   len += 2;
  } else if (c >= 55296 && c <= 57343) {
   len += 4;
   ++i;
  } else {
   len += 3;
  }
 }
 return len;
};

var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
 if (!(maxBytesToWrite > 0)) return 0;
 var startIdx = outIdx;
 var endIdx = outIdx + maxBytesToWrite - 1;
 for (var i = 0; i < str.length; ++i) {
  var u = str.charCodeAt(i);
  if (u >= 55296 && u <= 57343) {
   var u1 = str.charCodeAt(++i);
   u = 65536 + ((u & 1023) << 10) | (u1 & 1023);
  }
  if (u <= 127) {
   if (outIdx >= endIdx) break;
   heap[outIdx++] = u;
  } else if (u <= 2047) {
   if (outIdx + 1 >= endIdx) break;
   heap[outIdx++] = 192 | (u >> 6);
   heap[outIdx++] = 128 | (u & 63);
  } else if (u <= 65535) {
   if (outIdx + 2 >= endIdx) break;
   heap[outIdx++] = 224 | (u >> 12);
   heap[outIdx++] = 128 | ((u >> 6) & 63);
   heap[outIdx++] = 128 | (u & 63);
  } else {
   if (outIdx + 3 >= endIdx) break;
   heap[outIdx++] = 240 | (u >> 18);
   heap[outIdx++] = 128 | ((u >> 12) & 63);
   heap[outIdx++] = 128 | ((u >> 6) & 63);
   heap[outIdx++] = 128 | (u & 63);
  }
 }
 heap[outIdx] = 0;
 return outIdx - startIdx;
};

/** @type {function(string, boolean=, number=)} */ function intArrayFromString(stringy, dontAddNull, length) {
 var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
 var u8array = new Array(len);
 var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
 if (dontAddNull) u8array.length = numBytesWritten;
 return u8array;
}

var FS_stdin_getChar = () => {
 if (!FS_stdin_getChar_buffer.length) {
  var result = null;
  if (ENVIRONMENT_IS_NODE) {
   var BUFSIZE = 256;
   var buf = Buffer.alloc(BUFSIZE);
   var bytesRead = 0;
   /** @suppress {missingProperties} */ var fd = process.stdin.fd;
   try {
    bytesRead = fs.readSync(fd, buf);
   } catch (e) {
    if (e.toString().includes("EOF")) bytesRead = 0; else throw e;
   }
   if (bytesRead > 0) {
    result = buf.slice(0, bytesRead).toString("utf-8");
   } else {
    result = null;
   }
  } else if (typeof window != "undefined" && typeof window.prompt == "function") {
   result = window.prompt("Input: ");
   if (result !== null) {
    result += "\n";
   }
  } else if (typeof readline == "function") {
   result = readline();
   if (result !== null) {
    result += "\n";
   }
  }
  if (!result) {
   return null;
  }
  FS_stdin_getChar_buffer = intArrayFromString(result, true);
 }
 return FS_stdin_getChar_buffer.shift();
};

var TTY = {
 ttys: [],
 init() {},
 shutdown() {},
 register(dev, ops) {
  TTY.ttys[dev] = {
   input: [],
   output: [],
   ops: ops
  };
  FS.registerDevice(dev, TTY.stream_ops);
 },
 stream_ops: {
  open(stream) {
   var tty = TTY.ttys[stream.node.rdev];
   if (!tty) {
    throw new FS.ErrnoError(43);
   }
   stream.tty = tty;
   stream.seekable = false;
  },
  close(stream) {
   stream.tty.ops.fsync(stream.tty);
  },
  fsync(stream) {
   stream.tty.ops.fsync(stream.tty);
  },
  read(stream, buffer, offset, length, pos) {
   /* ignored */ if (!stream.tty || !stream.tty.ops.get_char) {
    throw new FS.ErrnoError(60);
   }
   var bytesRead = 0;
   for (var i = 0; i < length; i++) {
    var result;
    try {
     result = stream.tty.ops.get_char(stream.tty);
    } catch (e) {
     throw new FS.ErrnoError(29);
    }
    if (result === undefined && bytesRead === 0) {
     throw new FS.ErrnoError(6);
    }
    if (result === null || result === undefined) break;
    bytesRead++;
    buffer[offset + i] = result;
   }
   if (bytesRead) {
    stream.node.timestamp = Date.now();
   }
   return bytesRead;
  },
  write(stream, buffer, offset, length, pos) {
   if (!stream.tty || !stream.tty.ops.put_char) {
    throw new FS.ErrnoError(60);
   }
   try {
    for (var i = 0; i < length; i++) {
     stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
    }
   } catch (e) {
    throw new FS.ErrnoError(29);
   }
   if (length) {
    stream.node.timestamp = Date.now();
   }
   return i;
  }
 },
 default_tty_ops: {
  get_char(tty) {
   return FS_stdin_getChar();
  },
  put_char(tty, val) {
   if (val === null || val === 10) {
    out(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   } else {
    if (val != 0) tty.output.push(val);
   }
  },
  fsync(tty) {
   if (tty.output && tty.output.length > 0) {
    out(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   }
  },
  ioctl_tcgets(tty) {
   return {
    c_iflag: 25856,
    c_oflag: 5,
    c_cflag: 191,
    c_lflag: 35387,
    c_cc: [ 3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
   };
  },
  ioctl_tcsets(tty, optional_actions, data) {
   return 0;
  },
  ioctl_tiocgwinsz(tty) {
   return [ 24, 80 ];
  }
 },
 default_tty1_ops: {
  put_char(tty, val) {
   if (val === null || val === 10) {
    err(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   } else {
    if (val != 0) tty.output.push(val);
   }
  },
  fsync(tty) {
   if (tty.output && tty.output.length > 0) {
    err(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   }
  }
 }
};

var alignMemory = (size, alignment) => Math.ceil(size / alignment) * alignment;

var mmapAlloc = size => {
 abort();
};

var MEMFS = {
 ops_table: null,
 mount(mount) {
  return MEMFS.createNode(null, "/", 16384 | 511, /* 0777 */ 0);
 },
 createNode(parent, name, mode, dev) {
  if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
   throw new FS.ErrnoError(63);
  }
  MEMFS.ops_table ||= {
   dir: {
    node: {
     getattr: MEMFS.node_ops.getattr,
     setattr: MEMFS.node_ops.setattr,
     lookup: MEMFS.node_ops.lookup,
     mknod: MEMFS.node_ops.mknod,
     rename: MEMFS.node_ops.rename,
     unlink: MEMFS.node_ops.unlink,
     rmdir: MEMFS.node_ops.rmdir,
     readdir: MEMFS.node_ops.readdir,
     symlink: MEMFS.node_ops.symlink
    },
    stream: {
     llseek: MEMFS.stream_ops.llseek
    }
   },
   file: {
    node: {
     getattr: MEMFS.node_ops.getattr,
     setattr: MEMFS.node_ops.setattr
    },
    stream: {
     llseek: MEMFS.stream_ops.llseek,
     read: MEMFS.stream_ops.read,
     write: MEMFS.stream_ops.write,
     allocate: MEMFS.stream_ops.allocate,
     mmap: MEMFS.stream_ops.mmap,
     msync: MEMFS.stream_ops.msync
    }
   },
   link: {
    node: {
     getattr: MEMFS.node_ops.getattr,
     setattr: MEMFS.node_ops.setattr,
     readlink: MEMFS.node_ops.readlink
    },
    stream: {}
   },
   chrdev: {
    node: {
     getattr: MEMFS.node_ops.getattr,
     setattr: MEMFS.node_ops.setattr
    },
    stream: FS.chrdev_stream_ops
   }
  };
  var node = FS.createNode(parent, name, mode, dev);
  if (FS.isDir(node.mode)) {
   node.node_ops = MEMFS.ops_table.dir.node;
   node.stream_ops = MEMFS.ops_table.dir.stream;
   node.contents = {};
  } else if (FS.isFile(node.mode)) {
   node.node_ops = MEMFS.ops_table.file.node;
   node.stream_ops = MEMFS.ops_table.file.stream;
   node.usedBytes = 0;
   node.contents = null;
  } else if (FS.isLink(node.mode)) {
   node.node_ops = MEMFS.ops_table.link.node;
   node.stream_ops = MEMFS.ops_table.link.stream;
  } else if (FS.isChrdev(node.mode)) {
   node.node_ops = MEMFS.ops_table.chrdev.node;
   node.stream_ops = MEMFS.ops_table.chrdev.stream;
  }
  node.timestamp = Date.now();
  if (parent) {
   parent.contents[name] = node;
   parent.timestamp = node.timestamp;
  }
  return node;
 },
 getFileDataAsTypedArray(node) {
  if (!node.contents) return new Uint8Array(0);
  if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
  return new Uint8Array(node.contents);
 },
 expandFileStorage(node, newCapacity) {
  var prevCapacity = node.contents ? node.contents.length : 0;
  if (prevCapacity >= newCapacity) return;
  var CAPACITY_DOUBLING_MAX = 1024 * 1024;
  newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125)) >>> 0);
  if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
  var oldContents = node.contents;
  node.contents = new Uint8Array(newCapacity);
  if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
 },
 resizeFileStorage(node, newSize) {
  if (node.usedBytes == newSize) return;
  if (newSize == 0) {
   node.contents = null;
   node.usedBytes = 0;
  } else {
   var oldContents = node.contents;
   node.contents = new Uint8Array(newSize);
   if (oldContents) {
    node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
   }
   node.usedBytes = newSize;
  }
 },
 node_ops: {
  getattr(node) {
   var attr = {};
   attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
   attr.ino = node.id;
   attr.mode = node.mode;
   attr.nlink = 1;
   attr.uid = 0;
   attr.gid = 0;
   attr.rdev = node.rdev;
   if (FS.isDir(node.mode)) {
    attr.size = 4096;
   } else if (FS.isFile(node.mode)) {
    attr.size = node.usedBytes;
   } else if (FS.isLink(node.mode)) {
    attr.size = node.link.length;
   } else {
    attr.size = 0;
   }
   attr.atime = new Date(node.timestamp);
   attr.mtime = new Date(node.timestamp);
   attr.ctime = new Date(node.timestamp);
   attr.blksize = 4096;
   attr.blocks = Math.ceil(attr.size / attr.blksize);
   return attr;
  },
  setattr(node, attr) {
   if (attr.mode !== undefined) {
    node.mode = attr.mode;
   }
   if (attr.timestamp !== undefined) {
    node.timestamp = attr.timestamp;
   }
   if (attr.size !== undefined) {
    MEMFS.resizeFileStorage(node, attr.size);
   }
  },
  lookup(parent, name) {
   throw FS.genericErrors[44];
  },
  mknod(parent, name, mode, dev) {
   return MEMFS.createNode(parent, name, mode, dev);
  },
  rename(old_node, new_dir, new_name) {
   if (FS.isDir(old_node.mode)) {
    var new_node;
    try {
     new_node = FS.lookupNode(new_dir, new_name);
    } catch (e) {}
    if (new_node) {
     for (var i in new_node.contents) {
      throw new FS.ErrnoError(55);
     }
    }
   }
   delete old_node.parent.contents[old_node.name];
   old_node.parent.timestamp = Date.now();
   old_node.name = new_name;
   new_dir.contents[new_name] = old_node;
   new_dir.timestamp = old_node.parent.timestamp;
   old_node.parent = new_dir;
  },
  unlink(parent, name) {
   delete parent.contents[name];
   parent.timestamp = Date.now();
  },
  rmdir(parent, name) {
   var node = FS.lookupNode(parent, name);
   for (var i in node.contents) {
    throw new FS.ErrnoError(55);
   }
   delete parent.contents[name];
   parent.timestamp = Date.now();
  },
  readdir(node) {
   var entries = [ ".", ".." ];
   for (var key of Object.keys(node.contents)) {
    entries.push(key);
   }
   return entries;
  },
  symlink(parent, newname, oldpath) {
   var node = MEMFS.createNode(parent, newname, 511 | /* 0777 */ 40960, 0);
   node.link = oldpath;
   return node;
  },
  readlink(node) {
   if (!FS.isLink(node.mode)) {
    throw new FS.ErrnoError(28);
   }
   return node.link;
  }
 },
 stream_ops: {
  read(stream, buffer, offset, length, position) {
   var contents = stream.node.contents;
   if (position >= stream.node.usedBytes) return 0;
   var size = Math.min(stream.node.usedBytes - position, length);
   if (size > 8 && contents.subarray) {
    buffer.set(contents.subarray(position, position + size), offset);
   } else {
    for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
   }
   return size;
  },
  write(stream, buffer, offset, length, position, canOwn) {
   if (buffer.buffer === GROWABLE_HEAP_I8().buffer) {
    canOwn = false;
   }
   if (!length) return 0;
   var node = stream.node;
   node.timestamp = Date.now();
   if (buffer.subarray && (!node.contents || node.contents.subarray)) {
    if (canOwn) {
     node.contents = buffer.subarray(offset, offset + length);
     node.usedBytes = length;
     return length;
    } else if (node.usedBytes === 0 && position === 0) {
     node.contents = buffer.slice(offset, offset + length);
     node.usedBytes = length;
     return length;
    } else if (position + length <= node.usedBytes) {
     node.contents.set(buffer.subarray(offset, offset + length), position);
     return length;
    }
   }
   MEMFS.expandFileStorage(node, position + length);
   if (node.contents.subarray && buffer.subarray) {
    node.contents.set(buffer.subarray(offset, offset + length), position);
   } else {
    for (var i = 0; i < length; i++) {
     node.contents[position + i] = buffer[offset + i];
    }
   }
   node.usedBytes = Math.max(node.usedBytes, position + length);
   return length;
  },
  llseek(stream, offset, whence) {
   var position = offset;
   if (whence === 1) {
    position += stream.position;
   } else if (whence === 2) {
    if (FS.isFile(stream.node.mode)) {
     position += stream.node.usedBytes;
    }
   }
   if (position < 0) {
    throw new FS.ErrnoError(28);
   }
   return position;
  },
  allocate(stream, offset, length) {
   MEMFS.expandFileStorage(stream.node, offset + length);
   stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
  },
  mmap(stream, length, position, prot, flags) {
   if (!FS.isFile(stream.node.mode)) {
    throw new FS.ErrnoError(43);
   }
   var ptr;
   var allocated;
   var contents = stream.node.contents;
   if (!(flags & 2) && contents.buffer === GROWABLE_HEAP_I8().buffer) {
    allocated = false;
    ptr = contents.byteOffset;
   } else {
    if (position > 0 || position + length < contents.length) {
     if (contents.subarray) {
      contents = contents.subarray(position, position + length);
     } else {
      contents = Array.prototype.slice.call(contents, position, position + length);
     }
    }
    allocated = true;
    ptr = mmapAlloc(length);
    if (!ptr) {
     throw new FS.ErrnoError(48);
    }
    GROWABLE_HEAP_I8().set(contents, ptr);
   }
   return {
    ptr: ptr,
    allocated: allocated
   };
  },
  msync(stream, buffer, offset, length, mmapFlags) {
   MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
   return 0;
  }
 }
};

/** @param {boolean=} noRunDep */ var asyncLoad = (url, onload, onerror, noRunDep) => {
 var dep = !noRunDep ? getUniqueRunDependency(`al ${url}`) : "";
 readAsync(url, arrayBuffer => {
  onload(new Uint8Array(arrayBuffer));
  if (dep) removeRunDependency(dep);
 }, event => {
  if (onerror) {
   onerror();
  } else {
   throw `Loading data file "${url}" failed.`;
  }
 });
 if (dep) addRunDependency(dep);
};

var FS_createDataFile = (parent, name, fileData, canRead, canWrite, canOwn) => {
 FS.createDataFile(parent, name, fileData, canRead, canWrite, canOwn);
};

var preloadPlugins = Module["preloadPlugins"] || [];

var FS_handledByPreloadPlugin = (byteArray, fullname, finish, onerror) => {
 if (typeof Browser != "undefined") Browser.init();
 var handled = false;
 preloadPlugins.forEach(plugin => {
  if (handled) return;
  if (plugin["canHandle"](fullname)) {
   plugin["handle"](byteArray, fullname, finish, onerror);
   handled = true;
  }
 });
 return handled;
};

var FS_createPreloadedFile = (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
 var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
 var dep = getUniqueRunDependency(`cp ${fullname}`);
 function processData(byteArray) {
  function finish(byteArray) {
   preFinish?.();
   if (!dontCreateFile) {
    FS_createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
   }
   onload?.();
   removeRunDependency(dep);
  }
  if (FS_handledByPreloadPlugin(byteArray, fullname, finish, () => {
   onerror?.();
   removeRunDependency(dep);
  })) {
   return;
  }
  finish(byteArray);
 }
 addRunDependency(dep);
 if (typeof url == "string") {
  asyncLoad(url, processData, onerror);
 } else {
  processData(url);
 }
};

var FS_modeStringToFlags = str => {
 var flagModes = {
  "r": 0,
  "r+": 2,
  "w": 512 | 64 | 1,
  "w+": 512 | 64 | 2,
  "a": 1024 | 64 | 1,
  "a+": 1024 | 64 | 2
 };
 var flags = flagModes[str];
 if (typeof flags == "undefined") {
  throw new Error(`Unknown file open mode: ${str}`);
 }
 return flags;
};

var FS_getMode = (canRead, canWrite) => {
 var mode = 0;
 if (canRead) mode |= 292 | 73;
 if (canWrite) mode |= 146;
 return mode;
};

var FS = {
 root: null,
 mounts: [],
 devices: {},
 streams: [],
 nextInode: 1,
 nameTable: null,
 currentPath: "/",
 initialized: false,
 ignorePermissions: true,
 ErrnoError: class {
  constructor(errno) {
   this.name = "ErrnoError";
   this.errno = errno;
  }
 },
 genericErrors: {},
 filesystems: null,
 syncFSRequests: 0,
 FSStream: class {
  constructor() {
   this.shared = {};
  }
  get object() {
   return this.node;
  }
  set object(val) {
   this.node = val;
  }
  get isRead() {
   return (this.flags & 2097155) !== 1;
  }
  get isWrite() {
   return (this.flags & 2097155) !== 0;
  }
  get isAppend() {
   return (this.flags & 1024);
  }
  get flags() {
   return this.shared.flags;
  }
  set flags(val) {
   this.shared.flags = val;
  }
  get position() {
   return this.shared.position;
  }
  set position(val) {
   this.shared.position = val;
  }
 },
 FSNode: class {
  constructor(parent, name, mode, rdev) {
   if (!parent) {
    parent = this;
   }
   this.parent = parent;
   this.mount = parent.mount;
   this.mounted = null;
   this.id = FS.nextInode++;
   this.name = name;
   this.mode = mode;
   this.node_ops = {};
   this.stream_ops = {};
   this.rdev = rdev;
   this.readMode = 292 | /*292*/ 73;
   /*73*/ this.writeMode = 146;
  }
  /*146*/ get read() {
   return (this.mode & this.readMode) === this.readMode;
  }
  set read(val) {
   val ? this.mode |= this.readMode : this.mode &= ~this.readMode;
  }
  get write() {
   return (this.mode & this.writeMode) === this.writeMode;
  }
  set write(val) {
   val ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
  }
  get isFolder() {
   return FS.isDir(this.mode);
  }
  get isDevice() {
   return FS.isChrdev(this.mode);
  }
 },
 lookupPath(path, opts = {}) {
  path = PATH_FS.resolve(path);
  if (!path) return {
   path: "",
   node: null
  };
  var defaults = {
   follow_mount: true,
   recurse_count: 0
  };
  opts = Object.assign(defaults, opts);
  if (opts.recurse_count > 8) {
   throw new FS.ErrnoError(32);
  }
  var parts = path.split("/").filter(p => !!p);
  var current = FS.root;
  var current_path = "/";
  for (var i = 0; i < parts.length; i++) {
   var islast = (i === parts.length - 1);
   if (islast && opts.parent) {
    break;
   }
   current = FS.lookupNode(current, parts[i]);
   current_path = PATH.join2(current_path, parts[i]);
   if (FS.isMountpoint(current)) {
    if (!islast || (islast && opts.follow_mount)) {
     current = current.mounted.root;
    }
   }
   if (!islast || opts.follow) {
    var count = 0;
    while (FS.isLink(current.mode)) {
     var link = FS.readlink(current_path);
     current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
     var lookup = FS.lookupPath(current_path, {
      recurse_count: opts.recurse_count + 1
     });
     current = lookup.node;
     if (count++ > 40) {
      throw new FS.ErrnoError(32);
     }
    }
   }
  }
  return {
   path: current_path,
   node: current
  };
 },
 getPath(node) {
  var path;
  while (true) {
   if (FS.isRoot(node)) {
    var mount = node.mount.mountpoint;
    if (!path) return mount;
    return mount[mount.length - 1] !== "/" ? `${mount}/${path}` : mount + path;
   }
   path = path ? `${node.name}/${path}` : node.name;
   node = node.parent;
  }
 },
 hashName(parentid, name) {
  var hash = 0;
  for (var i = 0; i < name.length; i++) {
   hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
  }
  return ((parentid + hash) >>> 0) % FS.nameTable.length;
 },
 hashAddNode(node) {
  var hash = FS.hashName(node.parent.id, node.name);
  node.name_next = FS.nameTable[hash];
  FS.nameTable[hash] = node;
 },
 hashRemoveNode(node) {
  var hash = FS.hashName(node.parent.id, node.name);
  if (FS.nameTable[hash] === node) {
   FS.nameTable[hash] = node.name_next;
  } else {
   var current = FS.nameTable[hash];
   while (current) {
    if (current.name_next === node) {
     current.name_next = node.name_next;
     break;
    }
    current = current.name_next;
   }
  }
 },
 lookupNode(parent, name) {
  var errCode = FS.mayLookup(parent);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  var hash = FS.hashName(parent.id, name);
  for (var node = FS.nameTable[hash]; node; node = node.name_next) {
   var nodeName = node.name;
   if (node.parent.id === parent.id && nodeName === name) {
    return node;
   }
  }
  return FS.lookup(parent, name);
 },
 createNode(parent, name, mode, rdev) {
  var node = new FS.FSNode(parent, name, mode, rdev);
  FS.hashAddNode(node);
  return node;
 },
 destroyNode(node) {
  FS.hashRemoveNode(node);
 },
 isRoot(node) {
  return node === node.parent;
 },
 isMountpoint(node) {
  return !!node.mounted;
 },
 isFile(mode) {
  return (mode & 61440) === 32768;
 },
 isDir(mode) {
  return (mode & 61440) === 16384;
 },
 isLink(mode) {
  return (mode & 61440) === 40960;
 },
 isChrdev(mode) {
  return (mode & 61440) === 8192;
 },
 isBlkdev(mode) {
  return (mode & 61440) === 24576;
 },
 isFIFO(mode) {
  return (mode & 61440) === 4096;
 },
 isSocket(mode) {
  return (mode & 49152) === 49152;
 },
 flagsToPermissionString(flag) {
  var perms = [ "r", "w", "rw" ][flag & 3];
  if ((flag & 512)) {
   perms += "w";
  }
  return perms;
 },
 nodePermissions(node, perms) {
  if (FS.ignorePermissions) {
   return 0;
  }
  if (perms.includes("r") && !(node.mode & 292)) {
   return 2;
  } else if (perms.includes("w") && !(node.mode & 146)) {
   return 2;
  } else if (perms.includes("x") && !(node.mode & 73)) {
   return 2;
  }
  return 0;
 },
 mayLookup(dir) {
  if (!FS.isDir(dir.mode)) return 54;
  var errCode = FS.nodePermissions(dir, "x");
  if (errCode) return errCode;
  if (!dir.node_ops.lookup) return 2;
  return 0;
 },
 mayCreate(dir, name) {
  try {
   var node = FS.lookupNode(dir, name);
   return 20;
  } catch (e) {}
  return FS.nodePermissions(dir, "wx");
 },
 mayDelete(dir, name, isdir) {
  var node;
  try {
   node = FS.lookupNode(dir, name);
  } catch (e) {
   return e.errno;
  }
  var errCode = FS.nodePermissions(dir, "wx");
  if (errCode) {
   return errCode;
  }
  if (isdir) {
   if (!FS.isDir(node.mode)) {
    return 54;
   }
   if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
    return 10;
   }
  } else {
   if (FS.isDir(node.mode)) {
    return 31;
   }
  }
  return 0;
 },
 mayOpen(node, flags) {
  if (!node) {
   return 44;
  }
  if (FS.isLink(node.mode)) {
   return 32;
  } else if (FS.isDir(node.mode)) {
   if (FS.flagsToPermissionString(flags) !== "r" ||  (flags & 512)) {
    return 31;
   }
  }
  return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
 },
 MAX_OPEN_FDS: 4096,
 nextfd() {
  for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
   if (!FS.streams[fd]) {
    return fd;
   }
  }
  throw new FS.ErrnoError(33);
 },
 getStreamChecked(fd) {
  var stream = FS.getStream(fd);
  if (!stream) {
   throw new FS.ErrnoError(8);
  }
  return stream;
 },
 getStream: fd => FS.streams[fd],
 createStream(stream, fd = -1) {
  stream = Object.assign(new FS.FSStream, stream);
  if (fd == -1) {
   fd = FS.nextfd();
  }
  stream.fd = fd;
  FS.streams[fd] = stream;
  return stream;
 },
 closeStream(fd) {
  FS.streams[fd] = null;
 },
 dupStream(origStream, fd = -1) {
  var stream = FS.createStream(origStream, fd);
  stream.stream_ops?.dup?.(stream);
  return stream;
 },
 chrdev_stream_ops: {
  open(stream) {
   var device = FS.getDevice(stream.node.rdev);
   stream.stream_ops = device.stream_ops;
   stream.stream_ops.open?.(stream);
  },
  llseek() {
   throw new FS.ErrnoError(70);
  }
 },
 major: dev => ((dev) >> 8),
 minor: dev => ((dev) & 255),
 makedev: (ma, mi) => ((ma) << 8 | (mi)),
 registerDevice(dev, ops) {
  FS.devices[dev] = {
   stream_ops: ops
  };
 },
 getDevice: dev => FS.devices[dev],
 getMounts(mount) {
  var mounts = [];
  var check = [ mount ];
  while (check.length) {
   var m = check.pop();
   mounts.push(m);
   check.push(...m.mounts);
  }
  return mounts;
 },
 syncfs(populate, callback) {
  if (typeof populate == "function") {
   callback = populate;
   populate = false;
  }
  FS.syncFSRequests++;
  if (FS.syncFSRequests > 1) {
   err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
  }
  var mounts = FS.getMounts(FS.root.mount);
  var completed = 0;
  function doCallback(errCode) {
   FS.syncFSRequests--;
   return callback(errCode);
  }
  function done(errCode) {
   if (errCode) {
    if (!done.errored) {
     done.errored = true;
     return doCallback(errCode);
    }
    return;
   }
   if (++completed >= mounts.length) {
    doCallback(null);
   }
  }
  mounts.forEach(mount => {
   if (!mount.type.syncfs) {
    return done(null);
   }
   mount.type.syncfs(mount, populate, done);
  });
 },
 mount(type, opts, mountpoint) {
  var root = mountpoint === "/";
  var pseudo = !mountpoint;
  var node;
  if (root && FS.root) {
   throw new FS.ErrnoError(10);
  } else if (!root && !pseudo) {
   var lookup = FS.lookupPath(mountpoint, {
    follow_mount: false
   });
   mountpoint = lookup.path;
   node = lookup.node;
   if (FS.isMountpoint(node)) {
    throw new FS.ErrnoError(10);
   }
   if (!FS.isDir(node.mode)) {
    throw new FS.ErrnoError(54);
   }
  }
  var mount = {
   type: type,
   opts: opts,
   mountpoint: mountpoint,
   mounts: []
  };
  var mountRoot = type.mount(mount);
  mountRoot.mount = mount;
  mount.root = mountRoot;
  if (root) {
   FS.root = mountRoot;
  } else if (node) {
   node.mounted = mount;
   if (node.mount) {
    node.mount.mounts.push(mount);
   }
  }
  return mountRoot;
 },
 unmount(mountpoint) {
  var lookup = FS.lookupPath(mountpoint, {
   follow_mount: false
  });
  if (!FS.isMountpoint(lookup.node)) {
   throw new FS.ErrnoError(28);
  }
  var node = lookup.node;
  var mount = node.mounted;
  var mounts = FS.getMounts(mount);
  Object.keys(FS.nameTable).forEach(hash => {
   var current = FS.nameTable[hash];
   while (current) {
    var next = current.name_next;
    if (mounts.includes(current.mount)) {
     FS.destroyNode(current);
    }
    current = next;
   }
  });
  node.mounted = null;
  var idx = node.mount.mounts.indexOf(mount);
  node.mount.mounts.splice(idx, 1);
 },
 lookup(parent, name) {
  return parent.node_ops.lookup(parent, name);
 },
 mknod(path, mode, dev) {
  var lookup = FS.lookupPath(path, {
   parent: true
  });
  var parent = lookup.node;
  var name = PATH.basename(path);
  if (!name || name === "." || name === "..") {
   throw new FS.ErrnoError(28);
  }
  var errCode = FS.mayCreate(parent, name);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.mknod) {
   throw new FS.ErrnoError(63);
  }
  return parent.node_ops.mknod(parent, name, mode, dev);
 },
 create(path, mode) {
  mode = mode !== undefined ? mode : 438;
  /* 0666 */ mode &= 4095;
  mode |= 32768;
  return FS.mknod(path, mode, 0);
 },
 mkdir(path, mode) {
  mode = mode !== undefined ? mode : 511;
  /* 0777 */ mode &= 511 | 512;
  mode |= 16384;
  return FS.mknod(path, mode, 0);
 },
 mkdirTree(path, mode) {
  var dirs = path.split("/");
  var d = "";
  for (var i = 0; i < dirs.length; ++i) {
   if (!dirs[i]) continue;
   d += "/" + dirs[i];
   try {
    FS.mkdir(d, mode);
   } catch (e) {
    if (e.errno != 20) throw e;
   }
  }
 },
 mkdev(path, mode, dev) {
  if (typeof dev == "undefined") {
   dev = mode;
   mode = 438;
  }
  /* 0666 */ mode |= 8192;
  return FS.mknod(path, mode, dev);
 },
 symlink(oldpath, newpath) {
  if (!PATH_FS.resolve(oldpath)) {
   throw new FS.ErrnoError(44);
  }
  var lookup = FS.lookupPath(newpath, {
   parent: true
  });
  var parent = lookup.node;
  if (!parent) {
   throw new FS.ErrnoError(44);
  }
  var newname = PATH.basename(newpath);
  var errCode = FS.mayCreate(parent, newname);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.symlink) {
   throw new FS.ErrnoError(63);
  }
  return parent.node_ops.symlink(parent, newname, oldpath);
 },
 rename(old_path, new_path) {
  var old_dirname = PATH.dirname(old_path);
  var new_dirname = PATH.dirname(new_path);
  var old_name = PATH.basename(old_path);
  var new_name = PATH.basename(new_path);
  var lookup, old_dir, new_dir;
  lookup = FS.lookupPath(old_path, {
   parent: true
  });
  old_dir = lookup.node;
  lookup = FS.lookupPath(new_path, {
   parent: true
  });
  new_dir = lookup.node;
  if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
  if (old_dir.mount !== new_dir.mount) {
   throw new FS.ErrnoError(75);
  }
  var old_node = FS.lookupNode(old_dir, old_name);
  var relative = PATH_FS.relative(old_path, new_dirname);
  if (relative.charAt(0) !== ".") {
   throw new FS.ErrnoError(28);
  }
  relative = PATH_FS.relative(new_path, old_dirname);
  if (relative.charAt(0) !== ".") {
   throw new FS.ErrnoError(55);
  }
  var new_node;
  try {
   new_node = FS.lookupNode(new_dir, new_name);
  } catch (e) {}
  if (old_node === new_node) {
   return;
  }
  var isdir = FS.isDir(old_node.mode);
  var errCode = FS.mayDelete(old_dir, old_name, isdir);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!old_dir.node_ops.rename) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
   throw new FS.ErrnoError(10);
  }
  if (new_dir !== old_dir) {
   errCode = FS.nodePermissions(old_dir, "w");
   if (errCode) {
    throw new FS.ErrnoError(errCode);
   }
  }
  FS.hashRemoveNode(old_node);
  try {
   old_dir.node_ops.rename(old_node, new_dir, new_name);
  } catch (e) {
   throw e;
  } finally {
   FS.hashAddNode(old_node);
  }
 },
 rmdir(path) {
  var lookup = FS.lookupPath(path, {
   parent: true
  });
  var parent = lookup.node;
  var name = PATH.basename(path);
  var node = FS.lookupNode(parent, name);
  var errCode = FS.mayDelete(parent, name, true);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.rmdir) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isMountpoint(node)) {
   throw new FS.ErrnoError(10);
  }
  parent.node_ops.rmdir(parent, name);
  FS.destroyNode(node);
 },
 readdir(path) {
  var lookup = FS.lookupPath(path, {
   follow: true
  });
  var node = lookup.node;
  if (!node.node_ops.readdir) {
   throw new FS.ErrnoError(54);
  }
  return node.node_ops.readdir(node);
 },
 unlink(path) {
  var lookup = FS.lookupPath(path, {
   parent: true
  });
  var parent = lookup.node;
  if (!parent) {
   throw new FS.ErrnoError(44);
  }
  var name = PATH.basename(path);
  var node = FS.lookupNode(parent, name);
  var errCode = FS.mayDelete(parent, name, false);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.unlink) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isMountpoint(node)) {
   throw new FS.ErrnoError(10);
  }
  parent.node_ops.unlink(parent, name);
  FS.destroyNode(node);
 },
 readlink(path) {
  var lookup = FS.lookupPath(path);
  var link = lookup.node;
  if (!link) {
   throw new FS.ErrnoError(44);
  }
  if (!link.node_ops.readlink) {
   throw new FS.ErrnoError(28);
  }
  return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
 },
 stat(path, dontFollow) {
  var lookup = FS.lookupPath(path, {
   follow: !dontFollow
  });
  var node = lookup.node;
  if (!node) {
   throw new FS.ErrnoError(44);
  }
  if (!node.node_ops.getattr) {
   throw new FS.ErrnoError(63);
  }
  return node.node_ops.getattr(node);
 },
 lstat(path) {
  return FS.stat(path, true);
 },
 chmod(path, mode, dontFollow) {
  var node;
  if (typeof path == "string") {
   var lookup = FS.lookupPath(path, {
    follow: !dontFollow
   });
   node = lookup.node;
  } else {
   node = path;
  }
  if (!node.node_ops.setattr) {
   throw new FS.ErrnoError(63);
  }
  node.node_ops.setattr(node, {
   mode: (mode & 4095) | (node.mode & ~4095),
   timestamp: Date.now()
  });
 },
 lchmod(path, mode) {
  FS.chmod(path, mode, true);
 },
 fchmod(fd, mode) {
  var stream = FS.getStreamChecked(fd);
  FS.chmod(stream.node, mode);
 },
 chown(path, uid, gid, dontFollow) {
  var node;
  if (typeof path == "string") {
   var lookup = FS.lookupPath(path, {
    follow: !dontFollow
   });
   node = lookup.node;
  } else {
   node = path;
  }
  if (!node.node_ops.setattr) {
   throw new FS.ErrnoError(63);
  }
  node.node_ops.setattr(node, {
   timestamp: Date.now()
  });
 },
 lchown(path, uid, gid) {
  FS.chown(path, uid, gid, true);
 },
 fchown(fd, uid, gid) {
  var stream = FS.getStreamChecked(fd);
  FS.chown(stream.node, uid, gid);
 },
 truncate(path, len) {
  if (len < 0) {
   throw new FS.ErrnoError(28);
  }
  var node;
  if (typeof path == "string") {
   var lookup = FS.lookupPath(path, {
    follow: true
   });
   node = lookup.node;
  } else {
   node = path;
  }
  if (!node.node_ops.setattr) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isDir(node.mode)) {
   throw new FS.ErrnoError(31);
  }
  if (!FS.isFile(node.mode)) {
   throw new FS.ErrnoError(28);
  }
  var errCode = FS.nodePermissions(node, "w");
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  node.node_ops.setattr(node, {
   size: len,
   timestamp: Date.now()
  });
 },
 ftruncate(fd, len) {
  var stream = FS.getStreamChecked(fd);
  if ((stream.flags & 2097155) === 0) {
   throw new FS.ErrnoError(28);
  }
  FS.truncate(stream.node, len);
 },
 utime(path, atime, mtime) {
  var lookup = FS.lookupPath(path, {
   follow: true
  });
  var node = lookup.node;
  node.node_ops.setattr(node, {
   timestamp: Math.max(atime, mtime)
  });
 },
 open(path, flags, mode) {
  if (path === "") {
   throw new FS.ErrnoError(44);
  }
  flags = typeof flags == "string" ? FS_modeStringToFlags(flags) : flags;
  mode = typeof mode == "undefined" ? 438 : /* 0666 */ mode;
  if ((flags & 64)) {
   mode = (mode & 4095) | 32768;
  } else {
   mode = 0;
  }
  var node;
  if (typeof path == "object") {
   node = path;
  } else {
   path = PATH.normalize(path);
   try {
    var lookup = FS.lookupPath(path, {
     follow: !(flags & 131072)
    });
    node = lookup.node;
   } catch (e) {}
  }
  var created = false;
  if ((flags & 64)) {
   if (node) {
    if ((flags & 128)) {
     throw new FS.ErrnoError(20);
    }
   } else {
    node = FS.mknod(path, mode, 0);
    created = true;
   }
  }
  if (!node) {
   throw new FS.ErrnoError(44);
  }
  if (FS.isChrdev(node.mode)) {
   flags &= ~512;
  }
  if ((flags & 65536) && !FS.isDir(node.mode)) {
   throw new FS.ErrnoError(54);
  }
  if (!created) {
   var errCode = FS.mayOpen(node, flags);
   if (errCode) {
    throw new FS.ErrnoError(errCode);
   }
  }
  if ((flags & 512) && !created) {
   FS.truncate(node, 0);
  }
  flags &= ~(128 | 512 | 131072);
  var stream = FS.createStream({
   node: node,
   path: FS.getPath(node),
   flags: flags,
   seekable: true,
   position: 0,
   stream_ops: node.stream_ops,
   ungotten: [],
   error: false
  });
  if (stream.stream_ops.open) {
   stream.stream_ops.open(stream);
  }
  if (Module["logReadFiles"] && !(flags & 1)) {
   if (!FS.readFiles) FS.readFiles = {};
   if (!(path in FS.readFiles)) {
    FS.readFiles[path] = 1;
   }
  }
  return stream;
 },
 close(stream) {
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if (stream.getdents) stream.getdents = null;
  try {
   if (stream.stream_ops.close) {
    stream.stream_ops.close(stream);
   }
  } catch (e) {
   throw e;
  } finally {
   FS.closeStream(stream.fd);
  }
  stream.fd = null;
 },
 isClosed(stream) {
  return stream.fd === null;
 },
 llseek(stream, offset, whence) {
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if (!stream.seekable || !stream.stream_ops.llseek) {
   throw new FS.ErrnoError(70);
  }
  if (whence != 0 && whence != 1 && whence != 2) {
   throw new FS.ErrnoError(28);
  }
  stream.position = stream.stream_ops.llseek(stream, offset, whence);
  stream.ungotten = [];
  return stream.position;
 },
 read(stream, buffer, offset, length, position) {
  if (length < 0 || position < 0) {
   throw new FS.ErrnoError(28);
  }
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if ((stream.flags & 2097155) === 1) {
   throw new FS.ErrnoError(8);
  }
  if (FS.isDir(stream.node.mode)) {
   throw new FS.ErrnoError(31);
  }
  if (!stream.stream_ops.read) {
   throw new FS.ErrnoError(28);
  }
  var seeking = typeof position != "undefined";
  if (!seeking) {
   position = stream.position;
  } else if (!stream.seekable) {
   throw new FS.ErrnoError(70);
  }
  var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
  if (!seeking) stream.position += bytesRead;
  return bytesRead;
 },
 write(stream, buffer, offset, length, position, canOwn) {
  if (length < 0 || position < 0) {
   throw new FS.ErrnoError(28);
  }
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if ((stream.flags & 2097155) === 0) {
   throw new FS.ErrnoError(8);
  }
  if (FS.isDir(stream.node.mode)) {
   throw new FS.ErrnoError(31);
  }
  if (!stream.stream_ops.write) {
   throw new FS.ErrnoError(28);
  }
  if (stream.seekable && stream.flags & 1024) {
   FS.llseek(stream, 0, 2);
  }
  var seeking = typeof position != "undefined";
  if (!seeking) {
   position = stream.position;
  } else if (!stream.seekable) {
   throw new FS.ErrnoError(70);
  }
  var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
  if (!seeking) stream.position += bytesWritten;
  return bytesWritten;
 },
 allocate(stream, offset, length) {
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if (offset < 0 || length <= 0) {
   throw new FS.ErrnoError(28);
  }
  if ((stream.flags & 2097155) === 0) {
   throw new FS.ErrnoError(8);
  }
  if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
   throw new FS.ErrnoError(43);
  }
  if (!stream.stream_ops.allocate) {
   throw new FS.ErrnoError(138);
  }
  stream.stream_ops.allocate(stream, offset, length);
 },
 mmap(stream, length, position, prot, flags) {
  if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
   throw new FS.ErrnoError(2);
  }
  if ((stream.flags & 2097155) === 1) {
   throw new FS.ErrnoError(2);
  }
  if (!stream.stream_ops.mmap) {
   throw new FS.ErrnoError(43);
  }
  return stream.stream_ops.mmap(stream, length, position, prot, flags);
 },
 msync(stream, buffer, offset, length, mmapFlags) {
  if (!stream.stream_ops.msync) {
   return 0;
  }
  return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
 },
 ioctl(stream, cmd, arg) {
  if (!stream.stream_ops.ioctl) {
   throw new FS.ErrnoError(59);
  }
  return stream.stream_ops.ioctl(stream, cmd, arg);
 },
 readFile(path, opts = {}) {
  opts.flags = opts.flags || 0;
  opts.encoding = opts.encoding || "binary";
  if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
   throw new Error(`Invalid encoding type "${opts.encoding}"`);
  }
  var ret;
  var stream = FS.open(path, opts.flags);
  var stat = FS.stat(path);
  var length = stat.size;
  var buf = new Uint8Array(length);
  FS.read(stream, buf, 0, length, 0);
  if (opts.encoding === "utf8") {
   ret = UTF8ArrayToString(buf, 0);
  } else if (opts.encoding === "binary") {
   ret = buf;
  }
  FS.close(stream);
  return ret;
 },
 writeFile(path, data, opts = {}) {
  opts.flags = opts.flags || 577;
  var stream = FS.open(path, opts.flags, opts.mode);
  if (typeof data == "string") {
   var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
   var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
   FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
  } else if (ArrayBuffer.isView(data)) {
   FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
  } else {
   throw new Error("Unsupported data type");
  }
  FS.close(stream);
 },
 cwd: () => FS.currentPath,
 chdir(path) {
  var lookup = FS.lookupPath(path, {
   follow: true
  });
  if (lookup.node === null) {
   throw new FS.ErrnoError(44);
  }
  if (!FS.isDir(lookup.node.mode)) {
   throw new FS.ErrnoError(54);
  }
  var errCode = FS.nodePermissions(lookup.node, "x");
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  FS.currentPath = lookup.path;
 },
 createDefaultDirectories() {
  FS.mkdir("/tmp");
  FS.mkdir("/home");
  FS.mkdir("/home/web_user");
 },
 createDefaultDevices() {
  FS.mkdir("/dev");
  FS.registerDevice(FS.makedev(1, 3), {
   read: () => 0,
   write: (stream, buffer, offset, length, pos) => length
  });
  FS.mkdev("/dev/null", FS.makedev(1, 3));
  TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
  TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
  FS.mkdev("/dev/tty", FS.makedev(5, 0));
  FS.mkdev("/dev/tty1", FS.makedev(6, 0));
  var randomBuffer = new Uint8Array(1024), randomLeft = 0;
  var randomByte = () => {
   if (randomLeft === 0) {
    randomLeft = randomFill(randomBuffer).byteLength;
   }
   return randomBuffer[--randomLeft];
  };
  FS.createDevice("/dev", "random", randomByte);
  FS.createDevice("/dev", "urandom", randomByte);
  FS.mkdir("/dev/shm");
  FS.mkdir("/dev/shm/tmp");
 },
 createSpecialDirectories() {
  FS.mkdir("/proc");
  var proc_self = FS.mkdir("/proc/self");
  FS.mkdir("/proc/self/fd");
  FS.mount({
   mount() {
    var node = FS.createNode(proc_self, "fd", 16384 | 511, /* 0777 */ 73);
    node.node_ops = {
     lookup(parent, name) {
      var fd = +name;
      var stream = FS.getStreamChecked(fd);
      var ret = {
       parent: null,
       mount: {
        mountpoint: "fake"
       },
       node_ops: {
        readlink: () => stream.path
       }
      };
      ret.parent = ret;
      return ret;
     }
    };
    return node;
   }
  }, {}, "/proc/self/fd");
 },
 createStandardStreams() {
  if (Module["stdin"]) {
   FS.createDevice("/dev", "stdin", Module["stdin"]);
  } else {
   FS.symlink("/dev/tty", "/dev/stdin");
  }
  if (Module["stdout"]) {
   FS.createDevice("/dev", "stdout", null, Module["stdout"]);
  } else {
   FS.symlink("/dev/tty", "/dev/stdout");
  }
  if (Module["stderr"]) {
   FS.createDevice("/dev", "stderr", null, Module["stderr"]);
  } else {
   FS.symlink("/dev/tty1", "/dev/stderr");
  }
  var stdin = FS.open("/dev/stdin", 0);
  var stdout = FS.open("/dev/stdout", 1);
  var stderr = FS.open("/dev/stderr", 1);
 },
 staticInit() {
  [ 44 ].forEach(code => {
   FS.genericErrors[code] = new FS.ErrnoError(code);
   FS.genericErrors[code].stack = "<generic error, no stack>";
  });
  FS.nameTable = new Array(4096);
  FS.mount(MEMFS, {}, "/");
  FS.createDefaultDirectories();
  FS.createDefaultDevices();
  FS.createSpecialDirectories();
  FS.filesystems = {
   "MEMFS": MEMFS
  };
 },
 init(input, output, error) {
  FS.init.initialized = true;
  Module["stdin"] = input || Module["stdin"];
  Module["stdout"] = output || Module["stdout"];
  Module["stderr"] = error || Module["stderr"];
  FS.createStandardStreams();
 },
 quit() {
  FS.init.initialized = false;
  for (var i = 0; i < FS.streams.length; i++) {
   var stream = FS.streams[i];
   if (!stream) {
    continue;
   }
   FS.close(stream);
  }
 },
 findObject(path, dontResolveLastLink) {
  var ret = FS.analyzePath(path, dontResolveLastLink);
  if (!ret.exists) {
   return null;
  }
  return ret.object;
 },
 analyzePath(path, dontResolveLastLink) {
  try {
   var lookup = FS.lookupPath(path, {
    follow: !dontResolveLastLink
   });
   path = lookup.path;
  } catch (e) {}
  var ret = {
   isRoot: false,
   exists: false,
   error: 0,
   name: null,
   path: null,
   object: null,
   parentExists: false,
   parentPath: null,
   parentObject: null
  };
  try {
   var lookup = FS.lookupPath(path, {
    parent: true
   });
   ret.parentExists = true;
   ret.parentPath = lookup.path;
   ret.parentObject = lookup.node;
   ret.name = PATH.basename(path);
   lookup = FS.lookupPath(path, {
    follow: !dontResolveLastLink
   });
   ret.exists = true;
   ret.path = lookup.path;
   ret.object = lookup.node;
   ret.name = lookup.node.name;
   ret.isRoot = lookup.path === "/";
  } catch (e) {
   ret.error = e.errno;
  }
  return ret;
 },
 createPath(parent, path, canRead, canWrite) {
  parent = typeof parent == "string" ? parent : FS.getPath(parent);
  var parts = path.split("/").reverse();
  while (parts.length) {
   var part = parts.pop();
   if (!part) continue;
   var current = PATH.join2(parent, part);
   try {
    FS.mkdir(current);
   } catch (e) {}
   parent = current;
  }
  return current;
 },
 createFile(parent, name, properties, canRead, canWrite) {
  var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
  var mode = FS_getMode(canRead, canWrite);
  return FS.create(path, mode);
 },
 createDataFile(parent, name, data, canRead, canWrite, canOwn) {
  var path = name;
  if (parent) {
   parent = typeof parent == "string" ? parent : FS.getPath(parent);
   path = name ? PATH.join2(parent, name) : parent;
  }
  var mode = FS_getMode(canRead, canWrite);
  var node = FS.create(path, mode);
  if (data) {
   if (typeof data == "string") {
    var arr = new Array(data.length);
    for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
    data = arr;
   }
   FS.chmod(node, mode | 146);
   var stream = FS.open(node, 577);
   FS.write(stream, data, 0, data.length, 0, canOwn);
   FS.close(stream);
   FS.chmod(node, mode);
  }
 },
 createDevice(parent, name, input, output) {
  var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
  var mode = FS_getMode(!!input, !!output);
  if (!FS.createDevice.major) FS.createDevice.major = 64;
  var dev = FS.makedev(FS.createDevice.major++, 0);
  FS.registerDevice(dev, {
   open(stream) {
    stream.seekable = false;
   },
   close(stream) {
    if (output?.buffer?.length) {
     output(10);
    }
   },
   read(stream, buffer, offset, length, pos) {
    /* ignored */ var bytesRead = 0;
    for (var i = 0; i < length; i++) {
     var result;
     try {
      result = input();
     } catch (e) {
      throw new FS.ErrnoError(29);
     }
     if (result === undefined && bytesRead === 0) {
      throw new FS.ErrnoError(6);
     }
     if (result === null || result === undefined) break;
     bytesRead++;
     buffer[offset + i] = result;
    }
    if (bytesRead) {
     stream.node.timestamp = Date.now();
    }
    return bytesRead;
   },
   write(stream, buffer, offset, length, pos) {
    for (var i = 0; i < length; i++) {
     try {
      output(buffer[offset + i]);
     } catch (e) {
      throw new FS.ErrnoError(29);
     }
    }
    if (length) {
     stream.node.timestamp = Date.now();
    }
    return i;
   }
  });
  return FS.mkdev(path, mode, dev);
 },
 forceLoadFile(obj) {
  if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
  if (typeof XMLHttpRequest != "undefined") {
   throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
  } else if (read_) {
   try {
    obj.contents = intArrayFromString(read_(obj.url), true);
    obj.usedBytes = obj.contents.length;
   } catch (e) {
    throw new FS.ErrnoError(29);
   }
  } else {
   throw new Error("Cannot load without read() or XMLHttpRequest.");
  }
 },
 createLazyFile(parent, name, url, canRead, canWrite) {
  class LazyUint8Array {
   constructor() {
    this.lengthKnown = false;
    this.chunks = [];
   }
   get(idx) {
    if (idx > this.length - 1 || idx < 0) {
     return undefined;
    }
    var chunkOffset = idx % this.chunkSize;
    var chunkNum = (idx / this.chunkSize) | 0;
    return this.getter(chunkNum)[chunkOffset];
   }
   setDataGetter(getter) {
    this.getter = getter;
   }
   cacheLength() {
    var xhr = new XMLHttpRequest;
    xhr.open("HEAD", url, false);
    xhr.send(null);
    if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
    var datalength = Number(xhr.getResponseHeader("Content-length"));
    var header;
    var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
    var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
    var chunkSize = 1024 * 1024;
    if (!hasByteServing) chunkSize = datalength;
    var doXHR = (from, to) => {
     if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
     if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");
     var xhr = new XMLHttpRequest;
     xhr.open("GET", url, false);
     if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
     xhr.responseType = "arraybuffer";
     if (xhr.overrideMimeType) {
      xhr.overrideMimeType("text/plain; charset=x-user-defined");
     }
     xhr.send(null);
     if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
     if (xhr.response !== undefined) {
      return new Uint8Array(/** @type{Array<number>} */ (xhr.response || []));
     }
     return intArrayFromString(xhr.responseText || "", true);
    };
    var lazyArray = this;
    lazyArray.setDataGetter(chunkNum => {
     var start = chunkNum * chunkSize;
     var end = (chunkNum + 1) * chunkSize - 1;
     end = Math.min(end, datalength - 1);
     if (typeof lazyArray.chunks[chunkNum] == "undefined") {
      lazyArray.chunks[chunkNum] = doXHR(start, end);
     }
     if (typeof lazyArray.chunks[chunkNum] == "undefined") throw new Error("doXHR failed!");
     return lazyArray.chunks[chunkNum];
    });
    if (usesGzip || !datalength) {
     chunkSize = datalength = 1;
     datalength = this.getter(0).length;
     chunkSize = datalength;
     out("LazyFiles on gzip forces download of the whole file when length is accessed");
    }
    this._length = datalength;
    this._chunkSize = chunkSize;
    this.lengthKnown = true;
   }
   get length() {
    if (!this.lengthKnown) {
     this.cacheLength();
    }
    return this._length;
   }
   get chunkSize() {
    if (!this.lengthKnown) {
     this.cacheLength();
    }
    return this._chunkSize;
   }
  }
  if (typeof XMLHttpRequest != "undefined") {
   if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
   var lazyArray = new LazyUint8Array;
   var properties = {
    isDevice: false,
    contents: lazyArray
   };
  } else {
   var properties = {
    isDevice: false,
    url: url
   };
  }
  var node = FS.createFile(parent, name, properties, canRead, canWrite);
  if (properties.contents) {
   node.contents = properties.contents;
  } else if (properties.url) {
   node.contents = null;
   node.url = properties.url;
  }
  Object.defineProperties(node, {
   usedBytes: {
    get: function() {
     return this.contents.length;
    }
   }
  });
  var stream_ops = {};
  var keys = Object.keys(node.stream_ops);
  keys.forEach(key => {
   var fn = node.stream_ops[key];
   stream_ops[key] = (...args) => {
    FS.forceLoadFile(node);
    return fn(...args);
   };
  });
  function writeChunks(stream, buffer, offset, length, position) {
   var contents = stream.node.contents;
   if (position >= contents.length) return 0;
   var size = Math.min(contents.length - position, length);
   if (contents.slice) {
    for (var i = 0; i < size; i++) {
     buffer[offset + i] = contents[position + i];
    }
   } else {
    for (var i = 0; i < size; i++) {
     buffer[offset + i] = contents.get(position + i);
    }
   }
   return size;
  }
  stream_ops.read = (stream, buffer, offset, length, position) => {
   FS.forceLoadFile(node);
   return writeChunks(stream, buffer, offset, length, position);
  };
  stream_ops.mmap = (stream, length, position, prot, flags) => {
   FS.forceLoadFile(node);
   var ptr = mmapAlloc(length);
   if (!ptr) {
    throw new FS.ErrnoError(48);
   }
   writeChunks(stream, GROWABLE_HEAP_I8(), ptr, length, position);
   return {
    ptr: ptr,
    allocated: true
   };
  };
  node.stream_ops = stream_ops;
  return node;
 }
};

var SYSCALLS = {
 DEFAULT_POLLMASK: 5,
 calculateAt(dirfd, path, allowEmpty) {
  if (PATH.isAbs(path)) {
   return path;
  }
  var dir;
  if (dirfd === -100) {
   dir = FS.cwd();
  } else {
   var dirstream = SYSCALLS.getStreamFromFD(dirfd);
   dir = dirstream.path;
  }
  if (path.length == 0) {
   if (!allowEmpty) {
    throw new FS.ErrnoError(44);
   }
   return dir;
  }
  return PATH.join2(dir, path);
 },
 doStat(func, path, buf) {
  var stat = func(path);
  GROWABLE_HEAP_I32()[((buf) >> 2)] = stat.dev;
  GROWABLE_HEAP_I32()[(((buf) + (4)) >> 2)] = stat.mode;
  GROWABLE_HEAP_U32()[(((buf) + (8)) >> 2)] = stat.nlink;
  GROWABLE_HEAP_I32()[(((buf) + (12)) >> 2)] = stat.uid;
  GROWABLE_HEAP_I32()[(((buf) + (16)) >> 2)] = stat.gid;
  GROWABLE_HEAP_I32()[(((buf) + (20)) >> 2)] = stat.rdev;
  (tempI64 = [ stat.size >>> 0, (tempDouble = stat.size, (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
  GROWABLE_HEAP_I32()[(((buf) + (24)) >> 2)] = tempI64[0], GROWABLE_HEAP_I32()[(((buf) + (28)) >> 2)] = tempI64[1]);
  GROWABLE_HEAP_I32()[(((buf) + (32)) >> 2)] = 4096;
  GROWABLE_HEAP_I32()[(((buf) + (36)) >> 2)] = stat.blocks;
  var atime = stat.atime.getTime();
  var mtime = stat.mtime.getTime();
  var ctime = stat.ctime.getTime();
  (tempI64 = [ Math.floor(atime / 1e3) >>> 0, (tempDouble = Math.floor(atime / 1e3), 
  (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
  GROWABLE_HEAP_I32()[(((buf) + (40)) >> 2)] = tempI64[0], GROWABLE_HEAP_I32()[(((buf) + (44)) >> 2)] = tempI64[1]);
  GROWABLE_HEAP_U32()[(((buf) + (48)) >> 2)] = (atime % 1e3) * 1e3;
  (tempI64 = [ Math.floor(mtime / 1e3) >>> 0, (tempDouble = Math.floor(mtime / 1e3), 
  (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
  GROWABLE_HEAP_I32()[(((buf) + (56)) >> 2)] = tempI64[0], GROWABLE_HEAP_I32()[(((buf) + (60)) >> 2)] = tempI64[1]);
  GROWABLE_HEAP_U32()[(((buf) + (64)) >> 2)] = (mtime % 1e3) * 1e3;
  (tempI64 = [ Math.floor(ctime / 1e3) >>> 0, (tempDouble = Math.floor(ctime / 1e3), 
  (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
  GROWABLE_HEAP_I32()[(((buf) + (72)) >> 2)] = tempI64[0], GROWABLE_HEAP_I32()[(((buf) + (76)) >> 2)] = tempI64[1]);
  GROWABLE_HEAP_U32()[(((buf) + (80)) >> 2)] = (ctime % 1e3) * 1e3;
  (tempI64 = [ stat.ino >>> 0, (tempDouble = stat.ino, (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
  GROWABLE_HEAP_I32()[(((buf) + (88)) >> 2)] = tempI64[0], GROWABLE_HEAP_I32()[(((buf) + (92)) >> 2)] = tempI64[1]);
  return 0;
 },
 doMsync(addr, stream, len, flags, offset) {
  if (!FS.isFile(stream.node.mode)) {
   throw new FS.ErrnoError(43);
  }
  if (flags & 2) {
   return 0;
  }
  var buffer = GROWABLE_HEAP_U8().slice(addr, addr + len);
  FS.msync(stream, buffer, offset, len, flags);
 },
 varargs: undefined,
 get() {
  var ret = GROWABLE_HEAP_I32()[((+SYSCALLS.varargs) >> 2)];
  SYSCALLS.varargs += 4;
  return ret;
 },
 getp() {
  return SYSCALLS.get();
 },
 getStr(ptr) {
  var ret = UTF8ToString(ptr);
  return ret;
 },
 getStreamFromFD(fd) {
  var stream = FS.getStreamChecked(fd);
  return stream;
 }
};

function ___syscall__newselect(nfds, readfds, writefds, exceptfds, timeout) {
 if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(3, 0, 1, nfds, readfds, writefds, exceptfds, timeout);
 try {
  var total = 0;
  var srcReadLow = (readfds ? GROWABLE_HEAP_I32()[((readfds) >> 2)] : 0), srcReadHigh = (readfds ? GROWABLE_HEAP_I32()[(((readfds) + (4)) >> 2)] : 0);
  var srcWriteLow = (writefds ? GROWABLE_HEAP_I32()[((writefds) >> 2)] : 0), srcWriteHigh = (writefds ? GROWABLE_HEAP_I32()[(((writefds) + (4)) >> 2)] : 0);
  var srcExceptLow = (exceptfds ? GROWABLE_HEAP_I32()[((exceptfds) >> 2)] : 0), srcExceptHigh = (exceptfds ? GROWABLE_HEAP_I32()[(((exceptfds) + (4)) >> 2)] : 0);
  var dstReadLow = 0, dstReadHigh = 0;
  var dstWriteLow = 0, dstWriteHigh = 0;
  var dstExceptLow = 0, dstExceptHigh = 0;
  var allLow = (readfds ? GROWABLE_HEAP_I32()[((readfds) >> 2)] : 0) | (writefds ? GROWABLE_HEAP_I32()[((writefds) >> 2)] : 0) | (exceptfds ? GROWABLE_HEAP_I32()[((exceptfds) >> 2)] : 0);
  var allHigh = (readfds ? GROWABLE_HEAP_I32()[(((readfds) + (4)) >> 2)] : 0) | (writefds ? GROWABLE_HEAP_I32()[(((writefds) + (4)) >> 2)] : 0) | (exceptfds ? GROWABLE_HEAP_I32()[(((exceptfds) + (4)) >> 2)] : 0);
  var check = function(fd, low, high, val) {
   return (fd < 32 ? (low & val) : (high & val));
  };
  for (var fd = 0; fd < nfds; fd++) {
   var mask = 1 << (fd % 32);
   if (!(check(fd, allLow, allHigh, mask))) {
    continue;
   }
   var stream = SYSCALLS.getStreamFromFD(fd);
   var flags = SYSCALLS.DEFAULT_POLLMASK;
   if (stream.stream_ops.poll) {
    var timeoutInMillis = -1;
    if (timeout) {
     var tv_sec = (readfds ? GROWABLE_HEAP_I32()[((timeout) >> 2)] : 0), tv_usec = (readfds ? GROWABLE_HEAP_I32()[(((timeout) + (4)) >> 2)] : 0);
     timeoutInMillis = (tv_sec + tv_usec / 1e6) * 1e3;
    }
    flags = stream.stream_ops.poll(stream, timeoutInMillis);
   }
   if ((flags & 1) && check(fd, srcReadLow, srcReadHigh, mask)) {
    fd < 32 ? (dstReadLow = dstReadLow | mask) : (dstReadHigh = dstReadHigh | mask);
    total++;
   }
   if ((flags & 4) && check(fd, srcWriteLow, srcWriteHigh, mask)) {
    fd < 32 ? (dstWriteLow = dstWriteLow | mask) : (dstWriteHigh = dstWriteHigh | mask);
    total++;
   }
   if ((flags & 2) && check(fd, srcExceptLow, srcExceptHigh, mask)) {
    fd < 32 ? (dstExceptLow = dstExceptLow | mask) : (dstExceptHigh = dstExceptHigh | mask);
    total++;
   }
  }
  if (readfds) {
   GROWABLE_HEAP_I32()[((readfds) >> 2)] = dstReadLow;
   GROWABLE_HEAP_I32()[(((readfds) + (4)) >> 2)] = dstReadHigh;
  }
  if (writefds) {
   GROWABLE_HEAP_I32()[((writefds) >> 2)] = dstWriteLow;
   GROWABLE_HEAP_I32()[(((writefds) + (4)) >> 2)] = dstWriteHigh;
  }
  if (exceptfds) {
   GROWABLE_HEAP_I32()[((exceptfds) >> 2)] = dstExceptLow;
   GROWABLE_HEAP_I32()[(((exceptfds) + (4)) >> 2)] = dstExceptHigh;
  }
  return total;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_dup3(fd, newfd, flags) {
 if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(4, 0, 1, fd, newfd, flags);
 try {
  var old = SYSCALLS.getStreamFromFD(fd);
  if (old.fd === newfd) return -28;
  var existing = FS.getStream(newfd);
  if (existing) FS.close(existing);
  return FS.dupStream(old, newfd).fd;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_faccessat(dirfd, path, amode, flags) {
 if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(5, 0, 1, dirfd, path, amode, flags);
 try {
  path = SYSCALLS.getStr(path);
  path = SYSCALLS.calculateAt(dirfd, path);
  if (amode & ~7) {
   return -28;
  }
  var lookup = FS.lookupPath(path, {
   follow: true
  });
  var node = lookup.node;
  if (!node) {
   return -44;
  }
  var perms = "";
  if (amode & 4) perms += "r";
  if (amode & 2) perms += "w";
  if (amode & 1) perms += "x";
  if (perms && /* otherwise, they've just passed F_OK */ FS.nodePermissions(node, perms)) {
   return -2;
  }
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_fcntl64(fd, cmd, varargs) {
 if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(6, 0, 1, fd, cmd, varargs);
 SYSCALLS.varargs = varargs;
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  switch (cmd) {
  case 0:
   {
    var arg = SYSCALLS.get();
    if (arg < 0) {
     return -28;
    }
    while (FS.streams[arg]) {
     arg++;
    }
    var newStream;
    newStream = FS.dupStream(stream, arg);
    return newStream.fd;
   }

  case 1:
  case 2:
   return 0;

  case 3:
   return stream.flags;

  case 4:
   {
    var arg = SYSCALLS.get();
    stream.flags |= arg;
    return 0;
   }

  case 12:
   {
    var arg = SYSCALLS.getp();
    var offset = 0;
    GROWABLE_HEAP_I16()[(((arg) + (offset)) >> 1)] = 2;
    return 0;
   }

  case 13:
  case 14:
   return 0;
  }
  return -28;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_fstat64(fd, buf) {
 if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(7, 0, 1, fd, buf);
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  return SYSCALLS.doStat(FS.stat, stream.path, buf);
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

var stringToUTF8 = (str, outPtr, maxBytesToWrite) => stringToUTF8Array(str, GROWABLE_HEAP_U8(), outPtr, maxBytesToWrite);

function ___syscall_getdents64(fd, dirp, count) {
 if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(8, 0, 1, fd, dirp, count);
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  stream.getdents ||= FS.readdir(stream.path);
  var struct_size = 280;
  var pos = 0;
  var off = FS.llseek(stream, 0, 1);
  var idx = Math.floor(off / struct_size);
  while (idx < stream.getdents.length && pos + struct_size <= count) {
   var id;
   var type;
   var name = stream.getdents[idx];
   if (name === ".") {
    id = stream.node.id;
    type = 4;
   } else if (name === "..") {
    var lookup = FS.lookupPath(stream.path, {
     parent: true
    });
    id = lookup.node.id;
    type = 4;
   } else {
    var child = FS.lookupNode(stream.node, name);
    id = child.id;
    type = FS.isChrdev(child.mode) ? 2 :  FS.isDir(child.mode) ? 4 :  FS.isLink(child.mode) ? 10 :  8;
   }
   (tempI64 = [ id >>> 0, (tempDouble = id, (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
   GROWABLE_HEAP_I32()[((dirp + pos) >> 2)] = tempI64[0], GROWABLE_HEAP_I32()[(((dirp + pos) + (4)) >> 2)] = tempI64[1]);
   (tempI64 = [ (idx + 1) * struct_size >>> 0, (tempDouble = (idx + 1) * struct_size, 
   (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
   GROWABLE_HEAP_I32()[(((dirp + pos) + (8)) >> 2)] = tempI64[0], GROWABLE_HEAP_I32()[(((dirp + pos) + (12)) >> 2)] = tempI64[1]);
   GROWABLE_HEAP_I16()[(((dirp + pos) + (16)) >> 1)] = 280;
   GROWABLE_HEAP_I8()[(dirp + pos) + (18)] = type;
   stringToUTF8(name, dirp + pos + 19, 256);
   pos += struct_size;
   idx += 1;
  }
  FS.llseek(stream, idx * struct_size, 0);
  return pos;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_ioctl(fd, op, varargs) {
 if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(9, 0, 1, fd, op, varargs);
 SYSCALLS.varargs = varargs;
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  switch (op) {
  case 21509:
   {
    if (!stream.tty) return -59;
    return 0;
   }

  case 21505:
   {
    if (!stream.tty) return -59;
    if (stream.tty.ops.ioctl_tcgets) {
     var termios = stream.tty.ops.ioctl_tcgets(stream);
     var argp = SYSCALLS.getp();
     GROWABLE_HEAP_I32()[((argp) >> 2)] = termios.c_iflag || 0;
     GROWABLE_HEAP_I32()[(((argp) + (4)) >> 2)] = termios.c_oflag || 0;
     GROWABLE_HEAP_I32()[(((argp) + (8)) >> 2)] = termios.c_cflag || 0;
     GROWABLE_HEAP_I32()[(((argp) + (12)) >> 2)] = termios.c_lflag || 0;
     for (var i = 0; i < 32; i++) {
      GROWABLE_HEAP_I8()[(argp + i) + (17)] = termios.c_cc[i] || 0;
     }
     return 0;
    }
    return 0;
   }

  case 21510:
  case 21511:
  case 21512:
   {
    if (!stream.tty) return -59;
    return 0;
   }

  case 21506:
  case 21507:
  case 21508:
   {
    if (!stream.tty) return -59;
    if (stream.tty.ops.ioctl_tcsets) {
     var argp = SYSCALLS.getp();
     var c_iflag = GROWABLE_HEAP_I32()[((argp) >> 2)];
     var c_oflag = GROWABLE_HEAP_I32()[(((argp) + (4)) >> 2)];
     var c_cflag = GROWABLE_HEAP_I32()[(((argp) + (8)) >> 2)];
     var c_lflag = GROWABLE_HEAP_I32()[(((argp) + (12)) >> 2)];
     var c_cc = [];
     for (var i = 0; i < 32; i++) {
      c_cc.push(GROWABLE_HEAP_I8()[(argp + i) + (17)]);
     }
     return stream.tty.ops.ioctl_tcsets(stream.tty, op, {
      c_iflag: c_iflag,
      c_oflag: c_oflag,
      c_cflag: c_cflag,
      c_lflag: c_lflag,
      c_cc: c_cc
     });
    }
    return 0;
   }

  case 21519:
   {
    if (!stream.tty) return -59;
    var argp = SYSCALLS.getp();
    GROWABLE_HEAP_I32()[((argp) >> 2)] = 0;
    return 0;
   }

  case 21520:
   {
    if (!stream.tty) return -59;
    return -28;
   }

  case 21531:
   {
    var argp = SYSCALLS.getp();
    return FS.ioctl(stream, op, argp);
   }

  case 21523:
   {
    if (!stream.tty) return -59;
    if (stream.tty.ops.ioctl_tiocgwinsz) {
     var winsize = stream.tty.ops.ioctl_tiocgwinsz(stream.tty);
     var argp = SYSCALLS.getp();
     GROWABLE_HEAP_I16()[((argp) >> 1)] = winsize[0];
     GROWABLE_HEAP_I16()[(((argp) + (2)) >> 1)] = winsize[1];
    }
    return 0;
   }

  case 21524:
   {
    if (!stream.tty) return -59;
    return 0;
   }

  case 21515:
   {
    if (!stream.tty) return -59;
    return 0;
   }

  default:
   return -28;
  }
 }  catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_lstat64(path, buf) {
 if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(10, 0, 1, path, buf);
 try {
  path = SYSCALLS.getStr(path);
  return SYSCALLS.doStat(FS.lstat, path, buf);
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_mkdirat(dirfd, path, mode) {
 if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(11, 0, 1, dirfd, path, mode);
 try {
  path = SYSCALLS.getStr(path);
  path = SYSCALLS.calculateAt(dirfd, path);
  path = PATH.normalize(path);
  if (path[path.length - 1] === "/") path = path.substr(0, path.length - 1);
  FS.mkdir(path, mode, 0);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_newfstatat(dirfd, path, buf, flags) {
 if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(12, 0, 1, dirfd, path, buf, flags);
 try {
  path = SYSCALLS.getStr(path);
  var nofollow = flags & 256;
  var allowEmpty = flags & 4096;
  flags = flags & (~6400);
  path = SYSCALLS.calculateAt(dirfd, path, allowEmpty);
  return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path, buf);
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_openat(dirfd, path, flags, varargs) {
 if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(13, 0, 1, dirfd, path, flags, varargs);
 SYSCALLS.varargs = varargs;
 try {
  path = SYSCALLS.getStr(path);
  path = SYSCALLS.calculateAt(dirfd, path);
  var mode = varargs ? SYSCALLS.get() : 0;
  return FS.open(path, flags, mode).fd;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_renameat(olddirfd, oldpath, newdirfd, newpath) {
 if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(14, 0, 1, olddirfd, oldpath, newdirfd, newpath);
 try {
  oldpath = SYSCALLS.getStr(oldpath);
  newpath = SYSCALLS.getStr(newpath);
  oldpath = SYSCALLS.calculateAt(olddirfd, oldpath);
  newpath = SYSCALLS.calculateAt(newdirfd, newpath);
  FS.rename(oldpath, newpath);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_rmdir(path) {
 if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(15, 0, 1, path);
 try {
  path = SYSCALLS.getStr(path);
  FS.rmdir(path);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_stat64(path, buf) {
 if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(16, 0, 1, path, buf);
 try {
  path = SYSCALLS.getStr(path);
  return SYSCALLS.doStat(FS.stat, path, buf);
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

function ___syscall_unlinkat(dirfd, path, flags) {
 if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(17, 0, 1, dirfd, path, flags);
 try {
  path = SYSCALLS.getStr(path);
  path = SYSCALLS.calculateAt(dirfd, path);
  if (flags === 0) {
   FS.unlink(path);
  } else if (flags === 512) {
   FS.rmdir(path);
  } else {
   abort("Invalid flags passed to unlinkat");
  }
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return -e.errno;
 }
}

var nowIsMonotonic = 1;

var __emscripten_get_now_is_monotonic = () => nowIsMonotonic;

var maybeExit = () => {
 if (!keepRuntimeAlive()) {
  try {
   if (ENVIRONMENT_IS_PTHREAD) __emscripten_thread_exit(EXITSTATUS); else _exit(EXITSTATUS);
  } catch (e) {
   handleException(e);
  }
 }
};

var callUserCallback = func => {
 if (ABORT) {
  return;
 }
 try {
  func();
  maybeExit();
 } catch (e) {
  handleException(e);
 }
};

var __emscripten_thread_mailbox_await = pthread_ptr => {
 if (typeof Atomics.waitAsync === "function") {
  var wait = Atomics.waitAsync(GROWABLE_HEAP_I32(), ((pthread_ptr) >> 2), pthread_ptr);
  wait.value.then(checkMailbox);
  var waitingAsync = pthread_ptr + 128;
  Atomics.store(GROWABLE_HEAP_I32(), ((waitingAsync) >> 2), 1);
 }
};

Module["__emscripten_thread_mailbox_await"] = __emscripten_thread_mailbox_await;

var checkMailbox = () => {
 var pthread_ptr = _pthread_self();
 if (pthread_ptr) {
  __emscripten_thread_mailbox_await(pthread_ptr);
  callUserCallback(__emscripten_check_mailbox);
 }
};

Module["checkMailbox"] = checkMailbox;

var __emscripten_notify_mailbox_postmessage = (targetThreadId, currThreadId, mainThreadId) => {
 if (targetThreadId == currThreadId) {
  setTimeout(checkMailbox);
 } else if (ENVIRONMENT_IS_PTHREAD) {
  postMessage({
   "targetThread": targetThreadId,
   "cmd": "checkMailbox"
  });
 } else {
  var worker = PThread.pthreads[targetThreadId];
  if (!worker) {
   return;
  }
  worker.postMessage({
   "cmd": "checkMailbox"
  });
 }
};

var proxiedJSCallArgs = [];

var __emscripten_receive_on_main_thread_js = (funcIndex, emAsmAddr, callingThread, numCallArgs, args) => {
 proxiedJSCallArgs.length = numCallArgs;
 var b = ((args) >> 3);
 for (var i = 0; i < numCallArgs; i++) {
  proxiedJSCallArgs[i] = GROWABLE_HEAP_F64()[b + i];
 }
 var func = proxiedFunctionTable[funcIndex];
 PThread.currentProxiedOperationCallerThread = callingThread;
 var rtn = func(...proxiedJSCallArgs);
 PThread.currentProxiedOperationCallerThread = 0;
 return rtn;
};

var __emscripten_thread_set_strongref = thread => {
 if (ENVIRONMENT_IS_NODE) {
  PThread.pthreads[thread].ref();
 }
};

var __emscripten_throw_longjmp = () => {
 throw Infinity;
};

function __gmtime_js(time_low, time_high, tmPtr) {
 var time = convertI32PairToI53Checked(time_low, time_high);
 var date = new Date(time * 1e3);
 GROWABLE_HEAP_I32()[((tmPtr) >> 2)] = date.getUTCSeconds();
 GROWABLE_HEAP_I32()[(((tmPtr) + (4)) >> 2)] = date.getUTCMinutes();
 GROWABLE_HEAP_I32()[(((tmPtr) + (8)) >> 2)] = date.getUTCHours();
 GROWABLE_HEAP_I32()[(((tmPtr) + (12)) >> 2)] = date.getUTCDate();
 GROWABLE_HEAP_I32()[(((tmPtr) + (16)) >> 2)] = date.getUTCMonth();
 GROWABLE_HEAP_I32()[(((tmPtr) + (20)) >> 2)] = date.getUTCFullYear() - 1900;
 GROWABLE_HEAP_I32()[(((tmPtr) + (24)) >> 2)] = date.getUTCDay();
 var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
 var yday = ((date.getTime() - start) / (1e3 * 60 * 60 * 24)) | 0;
 GROWABLE_HEAP_I32()[(((tmPtr) + (28)) >> 2)] = yday;
}

var isLeapYear = year => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

var MONTH_DAYS_LEAP_CUMULATIVE = [ 0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335 ];

var MONTH_DAYS_REGULAR_CUMULATIVE = [ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334 ];

var ydayFromDate = date => {
 var leap = isLeapYear(date.getFullYear());
 var monthDaysCumulative = (leap ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE);
 var yday = monthDaysCumulative[date.getMonth()] + date.getDate() - 1;
 return yday;
};

function __localtime_js(time_low, time_high, tmPtr) {
 var time = convertI32PairToI53Checked(time_low, time_high);
 var date = new Date(time * 1e3);
 GROWABLE_HEAP_I32()[((tmPtr) >> 2)] = date.getSeconds();
 GROWABLE_HEAP_I32()[(((tmPtr) + (4)) >> 2)] = date.getMinutes();
 GROWABLE_HEAP_I32()[(((tmPtr) + (8)) >> 2)] = date.getHours();
 GROWABLE_HEAP_I32()[(((tmPtr) + (12)) >> 2)] = date.getDate();
 GROWABLE_HEAP_I32()[(((tmPtr) + (16)) >> 2)] = date.getMonth();
 GROWABLE_HEAP_I32()[(((tmPtr) + (20)) >> 2)] = date.getFullYear() - 1900;
 GROWABLE_HEAP_I32()[(((tmPtr) + (24)) >> 2)] = date.getDay();
 var yday = ydayFromDate(date) | 0;
 GROWABLE_HEAP_I32()[(((tmPtr) + (28)) >> 2)] = yday;
 GROWABLE_HEAP_I32()[(((tmPtr) + (36)) >> 2)] = -(date.getTimezoneOffset() * 60);
 var start = new Date(date.getFullYear(), 0, 1);
 var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
 var winterOffset = start.getTimezoneOffset();
 var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
 GROWABLE_HEAP_I32()[(((tmPtr) + (32)) >> 2)] = dst;
}

var __mktime_js = function(tmPtr) {
 var ret = (() => {
  var date = new Date(GROWABLE_HEAP_I32()[(((tmPtr) + (20)) >> 2)] + 1900, GROWABLE_HEAP_I32()[(((tmPtr) + (16)) >> 2)], GROWABLE_HEAP_I32()[(((tmPtr) + (12)) >> 2)], GROWABLE_HEAP_I32()[(((tmPtr) + (8)) >> 2)], GROWABLE_HEAP_I32()[(((tmPtr) + (4)) >> 2)], GROWABLE_HEAP_I32()[((tmPtr) >> 2)], 0);
  var dst = GROWABLE_HEAP_I32()[(((tmPtr) + (32)) >> 2)];
  var guessedOffset = date.getTimezoneOffset();
  var start = new Date(date.getFullYear(), 0, 1);
  var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
  var winterOffset = start.getTimezoneOffset();
  var dstOffset = Math.min(winterOffset, summerOffset);
  if (dst < 0) {
   GROWABLE_HEAP_I32()[(((tmPtr) + (32)) >> 2)] = Number(summerOffset != winterOffset && dstOffset == guessedOffset);
  } else if ((dst > 0) != (dstOffset == guessedOffset)) {
   var nonDstOffset = Math.max(winterOffset, summerOffset);
   var trueOffset = dst > 0 ? dstOffset : nonDstOffset;
   date.setTime(date.getTime() + (trueOffset - guessedOffset) * 6e4);
  }
  GROWABLE_HEAP_I32()[(((tmPtr) + (24)) >> 2)] = date.getDay();
  var yday = ydayFromDate(date) | 0;
  GROWABLE_HEAP_I32()[(((tmPtr) + (28)) >> 2)] = yday;
  GROWABLE_HEAP_I32()[((tmPtr) >> 2)] = date.getSeconds();
  GROWABLE_HEAP_I32()[(((tmPtr) + (4)) >> 2)] = date.getMinutes();
  GROWABLE_HEAP_I32()[(((tmPtr) + (8)) >> 2)] = date.getHours();
  GROWABLE_HEAP_I32()[(((tmPtr) + (12)) >> 2)] = date.getDate();
  GROWABLE_HEAP_I32()[(((tmPtr) + (16)) >> 2)] = date.getMonth();
  GROWABLE_HEAP_I32()[(((tmPtr) + (20)) >> 2)] = date.getYear();
  var timeMs = date.getTime();
  if (isNaN(timeMs)) {
   return -1;
  }
  return timeMs / 1e3;
 })();
 return (setTempRet0((tempDouble = ret, (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0)), 
 ret >>> 0);
};

var __tzset_js = (timezone, daylight, std_name, dst_name) => {
 var currentYear = (new Date).getFullYear();
 var winter = new Date(currentYear, 0, 1);
 var summer = new Date(currentYear, 6, 1);
 var winterOffset = winter.getTimezoneOffset();
 var summerOffset = summer.getTimezoneOffset();
 var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
 GROWABLE_HEAP_U32()[((timezone) >> 2)] = stdTimezoneOffset * 60;
 GROWABLE_HEAP_I32()[((daylight) >> 2)] = Number(winterOffset != summerOffset);
 function extractZone(date) {
  var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
  return match ? match[1] : "GMT";
 }
 var winterName = extractZone(winter);
 var summerName = extractZone(summer);
 if (summerOffset < winterOffset) {
  stringToUTF8(winterName, std_name, 7);
  stringToUTF8(summerName, dst_name, 7);
 } else {
  stringToUTF8(winterName, dst_name, 7);
  stringToUTF8(summerName, std_name, 7);
 }
};

var _abort = () => {
 abort("");
};

var warnOnce = text => {
 warnOnce.shown ||= {};
 if (!warnOnce.shown[text]) {
  warnOnce.shown[text] = 1;
  if (ENVIRONMENT_IS_NODE) text = "warning: " + text;
  err(text);
 }
};

var _emscripten_check_blocking_allowed = () => {};

var _emscripten_date_now = () => Date.now();

var runtimeKeepalivePush = () => {
 runtimeKeepaliveCounter += 1;
};

var _emscripten_exit_with_live_runtime = () => {
 runtimeKeepalivePush();
 throw "unwind";
};

var getHeapMax = () =>  2147483648;

var _emscripten_get_heap_max = () => getHeapMax();

var _emscripten_get_now;

_emscripten_get_now = () => performance.timeOrigin + performance.now();

var _emscripten_num_logical_cores = () => ENVIRONMENT_IS_NODE ? require("os").cpus().length : navigator["hardwareConcurrency"];

var growMemory = size => {
 var b = wasmMemory.buffer;
 var pages = (size - b.byteLength + 65535) / 65536;
 try {
  wasmMemory.grow(pages);
  updateMemoryViews();
  return 1;
 } /*success*/ catch (e) {}
};

var _emscripten_resize_heap = requestedSize => {
 var oldSize = GROWABLE_HEAP_U8().length;
 requestedSize >>>= 0;
 if (requestedSize <= oldSize) {
  return false;
 }
 var maxHeapSize = getHeapMax();
 if (requestedSize > maxHeapSize) {
  return false;
 }
 var alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
 for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
  var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
  overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
  var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
  var replacement = growMemory(newSize);
  if (replacement) {
   return true;
  }
 }
 return false;
};

var ENV = {};

var getExecutableName = () => thisProgram || "./this.program";

var getEnvStrings = () => {
 if (!getEnvStrings.strings) {
  var lang = ((typeof navigator == "object" && navigator.languages && navigator.languages[0]) || "C").replace("-", "_") + ".UTF-8";
  var env = {
   "USER": "web_user",
   "LOGNAME": "web_user",
   "PATH": "/",
   "PWD": "/",
   "HOME": "/home/web_user",
   "LANG": lang,
   "_": getExecutableName()
  };
  for (var x in ENV) {
   if (ENV[x] === undefined) delete env[x]; else env[x] = ENV[x];
  }
  var strings = [];
  for (var x in env) {
   strings.push(`${x}=${env[x]}`);
  }
  getEnvStrings.strings = strings;
 }
 return getEnvStrings.strings;
};

var stringToAscii = (str, buffer) => {
 for (var i = 0; i < str.length; ++i) {
  GROWABLE_HEAP_I8()[buffer++] = str.charCodeAt(i);
 }
 GROWABLE_HEAP_I8()[buffer] = 0;
};

var _environ_get = function(__environ, environ_buf) {
 if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(18, 0, 1, __environ, environ_buf);
 var bufSize = 0;
 getEnvStrings().forEach((string, i) => {
  var ptr = environ_buf + bufSize;
  GROWABLE_HEAP_U32()[(((__environ) + (i * 4)) >> 2)] = ptr;
  stringToAscii(string, ptr);
  bufSize += string.length + 1;
 });
 return 0;
};

var _environ_sizes_get = function(penviron_count, penviron_buf_size) {
 if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(19, 0, 1, penviron_count, penviron_buf_size);
 var strings = getEnvStrings();
 GROWABLE_HEAP_U32()[((penviron_count) >> 2)] = strings.length;
 var bufSize = 0;
 strings.forEach(string => bufSize += string.length + 1);
 GROWABLE_HEAP_U32()[((penviron_buf_size) >> 2)] = bufSize;
 return 0;
};

function _fd_close(fd) {
 if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(20, 0, 1, fd);
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  FS.close(stream);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return e.errno;
 }
}

function _fd_fdstat_get(fd, pbuf) {
 if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(21, 0, 1, fd, pbuf);
 try {
  var rightsBase = 0;
  var rightsInheriting = 0;
  var flags = 0;
  {
   var stream = SYSCALLS.getStreamFromFD(fd);
   var type = stream.tty ? 2 : FS.isDir(stream.mode) ? 3 : FS.isLink(stream.mode) ? 7 : 4;
  }
  GROWABLE_HEAP_I8()[pbuf] = type;
  GROWABLE_HEAP_I16()[(((pbuf) + (2)) >> 1)] = flags;
  (tempI64 = [ rightsBase >>> 0, (tempDouble = rightsBase, (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
  GROWABLE_HEAP_I32()[(((pbuf) + (8)) >> 2)] = tempI64[0], GROWABLE_HEAP_I32()[(((pbuf) + (12)) >> 2)] = tempI64[1]);
  (tempI64 = [ rightsInheriting >>> 0, (tempDouble = rightsInheriting, (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
  GROWABLE_HEAP_I32()[(((pbuf) + (16)) >> 2)] = tempI64[0], GROWABLE_HEAP_I32()[(((pbuf) + (20)) >> 2)] = tempI64[1]);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return e.errno;
 }
}

/** @param {number=} offset */ var doReadv = (stream, iov, iovcnt, offset) => {
 var ret = 0;
 for (var i = 0; i < iovcnt; i++) {
  var ptr = GROWABLE_HEAP_U32()[((iov) >> 2)];
  var len = GROWABLE_HEAP_U32()[(((iov) + (4)) >> 2)];
  iov += 8;
  var curr = FS.read(stream, GROWABLE_HEAP_I8(), ptr, len, offset);
  if (curr < 0) return -1;
  ret += curr;
  if (curr < len) break;
  if (typeof offset !== "undefined") {
   offset += curr;
  }
 }
 return ret;
};

function _fd_read(fd, iov, iovcnt, pnum) {
 if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(22, 0, 1, fd, iov, iovcnt, pnum);
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  var num = doReadv(stream, iov, iovcnt);
  GROWABLE_HEAP_U32()[((pnum) >> 2)] = num;
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return e.errno;
 }
}

function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
 if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(23, 0, 1, fd, offset_low, offset_high, whence, newOffset);
 var offset = convertI32PairToI53Checked(offset_low, offset_high);
 try {
  if (isNaN(offset)) return 61;
  var stream = SYSCALLS.getStreamFromFD(fd);
  FS.llseek(stream, offset, whence);
  (tempI64 = [ stream.position >>> 0, (tempDouble = stream.position, (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
  GROWABLE_HEAP_I32()[((newOffset) >> 2)] = tempI64[0], GROWABLE_HEAP_I32()[(((newOffset) + (4)) >> 2)] = tempI64[1]);
  if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return e.errno;
 }
}

/** @param {number=} offset */ var doWritev = (stream, iov, iovcnt, offset) => {
 var ret = 0;
 for (var i = 0; i < iovcnt; i++) {
  var ptr = GROWABLE_HEAP_U32()[((iov) >> 2)];
  var len = GROWABLE_HEAP_U32()[(((iov) + (4)) >> 2)];
  iov += 8;
  var curr = FS.write(stream, GROWABLE_HEAP_I8(), ptr, len, offset);
  if (curr < 0) return -1;
  ret += curr;
  if (typeof offset !== "undefined") {
   offset += curr;
  }
 }
 return ret;
};

function _fd_write(fd, iov, iovcnt, pnum) {
 if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(24, 0, 1, fd, iov, iovcnt, pnum);
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  var num = doWritev(stream, iov, iovcnt);
  GROWABLE_HEAP_U32()[((pnum) >> 2)] = num;
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
  return e.errno;
 }
}

var arraySum = (array, index) => {
 var sum = 0;
 for (var i = 0; i <= index; sum += array[i++]) {}
 return sum;
};

var MONTH_DAYS_LEAP = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

var MONTH_DAYS_REGULAR = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

var addDays = (date, days) => {
 var newDate = new Date(date.getTime());
 while (days > 0) {
  var leap = isLeapYear(newDate.getFullYear());
  var currentMonth = newDate.getMonth();
  var daysInCurrentMonth = (leap ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR)[currentMonth];
  if (days > daysInCurrentMonth - newDate.getDate()) {
   days -= (daysInCurrentMonth - newDate.getDate() + 1);
   newDate.setDate(1);
   if (currentMonth < 11) {
    newDate.setMonth(currentMonth + 1);
   } else {
    newDate.setMonth(0);
    newDate.setFullYear(newDate.getFullYear() + 1);
   }
  } else {
   newDate.setDate(newDate.getDate() + days);
   return newDate;
  }
 }
 return newDate;
};

var writeArrayToMemory = (array, buffer) => {
 GROWABLE_HEAP_I8().set(array, buffer);
};

var _strftime = (s, maxsize, format, tm) => {
 var tm_zone = GROWABLE_HEAP_U32()[(((tm) + (40)) >> 2)];
 var date = {
  tm_sec: GROWABLE_HEAP_I32()[((tm) >> 2)],
  tm_min: GROWABLE_HEAP_I32()[(((tm) + (4)) >> 2)],
  tm_hour: GROWABLE_HEAP_I32()[(((tm) + (8)) >> 2)],
  tm_mday: GROWABLE_HEAP_I32()[(((tm) + (12)) >> 2)],
  tm_mon: GROWABLE_HEAP_I32()[(((tm) + (16)) >> 2)],
  tm_year: GROWABLE_HEAP_I32()[(((tm) + (20)) >> 2)],
  tm_wday: GROWABLE_HEAP_I32()[(((tm) + (24)) >> 2)],
  tm_yday: GROWABLE_HEAP_I32()[(((tm) + (28)) >> 2)],
  tm_isdst: GROWABLE_HEAP_I32()[(((tm) + (32)) >> 2)],
  tm_gmtoff: GROWABLE_HEAP_I32()[(((tm) + (36)) >> 2)],
  tm_zone: tm_zone ? UTF8ToString(tm_zone) : ""
 };
 var pattern = UTF8ToString(format);
 var EXPANSION_RULES_1 = {
  "%c": "%a %b %d %H:%M:%S %Y",
  "%D": "%m/%d/%y",
  "%F": "%Y-%m-%d",
  "%h": "%b",
  "%r": "%I:%M:%S %p",
  "%R": "%H:%M",
  "%T": "%H:%M:%S",
  "%x": "%m/%d/%y",
  "%X": "%H:%M:%S",
  "%Ec": "%c",
  "%EC": "%C",
  "%Ex": "%m/%d/%y",
  "%EX": "%H:%M:%S",
  "%Ey": "%y",
  "%EY": "%Y",
  "%Od": "%d",
  "%Oe": "%e",
  "%OH": "%H",
  "%OI": "%I",
  "%Om": "%m",
  "%OM": "%M",
  "%OS": "%S",
  "%Ou": "%u",
  "%OU": "%U",
  "%OV": "%V",
  "%Ow": "%w",
  "%OW": "%W",
  "%Oy": "%y"
 };
 for (var rule in EXPANSION_RULES_1) {
  pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule]);
 }
 var WEEKDAYS = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
 var MONTHS = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
 function leadingSomething(value, digits, character) {
  var str = typeof value == "number" ? value.toString() : (value || "");
  while (str.length < digits) {
   str = character[0] + str;
  }
  return str;
 }
 function leadingNulls(value, digits) {
  return leadingSomething(value, digits, "0");
 }
 function compareByDay(date1, date2) {
  function sgn(value) {
   return value < 0 ? -1 : (value > 0 ? 1 : 0);
  }
  var compare;
  if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
   if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
    compare = sgn(date1.getDate() - date2.getDate());
   }
  }
  return compare;
 }
 function getFirstWeekStartDate(janFourth) {
  switch (janFourth.getDay()) {
  case 0:
   return new Date(janFourth.getFullYear() - 1, 11, 29);

  case 1:
   return janFourth;

  case 2:
   return new Date(janFourth.getFullYear(), 0, 3);

  case 3:
   return new Date(janFourth.getFullYear(), 0, 2);

  case 4:
   return new Date(janFourth.getFullYear(), 0, 1);

  case 5:
   return new Date(janFourth.getFullYear() - 1, 11, 31);

  case 6:
   return new Date(janFourth.getFullYear() - 1, 11, 30);
  }
 }
 function getWeekBasedYear(date) {
  var thisDate = addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
  var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
  var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
  var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
  var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
   if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
    return thisDate.getFullYear() + 1;
   }
   return thisDate.getFullYear();
  }
  return thisDate.getFullYear() - 1;
 }
 var EXPANSION_RULES_2 = {
  "%a": date => WEEKDAYS[date.tm_wday].substring(0, 3),
  "%A": date => WEEKDAYS[date.tm_wday],
  "%b": date => MONTHS[date.tm_mon].substring(0, 3),
  "%B": date => MONTHS[date.tm_mon],
  "%C": date => {
   var year = date.tm_year + 1900;
   return leadingNulls((year / 100) | 0, 2);
  },
  "%d": date => leadingNulls(date.tm_mday, 2),
  "%e": date => leadingSomething(date.tm_mday, 2, " "),
  "%g": date => getWeekBasedYear(date).toString().substring(2),
  "%G": getWeekBasedYear,
  "%H": date => leadingNulls(date.tm_hour, 2),
  "%I": date => {
   var twelveHour = date.tm_hour;
   if (twelveHour == 0) twelveHour = 12; else if (twelveHour > 12) twelveHour -= 12;
   return leadingNulls(twelveHour, 2);
  },
  "%j": date => leadingNulls(date.tm_mday + arraySum(isLeapYear(date.tm_year + 1900) ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR, date.tm_mon - 1), 3),
  "%m": date => leadingNulls(date.tm_mon + 1, 2),
  "%M": date => leadingNulls(date.tm_min, 2),
  "%n": () => "\n",
  "%p": date => {
   if (date.tm_hour >= 0 && date.tm_hour < 12) {
    return "AM";
   }
   return "PM";
  },
  "%S": date => leadingNulls(date.tm_sec, 2),
  "%t": () => "\t",
  "%u": date => date.tm_wday || 7,
  "%U": date => {
   var days = date.tm_yday + 7 - date.tm_wday;
   return leadingNulls(Math.floor(days / 7), 2);
  },
  "%V": date => {
   var val = Math.floor((date.tm_yday + 7 - (date.tm_wday + 6) % 7) / 7);
   if ((date.tm_wday + 371 - date.tm_yday - 2) % 7 <= 2) {
    val++;
   }
   if (!val) {
    val = 52;
    var dec31 = (date.tm_wday + 7 - date.tm_yday - 1) % 7;
    if (dec31 == 4 || (dec31 == 5 && isLeapYear(date.tm_year % 400 - 1))) {
     val++;
    }
   } else if (val == 53) {
    var jan1 = (date.tm_wday + 371 - date.tm_yday) % 7;
    if (jan1 != 4 && (jan1 != 3 || !isLeapYear(date.tm_year))) val = 1;
   }
   return leadingNulls(val, 2);
  },
  "%w": date => date.tm_wday,
  "%W": date => {
   var days = date.tm_yday + 7 - ((date.tm_wday + 6) % 7);
   return leadingNulls(Math.floor(days / 7), 2);
  },
  "%y": date => (date.tm_year + 1900).toString().substring(2),
  "%Y": date => date.tm_year + 1900,
  "%z": date => {
   var off = date.tm_gmtoff;
   var ahead = off >= 0;
   off = Math.abs(off) / 60;
   off = (off / 60) * 100 + (off % 60);
   return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
  },
  "%Z": date => date.tm_zone,
  "%%": () => "%"
 };
 pattern = pattern.replace(/%%/g, "\0\0");
 for (var rule in EXPANSION_RULES_2) {
  if (pattern.includes(rule)) {
   pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date));
  }
 }
 pattern = pattern.replace(/\0\0/g, "%");
 var bytes = intArrayFromString(pattern, false);
 if (bytes.length > maxsize) {
  return 0;
 }
 writeArrayToMemory(bytes, s);
 return bytes.length - 1;
};

var wasmTable;

var getWasmTableEntry = funcPtr => wasmTable.get(funcPtr);

var runAndAbortIfError = func => {
 try {
  return func();
 } catch (e) {
  abort(e);
 }
};

var sigToWasmTypes = sig => {
 var typeNames = {
  "i": "i32",
  "j": "i64",
  "f": "f32",
  "d": "f64",
  "e": "externref",
  "p": "i32"
 };
 var type = {
  parameters: [],
  results: sig[0] == "v" ? [] : [ typeNames[sig[0]] ]
 };
 for (var i = 1; i < sig.length; ++i) {
  type.parameters.push(typeNames[sig[i]]);
 }
 return type;
};

var runtimeKeepalivePop = () => {
 runtimeKeepaliveCounter -= 1;
};

var Asyncify = {
 instrumentWasmImports(imports) {
  var importPattern = /^(libavjs_wait_reader|invoke_.*|__asyncjs__.*)$/;
  for (let [x, original] of Object.entries(imports)) {
   let sig = original.sig;
   if (typeof original == "function") {
    let isAsyncifyImport = original.isAsync || importPattern.test(x);
   }
  }
 },
 instrumentWasmExports(exports) {
  var ret = {};
  for (let [x, original] of Object.entries(exports)) {
   if (typeof original == "function") {
    ret[x] = (...args) => {
     Asyncify.exportCallStack.push(x);
     try {
      return original(...args);
     } finally {
      if (!ABORT) {
       var y = Asyncify.exportCallStack.pop();
       Asyncify.maybeStopUnwind();
      }
     }
    };
   } else {
    ret[x] = original;
   }
  }
  return ret;
 },
 State: {
  Normal: 0,
  Unwinding: 1,
  Rewinding: 2,
  Disabled: 3
 },
 state: 0,
 StackSize: 4096,
 currData: null,
 handleSleepReturnValue: 0,
 exportCallStack: [],
 callStackNameToId: {},
 callStackIdToName: {},
 callStackId: 0,
 asyncPromiseHandlers: null,
 sleepCallbacks: [],
 getCallStackId(funcName) {
  var id = Asyncify.callStackNameToId[funcName];
  if (id === undefined) {
   id = Asyncify.callStackId++;
   Asyncify.callStackNameToId[funcName] = id;
   Asyncify.callStackIdToName[id] = funcName;
  }
  return id;
 },
 maybeStopUnwind() {
  if (Asyncify.currData && Asyncify.state === Asyncify.State.Unwinding && Asyncify.exportCallStack.length === 0) {
   Asyncify.state = Asyncify.State.Normal;
   runtimeKeepalivePush();
   runAndAbortIfError(_asyncify_stop_unwind);
   if (typeof Fibers != "undefined") {
    Fibers.trampoline();
   }
  }
 },
 whenDone() {
  return new Promise((resolve, reject) => {
   Asyncify.asyncPromiseHandlers = {
    resolve: resolve,
    reject: reject
   };
  });
 },
 allocateData() {
  var ptr = _malloc(12 + Asyncify.StackSize);
  Asyncify.setDataHeader(ptr, ptr + 12, Asyncify.StackSize);
  Asyncify.setDataRewindFunc(ptr);
  return ptr;
 },
 setDataHeader(ptr, stack, stackSize) {
  GROWABLE_HEAP_U32()[((ptr) >> 2)] = stack;
  GROWABLE_HEAP_U32()[(((ptr) + (4)) >> 2)] = stack + stackSize;
 },
 setDataRewindFunc(ptr) {
  var bottomOfCallStack = Asyncify.exportCallStack[0];
  var rewindId = Asyncify.getCallStackId(bottomOfCallStack);
  GROWABLE_HEAP_I32()[(((ptr) + (8)) >> 2)] = rewindId;
 },
 getDataRewindFunc(ptr) {
  var id = GROWABLE_HEAP_I32()[(((ptr) + (8)) >> 2)];
  var name = Asyncify.callStackIdToName[id];
  var func = wasmExports[name];
  return func;
 },
 doRewind(ptr) {
  var start = Asyncify.getDataRewindFunc(ptr);
  runtimeKeepalivePop();
  return start();
 },
 handleSleep(startAsync) {
  if (ABORT) return;
  if (Asyncify.state === Asyncify.State.Normal) {
   var reachedCallback = false;
   var reachedAfterCallback = false;
   startAsync((handleSleepReturnValue = 0) => {
    if (ABORT) return;
    Asyncify.handleSleepReturnValue = handleSleepReturnValue;
    reachedCallback = true;
    if (!reachedAfterCallback) {
     return;
    }
    Asyncify.state = Asyncify.State.Rewinding;
    runAndAbortIfError(() => _asyncify_start_rewind(Asyncify.currData));
    if (typeof Browser != "undefined" && Browser.mainLoop.func) {
     Browser.mainLoop.resume();
    }
    var asyncWasmReturnValue, isError = false;
    try {
     asyncWasmReturnValue = Asyncify.doRewind(Asyncify.currData);
    } catch (err) {
     asyncWasmReturnValue = err;
     isError = true;
    }
    var handled = false;
    if (!Asyncify.currData) {
     var asyncPromiseHandlers = Asyncify.asyncPromiseHandlers;
     if (asyncPromiseHandlers) {
      Asyncify.asyncPromiseHandlers = null;
      (isError ? asyncPromiseHandlers.reject : asyncPromiseHandlers.resolve)(asyncWasmReturnValue);
      handled = true;
     }
    }
    if (isError && !handled) {
     throw asyncWasmReturnValue;
    }
   });
   reachedAfterCallback = true;
   if (!reachedCallback) {
    Asyncify.state = Asyncify.State.Unwinding;
    Asyncify.currData = Asyncify.allocateData();
    if (typeof Browser != "undefined" && Browser.mainLoop.func) {
     Browser.mainLoop.pause();
    }
    runAndAbortIfError(() => _asyncify_start_unwind(Asyncify.currData));
   }
  } else if (Asyncify.state === Asyncify.State.Rewinding) {
   Asyncify.state = Asyncify.State.Normal;
   runAndAbortIfError(_asyncify_stop_rewind);
   _free(Asyncify.currData);
   Asyncify.currData = null;
   Asyncify.sleepCallbacks.forEach(callUserCallback);
  } else {
   abort(`invalid state: ${Asyncify.state}`);
  }
  return Asyncify.handleSleepReturnValue;
 },
 handleAsync(startAsync) {
  return Asyncify.handleSleep(wakeUp => {
   startAsync().then(wakeUp);
  });
 }
};

var getCFunc = ident => {
 var func = Module["_" + ident];
 return func;
};

var stringToUTF8OnStack = str => {
 var size = lengthBytesUTF8(str) + 1;
 var ret = stackAlloc(size);
 stringToUTF8(str, ret, size);
 return ret;
};

/**
     * @param {string|null=} returnType
     * @param {Array=} argTypes
     * @param {Arguments|Array=} args
     * @param {Object=} opts
     */ var ccall = (ident, returnType, argTypes, args, opts) => {
 var toC = {
  "string": str => {
   var ret = 0;
   if (str !== null && str !== undefined && str !== 0) {
    ret = stringToUTF8OnStack(str);
   }
   return ret;
  },
  "array": arr => {
   var ret = stackAlloc(arr.length);
   writeArrayToMemory(arr, ret);
   return ret;
  }
 };
 function convertReturnValue(ret) {
  if (returnType === "string") {
   return UTF8ToString(ret);
  }
  if (returnType === "boolean") return Boolean(ret);
  return ret;
 }
 var func = getCFunc(ident);
 var cArgs = [];
 var stack = 0;
 if (args) {
  for (var i = 0; i < args.length; i++) {
   var converter = toC[argTypes[i]];
   if (converter) {
    if (stack === 0) stack = stackSave();
    cArgs[i] = converter(args[i]);
   } else {
    cArgs[i] = args[i];
   }
  }
 }
 var previousAsync = Asyncify.currData;
 var ret = func(...cArgs);
 function onDone(ret) {
  runtimeKeepalivePop();
  if (stack !== 0) stackRestore(stack);
  return convertReturnValue(ret);
 }
 var asyncMode = opts?.async;
 runtimeKeepalivePush();
 if (Asyncify.currData != previousAsync) {
  return Asyncify.whenDone().then(onDone);
 }
 ret = onDone(ret);
 if (asyncMode) return Promise.resolve(ret);
 return ret;
};

/**
     * @param {string=} returnType
     * @param {Array=} argTypes
     * @param {Object=} opts
     */ var cwrap = (ident, returnType, argTypes, opts) => {
 var numericArgs = !argTypes || argTypes.every(type => type === "number" || type === "boolean");
 var numericRet = returnType !== "string";
 if (numericRet && numericArgs && !opts) {
  return getCFunc(ident);
 }
 return (...args) => ccall(ident, returnType, argTypes, args, opts);
};

PThread.init();

FS.createPreloadedFile = FS_createPreloadedFile;

FS.staticInit();

var proxiedFunctionTable = [ _proc_exit, exitOnMainThread, pthreadCreateProxied, ___syscall__newselect, ___syscall_dup3, ___syscall_faccessat, ___syscall_fcntl64, ___syscall_fstat64, ___syscall_getdents64, ___syscall_ioctl, ___syscall_lstat64, ___syscall_mkdirat, ___syscall_newfstatat, ___syscall_openat, ___syscall_renameat, ___syscall_rmdir, ___syscall_stat64, ___syscall_unlinkat, _environ_get, _environ_sizes_get, _fd_close, _fd_fdstat_get, _fd_read, _fd_seek, _fd_write ];

var wasmImports = {
 /** @export */ __assert_fail: ___assert_fail,
 /** @export */ __emscripten_init_main_thread_js: ___emscripten_init_main_thread_js,
 /** @export */ __emscripten_thread_cleanup: ___emscripten_thread_cleanup,
 /** @export */ __pthread_create_js: ___pthread_create_js,
 /** @export */ __syscall__newselect: ___syscall__newselect,
 /** @export */ __syscall_dup3: ___syscall_dup3,
 /** @export */ __syscall_faccessat: ___syscall_faccessat,
 /** @export */ __syscall_fcntl64: ___syscall_fcntl64,
 /** @export */ __syscall_fstat64: ___syscall_fstat64,
 /** @export */ __syscall_getdents64: ___syscall_getdents64,
 /** @export */ __syscall_ioctl: ___syscall_ioctl,
 /** @export */ __syscall_lstat64: ___syscall_lstat64,
 /** @export */ __syscall_mkdirat: ___syscall_mkdirat,
 /** @export */ __syscall_newfstatat: ___syscall_newfstatat,
 /** @export */ __syscall_openat: ___syscall_openat,
 /** @export */ __syscall_renameat: ___syscall_renameat,
 /** @export */ __syscall_rmdir: ___syscall_rmdir,
 /** @export */ __syscall_stat64: ___syscall_stat64,
 /** @export */ __syscall_unlinkat: ___syscall_unlinkat,
 /** @export */ _emscripten_get_now_is_monotonic: __emscripten_get_now_is_monotonic,
 /** @export */ _emscripten_notify_mailbox_postmessage: __emscripten_notify_mailbox_postmessage,
 /** @export */ _emscripten_receive_on_main_thread_js: __emscripten_receive_on_main_thread_js,
 /** @export */ _emscripten_thread_mailbox_await: __emscripten_thread_mailbox_await,
 /** @export */ _emscripten_thread_set_strongref: __emscripten_thread_set_strongref,
 /** @export */ _emscripten_throw_longjmp: __emscripten_throw_longjmp,
 /** @export */ _gmtime_js: __gmtime_js,
 /** @export */ _localtime_js: __localtime_js,
 /** @export */ _mktime_js: __mktime_js,
 /** @export */ _tzset_js: __tzset_js,
 /** @export */ abort: _abort,
 /** @export */ emscripten_check_blocking_allowed: _emscripten_check_blocking_allowed,
 /** @export */ emscripten_date_now: _emscripten_date_now,
 /** @export */ emscripten_exit_with_live_runtime: _emscripten_exit_with_live_runtime,
 /** @export */ emscripten_get_heap_max: _emscripten_get_heap_max,
 /** @export */ emscripten_get_now: _emscripten_get_now,
 /** @export */ emscripten_num_logical_cores: _emscripten_num_logical_cores,
 /** @export */ emscripten_resize_heap: _emscripten_resize_heap,
 /** @export */ environ_get: _environ_get,
 /** @export */ environ_sizes_get: _environ_sizes_get,
 /** @export */ exit: _exit,
 /** @export */ fd_close: _fd_close,
 /** @export */ fd_fdstat_get: _fd_fdstat_get,
 /** @export */ fd_read: _fd_read,
 /** @export */ fd_seek: _fd_seek,
 /** @export */ fd_write: _fd_write,
 /** @export */ invoke_i: invoke_i,
 /** @export */ invoke_ii: invoke_ii,
 /** @export */ invoke_iii: invoke_iii,
 /** @export */ invoke_iiii: invoke_iiii,
 /** @export */ invoke_iiiii: invoke_iiiii,
 /** @export */ invoke_iiiiii: invoke_iiiiii,
 /** @export */ invoke_iiiiiiiii: invoke_iiiiiiiii,
 /** @export */ invoke_iiiiiiiiii: invoke_iiiiiiiiii,
 /** @export */ invoke_iiiiiiiiiiii: invoke_iiiiiiiiiiii,
 /** @export */ invoke_iiiijj: invoke_iiiijj,
 /** @export */ invoke_iij: invoke_iij,
 /** @export */ invoke_ij: invoke_ij,
 /** @export */ invoke_jij: invoke_jij,
 /** @export */ invoke_v: invoke_v,
 /** @export */ invoke_vi: invoke_vi,
 /** @export */ invoke_vii: invoke_vii,
 /** @export */ invoke_viii: invoke_viii,
 /** @export */ invoke_viiid: invoke_viiid,
 /** @export */ invoke_viiii: invoke_viiii,
 /** @export */ invoke_viiiii: invoke_viiiii,
 /** @export */ invoke_viiiiii: invoke_viiiiii,
 /** @export */ invoke_viiiiiii: invoke_viiiiiii,
 /** @export */ invoke_viiiiiiii: invoke_viiiiiiii,
 /** @export */ invoke_viiiiiiiii: invoke_viiiiiiiii,
 /** @export */ invoke_viiiiiiiiiiiii: invoke_viiiiiiiiiiiii,
 /** @export */ invoke_viiiiiiiiiiiiiii: invoke_viiiiiiiiiiiiiii,
 /** @export */ jsfetch_close_js: jsfetch_close_js,
 /** @export */ jsfetch_open_js: jsfetch_open_js,
 /** @export */ jsfetch_read_js: jsfetch_read_js,
 /** @export */ libavjs_main_thread: libavjs_main_thread,
 /** @export */ libavjs_wait_reader: libavjs_wait_reader,
 /** @export */ memory: wasmMemory || Module["wasmMemory"],
 /** @export */ strftime: _strftime
};

var wasmExports = createWasm();

var ___wasm_call_ctors = () => (___wasm_call_ctors = wasmExports["__wasm_call_ctors"])();

var _ff_nothing = Module["_ff_nothing"] = () => (_ff_nothing = Module["_ff_nothing"] = wasmExports["ff_nothing"])();

var _AVFrame_crop_bottom = Module["_AVFrame_crop_bottom"] = a0 => (_AVFrame_crop_bottom = Module["_AVFrame_crop_bottom"] = wasmExports["AVFrame_crop_bottom"])(a0);

var _AVFrame_crop_bottom_s = Module["_AVFrame_crop_bottom_s"] = (a0, a1) => (_AVFrame_crop_bottom_s = Module["_AVFrame_crop_bottom_s"] = wasmExports["AVFrame_crop_bottom_s"])(a0, a1);

var _AVFrame_crop_left = Module["_AVFrame_crop_left"] = a0 => (_AVFrame_crop_left = Module["_AVFrame_crop_left"] = wasmExports["AVFrame_crop_left"])(a0);

var _AVFrame_crop_left_s = Module["_AVFrame_crop_left_s"] = (a0, a1) => (_AVFrame_crop_left_s = Module["_AVFrame_crop_left_s"] = wasmExports["AVFrame_crop_left_s"])(a0, a1);

var _AVFrame_crop_right = Module["_AVFrame_crop_right"] = a0 => (_AVFrame_crop_right = Module["_AVFrame_crop_right"] = wasmExports["AVFrame_crop_right"])(a0);

var _AVFrame_crop_right_s = Module["_AVFrame_crop_right_s"] = (a0, a1) => (_AVFrame_crop_right_s = Module["_AVFrame_crop_right_s"] = wasmExports["AVFrame_crop_right_s"])(a0, a1);

var _AVFrame_crop_top = Module["_AVFrame_crop_top"] = a0 => (_AVFrame_crop_top = Module["_AVFrame_crop_top"] = wasmExports["AVFrame_crop_top"])(a0);

var _AVFrame_crop_top_s = Module["_AVFrame_crop_top_s"] = (a0, a1) => (_AVFrame_crop_top_s = Module["_AVFrame_crop_top_s"] = wasmExports["AVFrame_crop_top_s"])(a0, a1);

var _AVFrame_data_a = Module["_AVFrame_data_a"] = (a0, a1) => (_AVFrame_data_a = Module["_AVFrame_data_a"] = wasmExports["AVFrame_data_a"])(a0, a1);

var _AVFrame_data_a_s = Module["_AVFrame_data_a_s"] = (a0, a1, a2) => (_AVFrame_data_a_s = Module["_AVFrame_data_a_s"] = wasmExports["AVFrame_data_a_s"])(a0, a1, a2);

var _AVFrame_format = Module["_AVFrame_format"] = a0 => (_AVFrame_format = Module["_AVFrame_format"] = wasmExports["AVFrame_format"])(a0);

var _AVFrame_format_s = Module["_AVFrame_format_s"] = (a0, a1) => (_AVFrame_format_s = Module["_AVFrame_format_s"] = wasmExports["AVFrame_format_s"])(a0, a1);

var _AVFrame_height = Module["_AVFrame_height"] = a0 => (_AVFrame_height = Module["_AVFrame_height"] = wasmExports["AVFrame_height"])(a0);

var _AVFrame_height_s = Module["_AVFrame_height_s"] = (a0, a1) => (_AVFrame_height_s = Module["_AVFrame_height_s"] = wasmExports["AVFrame_height_s"])(a0, a1);

var _AVFrame_key_frame = Module["_AVFrame_key_frame"] = a0 => (_AVFrame_key_frame = Module["_AVFrame_key_frame"] = wasmExports["AVFrame_key_frame"])(a0);

var _AVFrame_key_frame_s = Module["_AVFrame_key_frame_s"] = (a0, a1) => (_AVFrame_key_frame_s = Module["_AVFrame_key_frame_s"] = wasmExports["AVFrame_key_frame_s"])(a0, a1);

var _AVFrame_linesize_a = Module["_AVFrame_linesize_a"] = (a0, a1) => (_AVFrame_linesize_a = Module["_AVFrame_linesize_a"] = wasmExports["AVFrame_linesize_a"])(a0, a1);

var _AVFrame_linesize_a_s = Module["_AVFrame_linesize_a_s"] = (a0, a1, a2) => (_AVFrame_linesize_a_s = Module["_AVFrame_linesize_a_s"] = wasmExports["AVFrame_linesize_a_s"])(a0, a1, a2);

var _AVFrame_nb_samples = Module["_AVFrame_nb_samples"] = a0 => (_AVFrame_nb_samples = Module["_AVFrame_nb_samples"] = wasmExports["AVFrame_nb_samples"])(a0);

var _AVFrame_nb_samples_s = Module["_AVFrame_nb_samples_s"] = (a0, a1) => (_AVFrame_nb_samples_s = Module["_AVFrame_nb_samples_s"] = wasmExports["AVFrame_nb_samples_s"])(a0, a1);

var _AVFrame_pict_type = Module["_AVFrame_pict_type"] = a0 => (_AVFrame_pict_type = Module["_AVFrame_pict_type"] = wasmExports["AVFrame_pict_type"])(a0);

var _AVFrame_pict_type_s = Module["_AVFrame_pict_type_s"] = (a0, a1) => (_AVFrame_pict_type_s = Module["_AVFrame_pict_type_s"] = wasmExports["AVFrame_pict_type_s"])(a0, a1);

var _AVFrame_pts = Module["_AVFrame_pts"] = a0 => (_AVFrame_pts = Module["_AVFrame_pts"] = wasmExports["AVFrame_pts"])(a0);

var _AVFrame_ptshi = Module["_AVFrame_ptshi"] = a0 => (_AVFrame_ptshi = Module["_AVFrame_ptshi"] = wasmExports["AVFrame_ptshi"])(a0);

var _AVFrame_pts_s = Module["_AVFrame_pts_s"] = (a0, a1) => (_AVFrame_pts_s = Module["_AVFrame_pts_s"] = wasmExports["AVFrame_pts_s"])(a0, a1);

var _AVFrame_ptshi_s = Module["_AVFrame_ptshi_s"] = (a0, a1) => (_AVFrame_ptshi_s = Module["_AVFrame_ptshi_s"] = wasmExports["AVFrame_ptshi_s"])(a0, a1);

var _AVFrame_sample_rate = Module["_AVFrame_sample_rate"] = a0 => (_AVFrame_sample_rate = Module["_AVFrame_sample_rate"] = wasmExports["AVFrame_sample_rate"])(a0);

var _AVFrame_sample_rate_s = Module["_AVFrame_sample_rate_s"] = (a0, a1) => (_AVFrame_sample_rate_s = Module["_AVFrame_sample_rate_s"] = wasmExports["AVFrame_sample_rate_s"])(a0, a1);

var _AVFrame_width = Module["_AVFrame_width"] = a0 => (_AVFrame_width = Module["_AVFrame_width"] = wasmExports["AVFrame_width"])(a0);

var _AVFrame_width_s = Module["_AVFrame_width_s"] = (a0, a1) => (_AVFrame_width_s = Module["_AVFrame_width_s"] = wasmExports["AVFrame_width_s"])(a0, a1);

var _AVFrame_channel_layoutmask_s = Module["_AVFrame_channel_layoutmask_s"] = (a0, a1, a2) => (_AVFrame_channel_layoutmask_s = Module["_AVFrame_channel_layoutmask_s"] = wasmExports["AVFrame_channel_layoutmask_s"])(a0, a1, a2);

var _AVFrame_channel_layoutmask = Module["_AVFrame_channel_layoutmask"] = a0 => (_AVFrame_channel_layoutmask = Module["_AVFrame_channel_layoutmask"] = wasmExports["AVFrame_channel_layoutmask"])(a0);

var _AVFrame_channels = Module["_AVFrame_channels"] = a0 => (_AVFrame_channels = Module["_AVFrame_channels"] = wasmExports["AVFrame_channels"])(a0);

var _AVFrame_channels_s = Module["_AVFrame_channels_s"] = (a0, a1) => (_AVFrame_channels_s = Module["_AVFrame_channels_s"] = wasmExports["AVFrame_channels_s"])(a0, a1);

var _AVFrame_ch_layout_nb_channels = Module["_AVFrame_ch_layout_nb_channels"] = a0 => (_AVFrame_ch_layout_nb_channels = Module["_AVFrame_ch_layout_nb_channels"] = wasmExports["AVFrame_ch_layout_nb_channels"])(a0);

var _AVFrame_ch_layout_nb_channels_s = Module["_AVFrame_ch_layout_nb_channels_s"] = (a0, a1) => (_AVFrame_ch_layout_nb_channels_s = Module["_AVFrame_ch_layout_nb_channels_s"] = wasmExports["AVFrame_ch_layout_nb_channels_s"])(a0, a1);

var _AVFrame_channel_layout = Module["_AVFrame_channel_layout"] = a0 => (_AVFrame_channel_layout = Module["_AVFrame_channel_layout"] = wasmExports["AVFrame_channel_layout"])(a0);

var _AVFrame_channel_layouthi = Module["_AVFrame_channel_layouthi"] = a0 => (_AVFrame_channel_layouthi = Module["_AVFrame_channel_layouthi"] = wasmExports["AVFrame_channel_layouthi"])(a0);

var _AVFrame_channel_layout_s = Module["_AVFrame_channel_layout_s"] = (a0, a1) => (_AVFrame_channel_layout_s = Module["_AVFrame_channel_layout_s"] = wasmExports["AVFrame_channel_layout_s"])(a0, a1);

var _AVFrame_channel_layouthi_s = Module["_AVFrame_channel_layouthi_s"] = (a0, a1) => (_AVFrame_channel_layouthi_s = Module["_AVFrame_channel_layouthi_s"] = wasmExports["AVFrame_channel_layouthi_s"])(a0, a1);

var _AVFrame_sample_aspect_ratio_num = Module["_AVFrame_sample_aspect_ratio_num"] = a0 => (_AVFrame_sample_aspect_ratio_num = Module["_AVFrame_sample_aspect_ratio_num"] = wasmExports["AVFrame_sample_aspect_ratio_num"])(a0);

var _AVFrame_sample_aspect_ratio_den = Module["_AVFrame_sample_aspect_ratio_den"] = a0 => (_AVFrame_sample_aspect_ratio_den = Module["_AVFrame_sample_aspect_ratio_den"] = wasmExports["AVFrame_sample_aspect_ratio_den"])(a0);

var _AVFrame_sample_aspect_ratio_s = Module["_AVFrame_sample_aspect_ratio_s"] = (a0, a1, a2) => (_AVFrame_sample_aspect_ratio_s = Module["_AVFrame_sample_aspect_ratio_s"] = wasmExports["AVFrame_sample_aspect_ratio_s"])(a0, a1, a2);

var _AVPixFmtDescriptor_flags = Module["_AVPixFmtDescriptor_flags"] = a0 => (_AVPixFmtDescriptor_flags = Module["_AVPixFmtDescriptor_flags"] = wasmExports["AVPixFmtDescriptor_flags"])(a0);

var _AVPixFmtDescriptor_flags_s = Module["_AVPixFmtDescriptor_flags_s"] = (a0, a1, a2) => (_AVPixFmtDescriptor_flags_s = Module["_AVPixFmtDescriptor_flags_s"] = wasmExports["AVPixFmtDescriptor_flags_s"])(a0, a1, a2);

var _AVPixFmtDescriptor_nb_components = Module["_AVPixFmtDescriptor_nb_components"] = a0 => (_AVPixFmtDescriptor_nb_components = Module["_AVPixFmtDescriptor_nb_components"] = wasmExports["AVPixFmtDescriptor_nb_components"])(a0);

var _AVPixFmtDescriptor_nb_components_s = Module["_AVPixFmtDescriptor_nb_components_s"] = (a0, a1) => (_AVPixFmtDescriptor_nb_components_s = Module["_AVPixFmtDescriptor_nb_components_s"] = wasmExports["AVPixFmtDescriptor_nb_components_s"])(a0, a1);

var _AVPixFmtDescriptor_log2_chroma_h = Module["_AVPixFmtDescriptor_log2_chroma_h"] = a0 => (_AVPixFmtDescriptor_log2_chroma_h = Module["_AVPixFmtDescriptor_log2_chroma_h"] = wasmExports["AVPixFmtDescriptor_log2_chroma_h"])(a0);

var _AVPixFmtDescriptor_log2_chroma_h_s = Module["_AVPixFmtDescriptor_log2_chroma_h_s"] = (a0, a1) => (_AVPixFmtDescriptor_log2_chroma_h_s = Module["_AVPixFmtDescriptor_log2_chroma_h_s"] = wasmExports["AVPixFmtDescriptor_log2_chroma_h_s"])(a0, a1);

var _AVPixFmtDescriptor_log2_chroma_w = Module["_AVPixFmtDescriptor_log2_chroma_w"] = a0 => (_AVPixFmtDescriptor_log2_chroma_w = Module["_AVPixFmtDescriptor_log2_chroma_w"] = wasmExports["AVPixFmtDescriptor_log2_chroma_w"])(a0);

var _AVPixFmtDescriptor_log2_chroma_w_s = Module["_AVPixFmtDescriptor_log2_chroma_w_s"] = (a0, a1) => (_AVPixFmtDescriptor_log2_chroma_w_s = Module["_AVPixFmtDescriptor_log2_chroma_w_s"] = wasmExports["AVPixFmtDescriptor_log2_chroma_w_s"])(a0, a1);

var _AVPixFmtDescriptor_comp_depth = Module["_AVPixFmtDescriptor_comp_depth"] = (a0, a1) => (_AVPixFmtDescriptor_comp_depth = Module["_AVPixFmtDescriptor_comp_depth"] = wasmExports["AVPixFmtDescriptor_comp_depth"])(a0, a1);

var _av_opt_set_int_list_js = Module["_av_opt_set_int_list_js"] = (a0, a1, a2, a3, a4, a5) => (_av_opt_set_int_list_js = Module["_av_opt_set_int_list_js"] = wasmExports["av_opt_set_int_list_js"])(a0, a1, a2, a3, a4, a5);

var _AVCodec_sample_fmts = Module["_AVCodec_sample_fmts"] = a0 => (_AVCodec_sample_fmts = Module["_AVCodec_sample_fmts"] = wasmExports["AVCodec_sample_fmts"])(a0);

var _AVCodec_sample_fmts_s = Module["_AVCodec_sample_fmts_s"] = (a0, a1) => (_AVCodec_sample_fmts_s = Module["_AVCodec_sample_fmts_s"] = wasmExports["AVCodec_sample_fmts_s"])(a0, a1);

var _AVCodec_sample_fmts_a = Module["_AVCodec_sample_fmts_a"] = (a0, a1) => (_AVCodec_sample_fmts_a = Module["_AVCodec_sample_fmts_a"] = wasmExports["AVCodec_sample_fmts_a"])(a0, a1);

var _AVCodec_sample_fmts_a_s = Module["_AVCodec_sample_fmts_a_s"] = (a0, a1, a2) => (_AVCodec_sample_fmts_a_s = Module["_AVCodec_sample_fmts_a_s"] = wasmExports["AVCodec_sample_fmts_a_s"])(a0, a1, a2);

var _AVCodec_supported_samplerates = Module["_AVCodec_supported_samplerates"] = a0 => (_AVCodec_supported_samplerates = Module["_AVCodec_supported_samplerates"] = wasmExports["AVCodec_supported_samplerates"])(a0);

var _AVCodec_supported_samplerates_s = Module["_AVCodec_supported_samplerates_s"] = (a0, a1) => (_AVCodec_supported_samplerates_s = Module["_AVCodec_supported_samplerates_s"] = wasmExports["AVCodec_supported_samplerates_s"])(a0, a1);

var _AVCodec_supported_samplerates_a = Module["_AVCodec_supported_samplerates_a"] = (a0, a1) => (_AVCodec_supported_samplerates_a = Module["_AVCodec_supported_samplerates_a"] = wasmExports["AVCodec_supported_samplerates_a"])(a0, a1);

var _AVCodec_supported_samplerates_a_s = Module["_AVCodec_supported_samplerates_a_s"] = (a0, a1, a2) => (_AVCodec_supported_samplerates_a_s = Module["_AVCodec_supported_samplerates_a_s"] = wasmExports["AVCodec_supported_samplerates_a_s"])(a0, a1, a2);

var _AVCodec_type = Module["_AVCodec_type"] = a0 => (_AVCodec_type = Module["_AVCodec_type"] = wasmExports["AVCodec_type"])(a0);

var _AVCodec_type_s = Module["_AVCodec_type_s"] = (a0, a1) => (_AVCodec_type_s = Module["_AVCodec_type_s"] = wasmExports["AVCodec_type_s"])(a0, a1);

var _AVCodecContext_codec_id = Module["_AVCodecContext_codec_id"] = a0 => (_AVCodecContext_codec_id = Module["_AVCodecContext_codec_id"] = wasmExports["AVCodecContext_codec_id"])(a0);

var _AVCodecContext_codec_id_s = Module["_AVCodecContext_codec_id_s"] = (a0, a1) => (_AVCodecContext_codec_id_s = Module["_AVCodecContext_codec_id_s"] = wasmExports["AVCodecContext_codec_id_s"])(a0, a1);

var _AVCodecContext_codec_type = Module["_AVCodecContext_codec_type"] = a0 => (_AVCodecContext_codec_type = Module["_AVCodecContext_codec_type"] = wasmExports["AVCodecContext_codec_type"])(a0);

var _AVCodecContext_codec_type_s = Module["_AVCodecContext_codec_type_s"] = (a0, a1) => (_AVCodecContext_codec_type_s = Module["_AVCodecContext_codec_type_s"] = wasmExports["AVCodecContext_codec_type_s"])(a0, a1);

var _AVCodecContext_bit_rate = Module["_AVCodecContext_bit_rate"] = a0 => (_AVCodecContext_bit_rate = Module["_AVCodecContext_bit_rate"] = wasmExports["AVCodecContext_bit_rate"])(a0);

var _AVCodecContext_bit_ratehi = Module["_AVCodecContext_bit_ratehi"] = a0 => (_AVCodecContext_bit_ratehi = Module["_AVCodecContext_bit_ratehi"] = wasmExports["AVCodecContext_bit_ratehi"])(a0);

var _AVCodecContext_bit_rate_s = Module["_AVCodecContext_bit_rate_s"] = (a0, a1) => (_AVCodecContext_bit_rate_s = Module["_AVCodecContext_bit_rate_s"] = wasmExports["AVCodecContext_bit_rate_s"])(a0, a1);

var _AVCodecContext_bit_ratehi_s = Module["_AVCodecContext_bit_ratehi_s"] = (a0, a1) => (_AVCodecContext_bit_ratehi_s = Module["_AVCodecContext_bit_ratehi_s"] = wasmExports["AVCodecContext_bit_ratehi_s"])(a0, a1);

var _AVCodecContext_extradata = Module["_AVCodecContext_extradata"] = a0 => (_AVCodecContext_extradata = Module["_AVCodecContext_extradata"] = wasmExports["AVCodecContext_extradata"])(a0);

var _AVCodecContext_extradata_s = Module["_AVCodecContext_extradata_s"] = (a0, a1) => (_AVCodecContext_extradata_s = Module["_AVCodecContext_extradata_s"] = wasmExports["AVCodecContext_extradata_s"])(a0, a1);

var _AVCodecContext_extradata_size = Module["_AVCodecContext_extradata_size"] = a0 => (_AVCodecContext_extradata_size = Module["_AVCodecContext_extradata_size"] = wasmExports["AVCodecContext_extradata_size"])(a0);

var _AVCodecContext_extradata_size_s = Module["_AVCodecContext_extradata_size_s"] = (a0, a1) => (_AVCodecContext_extradata_size_s = Module["_AVCodecContext_extradata_size_s"] = wasmExports["AVCodecContext_extradata_size_s"])(a0, a1);

var _AVCodecContext_frame_size = Module["_AVCodecContext_frame_size"] = a0 => (_AVCodecContext_frame_size = Module["_AVCodecContext_frame_size"] = wasmExports["AVCodecContext_frame_size"])(a0);

var _AVCodecContext_frame_size_s = Module["_AVCodecContext_frame_size_s"] = (a0, a1) => (_AVCodecContext_frame_size_s = Module["_AVCodecContext_frame_size_s"] = wasmExports["AVCodecContext_frame_size_s"])(a0, a1);

var _AVCodecContext_gop_size = Module["_AVCodecContext_gop_size"] = a0 => (_AVCodecContext_gop_size = Module["_AVCodecContext_gop_size"] = wasmExports["AVCodecContext_gop_size"])(a0);

var _AVCodecContext_gop_size_s = Module["_AVCodecContext_gop_size_s"] = (a0, a1) => (_AVCodecContext_gop_size_s = Module["_AVCodecContext_gop_size_s"] = wasmExports["AVCodecContext_gop_size_s"])(a0, a1);

var _AVCodecContext_height = Module["_AVCodecContext_height"] = a0 => (_AVCodecContext_height = Module["_AVCodecContext_height"] = wasmExports["AVCodecContext_height"])(a0);

var _AVCodecContext_height_s = Module["_AVCodecContext_height_s"] = (a0, a1) => (_AVCodecContext_height_s = Module["_AVCodecContext_height_s"] = wasmExports["AVCodecContext_height_s"])(a0, a1);

var _AVCodecContext_keyint_min = Module["_AVCodecContext_keyint_min"] = a0 => (_AVCodecContext_keyint_min = Module["_AVCodecContext_keyint_min"] = wasmExports["AVCodecContext_keyint_min"])(a0);

var _AVCodecContext_keyint_min_s = Module["_AVCodecContext_keyint_min_s"] = (a0, a1) => (_AVCodecContext_keyint_min_s = Module["_AVCodecContext_keyint_min_s"] = wasmExports["AVCodecContext_keyint_min_s"])(a0, a1);

var _AVCodecContext_level = Module["_AVCodecContext_level"] = a0 => (_AVCodecContext_level = Module["_AVCodecContext_level"] = wasmExports["AVCodecContext_level"])(a0);

var _AVCodecContext_level_s = Module["_AVCodecContext_level_s"] = (a0, a1) => (_AVCodecContext_level_s = Module["_AVCodecContext_level_s"] = wasmExports["AVCodecContext_level_s"])(a0, a1);

var _AVCodecContext_max_b_frames = Module["_AVCodecContext_max_b_frames"] = a0 => (_AVCodecContext_max_b_frames = Module["_AVCodecContext_max_b_frames"] = wasmExports["AVCodecContext_max_b_frames"])(a0);

var _AVCodecContext_max_b_frames_s = Module["_AVCodecContext_max_b_frames_s"] = (a0, a1) => (_AVCodecContext_max_b_frames_s = Module["_AVCodecContext_max_b_frames_s"] = wasmExports["AVCodecContext_max_b_frames_s"])(a0, a1);

var _AVCodecContext_pix_fmt = Module["_AVCodecContext_pix_fmt"] = a0 => (_AVCodecContext_pix_fmt = Module["_AVCodecContext_pix_fmt"] = wasmExports["AVCodecContext_pix_fmt"])(a0);

var _AVCodecContext_pix_fmt_s = Module["_AVCodecContext_pix_fmt_s"] = (a0, a1) => (_AVCodecContext_pix_fmt_s = Module["_AVCodecContext_pix_fmt_s"] = wasmExports["AVCodecContext_pix_fmt_s"])(a0, a1);

var _AVCodecContext_profile = Module["_AVCodecContext_profile"] = a0 => (_AVCodecContext_profile = Module["_AVCodecContext_profile"] = wasmExports["AVCodecContext_profile"])(a0);

var _AVCodecContext_profile_s = Module["_AVCodecContext_profile_s"] = (a0, a1) => (_AVCodecContext_profile_s = Module["_AVCodecContext_profile_s"] = wasmExports["AVCodecContext_profile_s"])(a0, a1);

var _AVCodecContext_rc_max_rate = Module["_AVCodecContext_rc_max_rate"] = a0 => (_AVCodecContext_rc_max_rate = Module["_AVCodecContext_rc_max_rate"] = wasmExports["AVCodecContext_rc_max_rate"])(a0);

var _AVCodecContext_rc_max_ratehi = Module["_AVCodecContext_rc_max_ratehi"] = a0 => (_AVCodecContext_rc_max_ratehi = Module["_AVCodecContext_rc_max_ratehi"] = wasmExports["AVCodecContext_rc_max_ratehi"])(a0);

var _AVCodecContext_rc_max_rate_s = Module["_AVCodecContext_rc_max_rate_s"] = (a0, a1) => (_AVCodecContext_rc_max_rate_s = Module["_AVCodecContext_rc_max_rate_s"] = wasmExports["AVCodecContext_rc_max_rate_s"])(a0, a1);

var _AVCodecContext_rc_max_ratehi_s = Module["_AVCodecContext_rc_max_ratehi_s"] = (a0, a1) => (_AVCodecContext_rc_max_ratehi_s = Module["_AVCodecContext_rc_max_ratehi_s"] = wasmExports["AVCodecContext_rc_max_ratehi_s"])(a0, a1);

var _AVCodecContext_rc_min_rate = Module["_AVCodecContext_rc_min_rate"] = a0 => (_AVCodecContext_rc_min_rate = Module["_AVCodecContext_rc_min_rate"] = wasmExports["AVCodecContext_rc_min_rate"])(a0);

var _AVCodecContext_rc_min_ratehi = Module["_AVCodecContext_rc_min_ratehi"] = a0 => (_AVCodecContext_rc_min_ratehi = Module["_AVCodecContext_rc_min_ratehi"] = wasmExports["AVCodecContext_rc_min_ratehi"])(a0);

var _AVCodecContext_rc_min_rate_s = Module["_AVCodecContext_rc_min_rate_s"] = (a0, a1) => (_AVCodecContext_rc_min_rate_s = Module["_AVCodecContext_rc_min_rate_s"] = wasmExports["AVCodecContext_rc_min_rate_s"])(a0, a1);

var _AVCodecContext_rc_min_ratehi_s = Module["_AVCodecContext_rc_min_ratehi_s"] = (a0, a1) => (_AVCodecContext_rc_min_ratehi_s = Module["_AVCodecContext_rc_min_ratehi_s"] = wasmExports["AVCodecContext_rc_min_ratehi_s"])(a0, a1);

var _AVCodecContext_sample_fmt = Module["_AVCodecContext_sample_fmt"] = a0 => (_AVCodecContext_sample_fmt = Module["_AVCodecContext_sample_fmt"] = wasmExports["AVCodecContext_sample_fmt"])(a0);

var _AVCodecContext_sample_fmt_s = Module["_AVCodecContext_sample_fmt_s"] = (a0, a1) => (_AVCodecContext_sample_fmt_s = Module["_AVCodecContext_sample_fmt_s"] = wasmExports["AVCodecContext_sample_fmt_s"])(a0, a1);

var _AVCodecContext_sample_rate = Module["_AVCodecContext_sample_rate"] = a0 => (_AVCodecContext_sample_rate = Module["_AVCodecContext_sample_rate"] = wasmExports["AVCodecContext_sample_rate"])(a0);

var _AVCodecContext_sample_rate_s = Module["_AVCodecContext_sample_rate_s"] = (a0, a1) => (_AVCodecContext_sample_rate_s = Module["_AVCodecContext_sample_rate_s"] = wasmExports["AVCodecContext_sample_rate_s"])(a0, a1);

var _AVCodecContext_qmax = Module["_AVCodecContext_qmax"] = a0 => (_AVCodecContext_qmax = Module["_AVCodecContext_qmax"] = wasmExports["AVCodecContext_qmax"])(a0);

var _AVCodecContext_qmax_s = Module["_AVCodecContext_qmax_s"] = (a0, a1) => (_AVCodecContext_qmax_s = Module["_AVCodecContext_qmax_s"] = wasmExports["AVCodecContext_qmax_s"])(a0, a1);

var _AVCodecContext_qmin = Module["_AVCodecContext_qmin"] = a0 => (_AVCodecContext_qmin = Module["_AVCodecContext_qmin"] = wasmExports["AVCodecContext_qmin"])(a0);

var _AVCodecContext_qmin_s = Module["_AVCodecContext_qmin_s"] = (a0, a1) => (_AVCodecContext_qmin_s = Module["_AVCodecContext_qmin_s"] = wasmExports["AVCodecContext_qmin_s"])(a0, a1);

var _AVCodecContext_width = Module["_AVCodecContext_width"] = a0 => (_AVCodecContext_width = Module["_AVCodecContext_width"] = wasmExports["AVCodecContext_width"])(a0);

var _AVCodecContext_width_s = Module["_AVCodecContext_width_s"] = (a0, a1) => (_AVCodecContext_width_s = Module["_AVCodecContext_width_s"] = wasmExports["AVCodecContext_width_s"])(a0, a1);

var _AVCodecContext_channel_layoutmask_s = Module["_AVCodecContext_channel_layoutmask_s"] = (a0, a1, a2) => (_AVCodecContext_channel_layoutmask_s = Module["_AVCodecContext_channel_layoutmask_s"] = wasmExports["AVCodecContext_channel_layoutmask_s"])(a0, a1, a2);

var _AVCodecContext_channel_layoutmask = Module["_AVCodecContext_channel_layoutmask"] = a0 => (_AVCodecContext_channel_layoutmask = Module["_AVCodecContext_channel_layoutmask"] = wasmExports["AVCodecContext_channel_layoutmask"])(a0);

var _AVCodecContext_channels = Module["_AVCodecContext_channels"] = a0 => (_AVCodecContext_channels = Module["_AVCodecContext_channels"] = wasmExports["AVCodecContext_channels"])(a0);

var _AVCodecContext_channels_s = Module["_AVCodecContext_channels_s"] = (a0, a1) => (_AVCodecContext_channels_s = Module["_AVCodecContext_channels_s"] = wasmExports["AVCodecContext_channels_s"])(a0, a1);

var _AVCodecContext_ch_layout_nb_channels = Module["_AVCodecContext_ch_layout_nb_channels"] = a0 => (_AVCodecContext_ch_layout_nb_channels = Module["_AVCodecContext_ch_layout_nb_channels"] = wasmExports["AVCodecContext_ch_layout_nb_channels"])(a0);

var _AVCodecContext_ch_layout_nb_channels_s = Module["_AVCodecContext_ch_layout_nb_channels_s"] = (a0, a1) => (_AVCodecContext_ch_layout_nb_channels_s = Module["_AVCodecContext_ch_layout_nb_channels_s"] = wasmExports["AVCodecContext_ch_layout_nb_channels_s"])(a0, a1);

var _AVCodecContext_channel_layout = Module["_AVCodecContext_channel_layout"] = a0 => (_AVCodecContext_channel_layout = Module["_AVCodecContext_channel_layout"] = wasmExports["AVCodecContext_channel_layout"])(a0);

var _AVCodecContext_channel_layouthi = Module["_AVCodecContext_channel_layouthi"] = a0 => (_AVCodecContext_channel_layouthi = Module["_AVCodecContext_channel_layouthi"] = wasmExports["AVCodecContext_channel_layouthi"])(a0);

var _AVCodecContext_channel_layout_s = Module["_AVCodecContext_channel_layout_s"] = (a0, a1) => (_AVCodecContext_channel_layout_s = Module["_AVCodecContext_channel_layout_s"] = wasmExports["AVCodecContext_channel_layout_s"])(a0, a1);

var _AVCodecContext_channel_layouthi_s = Module["_AVCodecContext_channel_layouthi_s"] = (a0, a1) => (_AVCodecContext_channel_layouthi_s = Module["_AVCodecContext_channel_layouthi_s"] = wasmExports["AVCodecContext_channel_layouthi_s"])(a0, a1);

var _AVCodecContext_framerate_num = Module["_AVCodecContext_framerate_num"] = a0 => (_AVCodecContext_framerate_num = Module["_AVCodecContext_framerate_num"] = wasmExports["AVCodecContext_framerate_num"])(a0);

var _AVCodecContext_framerate_den = Module["_AVCodecContext_framerate_den"] = a0 => (_AVCodecContext_framerate_den = Module["_AVCodecContext_framerate_den"] = wasmExports["AVCodecContext_framerate_den"])(a0);

var _AVCodecContext_framerate_num_s = Module["_AVCodecContext_framerate_num_s"] = (a0, a1) => (_AVCodecContext_framerate_num_s = Module["_AVCodecContext_framerate_num_s"] = wasmExports["AVCodecContext_framerate_num_s"])(a0, a1);

var _AVCodecContext_framerate_den_s = Module["_AVCodecContext_framerate_den_s"] = (a0, a1) => (_AVCodecContext_framerate_den_s = Module["_AVCodecContext_framerate_den_s"] = wasmExports["AVCodecContext_framerate_den_s"])(a0, a1);

var _AVCodecContext_framerate_s = Module["_AVCodecContext_framerate_s"] = (a0, a1, a2) => (_AVCodecContext_framerate_s = Module["_AVCodecContext_framerate_s"] = wasmExports["AVCodecContext_framerate_s"])(a0, a1, a2);

var _AVCodecContext_sample_aspect_ratio_num = Module["_AVCodecContext_sample_aspect_ratio_num"] = a0 => (_AVCodecContext_sample_aspect_ratio_num = Module["_AVCodecContext_sample_aspect_ratio_num"] = wasmExports["AVCodecContext_sample_aspect_ratio_num"])(a0);

var _AVCodecContext_sample_aspect_ratio_den = Module["_AVCodecContext_sample_aspect_ratio_den"] = a0 => (_AVCodecContext_sample_aspect_ratio_den = Module["_AVCodecContext_sample_aspect_ratio_den"] = wasmExports["AVCodecContext_sample_aspect_ratio_den"])(a0);

var _AVCodecContext_sample_aspect_ratio_num_s = Module["_AVCodecContext_sample_aspect_ratio_num_s"] = (a0, a1) => (_AVCodecContext_sample_aspect_ratio_num_s = Module["_AVCodecContext_sample_aspect_ratio_num_s"] = wasmExports["AVCodecContext_sample_aspect_ratio_num_s"])(a0, a1);

var _AVCodecContext_sample_aspect_ratio_den_s = Module["_AVCodecContext_sample_aspect_ratio_den_s"] = (a0, a1) => (_AVCodecContext_sample_aspect_ratio_den_s = Module["_AVCodecContext_sample_aspect_ratio_den_s"] = wasmExports["AVCodecContext_sample_aspect_ratio_den_s"])(a0, a1);

var _AVCodecContext_sample_aspect_ratio_s = Module["_AVCodecContext_sample_aspect_ratio_s"] = (a0, a1, a2) => (_AVCodecContext_sample_aspect_ratio_s = Module["_AVCodecContext_sample_aspect_ratio_s"] = wasmExports["AVCodecContext_sample_aspect_ratio_s"])(a0, a1, a2);

var _AVCodecContext_time_base_s = Module["_AVCodecContext_time_base_s"] = (a0, a1, a2) => (_AVCodecContext_time_base_s = Module["_AVCodecContext_time_base_s"] = wasmExports["AVCodecContext_time_base_s"])(a0, a1, a2);

var _AVCodecDescriptor_id = Module["_AVCodecDescriptor_id"] = a0 => (_AVCodecDescriptor_id = Module["_AVCodecDescriptor_id"] = wasmExports["AVCodecDescriptor_id"])(a0);

var _AVCodecDescriptor_id_s = Module["_AVCodecDescriptor_id_s"] = (a0, a1) => (_AVCodecDescriptor_id_s = Module["_AVCodecDescriptor_id_s"] = wasmExports["AVCodecDescriptor_id_s"])(a0, a1);

var _AVCodecDescriptor_long_name = Module["_AVCodecDescriptor_long_name"] = a0 => (_AVCodecDescriptor_long_name = Module["_AVCodecDescriptor_long_name"] = wasmExports["AVCodecDescriptor_long_name"])(a0);

var _AVCodecDescriptor_long_name_s = Module["_AVCodecDescriptor_long_name_s"] = (a0, a1) => (_AVCodecDescriptor_long_name_s = Module["_AVCodecDescriptor_long_name_s"] = wasmExports["AVCodecDescriptor_long_name_s"])(a0, a1);

var _AVCodecDescriptor_mime_types_a = Module["_AVCodecDescriptor_mime_types_a"] = (a0, a1) => (_AVCodecDescriptor_mime_types_a = Module["_AVCodecDescriptor_mime_types_a"] = wasmExports["AVCodecDescriptor_mime_types_a"])(a0, a1);

var _AVCodecDescriptor_mime_types_a_s = Module["_AVCodecDescriptor_mime_types_a_s"] = (a0, a1, a2) => (_AVCodecDescriptor_mime_types_a_s = Module["_AVCodecDescriptor_mime_types_a_s"] = wasmExports["AVCodecDescriptor_mime_types_a_s"])(a0, a1, a2);

var _AVCodecDescriptor_name = Module["_AVCodecDescriptor_name"] = a0 => (_AVCodecDescriptor_name = Module["_AVCodecDescriptor_name"] = wasmExports["AVCodecDescriptor_name"])(a0);

var _AVCodecDescriptor_name_s = Module["_AVCodecDescriptor_name_s"] = (a0, a1) => (_AVCodecDescriptor_name_s = Module["_AVCodecDescriptor_name_s"] = wasmExports["AVCodecDescriptor_name_s"])(a0, a1);

var _AVCodecDescriptor_props = Module["_AVCodecDescriptor_props"] = a0 => (_AVCodecDescriptor_props = Module["_AVCodecDescriptor_props"] = wasmExports["AVCodecDescriptor_props"])(a0);

var _AVCodecDescriptor_props_s = Module["_AVCodecDescriptor_props_s"] = (a0, a1) => (_AVCodecDescriptor_props_s = Module["_AVCodecDescriptor_props_s"] = wasmExports["AVCodecDescriptor_props_s"])(a0, a1);

var _AVCodecDescriptor_type = Module["_AVCodecDescriptor_type"] = a0 => (_AVCodecDescriptor_type = Module["_AVCodecDescriptor_type"] = wasmExports["AVCodecDescriptor_type"])(a0);

var _AVCodecDescriptor_type_s = Module["_AVCodecDescriptor_type_s"] = (a0, a1) => (_AVCodecDescriptor_type_s = Module["_AVCodecDescriptor_type_s"] = wasmExports["AVCodecDescriptor_type_s"])(a0, a1);

var _AVCodecParameters_codec_id = Module["_AVCodecParameters_codec_id"] = a0 => (_AVCodecParameters_codec_id = Module["_AVCodecParameters_codec_id"] = wasmExports["AVCodecParameters_codec_id"])(a0);

var _AVCodecParameters_codec_id_s = Module["_AVCodecParameters_codec_id_s"] = (a0, a1) => (_AVCodecParameters_codec_id_s = Module["_AVCodecParameters_codec_id_s"] = wasmExports["AVCodecParameters_codec_id_s"])(a0, a1);

var _AVCodecParameters_codec_tag = Module["_AVCodecParameters_codec_tag"] = a0 => (_AVCodecParameters_codec_tag = Module["_AVCodecParameters_codec_tag"] = wasmExports["AVCodecParameters_codec_tag"])(a0);

var _AVCodecParameters_codec_tag_s = Module["_AVCodecParameters_codec_tag_s"] = (a0, a1) => (_AVCodecParameters_codec_tag_s = Module["_AVCodecParameters_codec_tag_s"] = wasmExports["AVCodecParameters_codec_tag_s"])(a0, a1);

var _AVCodecParameters_codec_type = Module["_AVCodecParameters_codec_type"] = a0 => (_AVCodecParameters_codec_type = Module["_AVCodecParameters_codec_type"] = wasmExports["AVCodecParameters_codec_type"])(a0);

var _AVCodecParameters_codec_type_s = Module["_AVCodecParameters_codec_type_s"] = (a0, a1) => (_AVCodecParameters_codec_type_s = Module["_AVCodecParameters_codec_type_s"] = wasmExports["AVCodecParameters_codec_type_s"])(a0, a1);

var _AVCodecParameters_extradata = Module["_AVCodecParameters_extradata"] = a0 => (_AVCodecParameters_extradata = Module["_AVCodecParameters_extradata"] = wasmExports["AVCodecParameters_extradata"])(a0);

var _AVCodecParameters_extradata_s = Module["_AVCodecParameters_extradata_s"] = (a0, a1) => (_AVCodecParameters_extradata_s = Module["_AVCodecParameters_extradata_s"] = wasmExports["AVCodecParameters_extradata_s"])(a0, a1);

var _AVCodecParameters_extradata_size = Module["_AVCodecParameters_extradata_size"] = a0 => (_AVCodecParameters_extradata_size = Module["_AVCodecParameters_extradata_size"] = wasmExports["AVCodecParameters_extradata_size"])(a0);

var _AVCodecParameters_extradata_size_s = Module["_AVCodecParameters_extradata_size_s"] = (a0, a1) => (_AVCodecParameters_extradata_size_s = Module["_AVCodecParameters_extradata_size_s"] = wasmExports["AVCodecParameters_extradata_size_s"])(a0, a1);

var _AVCodecParameters_format = Module["_AVCodecParameters_format"] = a0 => (_AVCodecParameters_format = Module["_AVCodecParameters_format"] = wasmExports["AVCodecParameters_format"])(a0);

var _AVCodecParameters_format_s = Module["_AVCodecParameters_format_s"] = (a0, a1) => (_AVCodecParameters_format_s = Module["_AVCodecParameters_format_s"] = wasmExports["AVCodecParameters_format_s"])(a0, a1);

var _AVCodecParameters_bit_rate = Module["_AVCodecParameters_bit_rate"] = a0 => (_AVCodecParameters_bit_rate = Module["_AVCodecParameters_bit_rate"] = wasmExports["AVCodecParameters_bit_rate"])(a0);

var _AVCodecParameters_bit_rate_s = Module["_AVCodecParameters_bit_rate_s"] = (a0, a1, a2) => (_AVCodecParameters_bit_rate_s = Module["_AVCodecParameters_bit_rate_s"] = wasmExports["AVCodecParameters_bit_rate_s"])(a0, a1, a2);

var _AVCodecParameters_profile = Module["_AVCodecParameters_profile"] = a0 => (_AVCodecParameters_profile = Module["_AVCodecParameters_profile"] = wasmExports["AVCodecParameters_profile"])(a0);

var _AVCodecParameters_profile_s = Module["_AVCodecParameters_profile_s"] = (a0, a1) => (_AVCodecParameters_profile_s = Module["_AVCodecParameters_profile_s"] = wasmExports["AVCodecParameters_profile_s"])(a0, a1);

var _AVCodecParameters_level = Module["_AVCodecParameters_level"] = a0 => (_AVCodecParameters_level = Module["_AVCodecParameters_level"] = wasmExports["AVCodecParameters_level"])(a0);

var _AVCodecParameters_level_s = Module["_AVCodecParameters_level_s"] = (a0, a1) => (_AVCodecParameters_level_s = Module["_AVCodecParameters_level_s"] = wasmExports["AVCodecParameters_level_s"])(a0, a1);

var _AVCodecParameters_width = Module["_AVCodecParameters_width"] = a0 => (_AVCodecParameters_width = Module["_AVCodecParameters_width"] = wasmExports["AVCodecParameters_width"])(a0);

var _AVCodecParameters_width_s = Module["_AVCodecParameters_width_s"] = (a0, a1) => (_AVCodecParameters_width_s = Module["_AVCodecParameters_width_s"] = wasmExports["AVCodecParameters_width_s"])(a0, a1);

var _AVCodecParameters_height = Module["_AVCodecParameters_height"] = a0 => (_AVCodecParameters_height = Module["_AVCodecParameters_height"] = wasmExports["AVCodecParameters_height"])(a0);

var _AVCodecParameters_height_s = Module["_AVCodecParameters_height_s"] = (a0, a1) => (_AVCodecParameters_height_s = Module["_AVCodecParameters_height_s"] = wasmExports["AVCodecParameters_height_s"])(a0, a1);

var _AVCodecParameters_color_range = Module["_AVCodecParameters_color_range"] = a0 => (_AVCodecParameters_color_range = Module["_AVCodecParameters_color_range"] = wasmExports["AVCodecParameters_color_range"])(a0);

var _AVCodecParameters_color_range_s = Module["_AVCodecParameters_color_range_s"] = (a0, a1) => (_AVCodecParameters_color_range_s = Module["_AVCodecParameters_color_range_s"] = wasmExports["AVCodecParameters_color_range_s"])(a0, a1);

var _AVCodecParameters_color_primaries = Module["_AVCodecParameters_color_primaries"] = a0 => (_AVCodecParameters_color_primaries = Module["_AVCodecParameters_color_primaries"] = wasmExports["AVCodecParameters_color_primaries"])(a0);

var _AVCodecParameters_color_primaries_s = Module["_AVCodecParameters_color_primaries_s"] = (a0, a1) => (_AVCodecParameters_color_primaries_s = Module["_AVCodecParameters_color_primaries_s"] = wasmExports["AVCodecParameters_color_primaries_s"])(a0, a1);

var _AVCodecParameters_color_trc = Module["_AVCodecParameters_color_trc"] = a0 => (_AVCodecParameters_color_trc = Module["_AVCodecParameters_color_trc"] = wasmExports["AVCodecParameters_color_trc"])(a0);

var _AVCodecParameters_color_trc_s = Module["_AVCodecParameters_color_trc_s"] = (a0, a1) => (_AVCodecParameters_color_trc_s = Module["_AVCodecParameters_color_trc_s"] = wasmExports["AVCodecParameters_color_trc_s"])(a0, a1);

var _AVCodecParameters_color_space = Module["_AVCodecParameters_color_space"] = a0 => (_AVCodecParameters_color_space = Module["_AVCodecParameters_color_space"] = wasmExports["AVCodecParameters_color_space"])(a0);

var _AVCodecParameters_color_space_s = Module["_AVCodecParameters_color_space_s"] = (a0, a1) => (_AVCodecParameters_color_space_s = Module["_AVCodecParameters_color_space_s"] = wasmExports["AVCodecParameters_color_space_s"])(a0, a1);

var _AVCodecParameters_chroma_location = Module["_AVCodecParameters_chroma_location"] = a0 => (_AVCodecParameters_chroma_location = Module["_AVCodecParameters_chroma_location"] = wasmExports["AVCodecParameters_chroma_location"])(a0);

var _AVCodecParameters_chroma_location_s = Module["_AVCodecParameters_chroma_location_s"] = (a0, a1) => (_AVCodecParameters_chroma_location_s = Module["_AVCodecParameters_chroma_location_s"] = wasmExports["AVCodecParameters_chroma_location_s"])(a0, a1);

var _AVCodecParameters_sample_rate = Module["_AVCodecParameters_sample_rate"] = a0 => (_AVCodecParameters_sample_rate = Module["_AVCodecParameters_sample_rate"] = wasmExports["AVCodecParameters_sample_rate"])(a0);

var _AVCodecParameters_sample_rate_s = Module["_AVCodecParameters_sample_rate_s"] = (a0, a1) => (_AVCodecParameters_sample_rate_s = Module["_AVCodecParameters_sample_rate_s"] = wasmExports["AVCodecParameters_sample_rate_s"])(a0, a1);

var _AVCodecParameters_channel_layoutmask_s = Module["_AVCodecParameters_channel_layoutmask_s"] = (a0, a1, a2) => (_AVCodecParameters_channel_layoutmask_s = Module["_AVCodecParameters_channel_layoutmask_s"] = wasmExports["AVCodecParameters_channel_layoutmask_s"])(a0, a1, a2);

var _AVCodecParameters_channel_layoutmask = Module["_AVCodecParameters_channel_layoutmask"] = a0 => (_AVCodecParameters_channel_layoutmask = Module["_AVCodecParameters_channel_layoutmask"] = wasmExports["AVCodecParameters_channel_layoutmask"])(a0);

var _AVCodecParameters_channels = Module["_AVCodecParameters_channels"] = a0 => (_AVCodecParameters_channels = Module["_AVCodecParameters_channels"] = wasmExports["AVCodecParameters_channels"])(a0);

var _AVCodecParameters_channels_s = Module["_AVCodecParameters_channels_s"] = (a0, a1) => (_AVCodecParameters_channels_s = Module["_AVCodecParameters_channels_s"] = wasmExports["AVCodecParameters_channels_s"])(a0, a1);

var _AVCodecParameters_ch_layout_nb_channels = Module["_AVCodecParameters_ch_layout_nb_channels"] = a0 => (_AVCodecParameters_ch_layout_nb_channels = Module["_AVCodecParameters_ch_layout_nb_channels"] = wasmExports["AVCodecParameters_ch_layout_nb_channels"])(a0);

var _AVCodecParameters_ch_layout_nb_channels_s = Module["_AVCodecParameters_ch_layout_nb_channels_s"] = (a0, a1) => (_AVCodecParameters_ch_layout_nb_channels_s = Module["_AVCodecParameters_ch_layout_nb_channels_s"] = wasmExports["AVCodecParameters_ch_layout_nb_channels_s"])(a0, a1);

var _AVPacket_data = Module["_AVPacket_data"] = a0 => (_AVPacket_data = Module["_AVPacket_data"] = wasmExports["AVPacket_data"])(a0);

var _AVPacket_data_s = Module["_AVPacket_data_s"] = (a0, a1) => (_AVPacket_data_s = Module["_AVPacket_data_s"] = wasmExports["AVPacket_data_s"])(a0, a1);

var _AVPacket_dts = Module["_AVPacket_dts"] = a0 => (_AVPacket_dts = Module["_AVPacket_dts"] = wasmExports["AVPacket_dts"])(a0);

var _AVPacket_dtshi = Module["_AVPacket_dtshi"] = a0 => (_AVPacket_dtshi = Module["_AVPacket_dtshi"] = wasmExports["AVPacket_dtshi"])(a0);

var _AVPacket_dts_s = Module["_AVPacket_dts_s"] = (a0, a1) => (_AVPacket_dts_s = Module["_AVPacket_dts_s"] = wasmExports["AVPacket_dts_s"])(a0, a1);

var _AVPacket_dtshi_s = Module["_AVPacket_dtshi_s"] = (a0, a1) => (_AVPacket_dtshi_s = Module["_AVPacket_dtshi_s"] = wasmExports["AVPacket_dtshi_s"])(a0, a1);

var _AVPacket_duration = Module["_AVPacket_duration"] = a0 => (_AVPacket_duration = Module["_AVPacket_duration"] = wasmExports["AVPacket_duration"])(a0);

var _AVPacket_durationhi = Module["_AVPacket_durationhi"] = a0 => (_AVPacket_durationhi = Module["_AVPacket_durationhi"] = wasmExports["AVPacket_durationhi"])(a0);

var _AVPacket_duration_s = Module["_AVPacket_duration_s"] = (a0, a1) => (_AVPacket_duration_s = Module["_AVPacket_duration_s"] = wasmExports["AVPacket_duration_s"])(a0, a1);

var _AVPacket_durationhi_s = Module["_AVPacket_durationhi_s"] = (a0, a1) => (_AVPacket_durationhi_s = Module["_AVPacket_durationhi_s"] = wasmExports["AVPacket_durationhi_s"])(a0, a1);

var _AVPacket_flags = Module["_AVPacket_flags"] = a0 => (_AVPacket_flags = Module["_AVPacket_flags"] = wasmExports["AVPacket_flags"])(a0);

var _AVPacket_flags_s = Module["_AVPacket_flags_s"] = (a0, a1) => (_AVPacket_flags_s = Module["_AVPacket_flags_s"] = wasmExports["AVPacket_flags_s"])(a0, a1);

var _AVPacket_pos = Module["_AVPacket_pos"] = a0 => (_AVPacket_pos = Module["_AVPacket_pos"] = wasmExports["AVPacket_pos"])(a0);

var _AVPacket_poshi = Module["_AVPacket_poshi"] = a0 => (_AVPacket_poshi = Module["_AVPacket_poshi"] = wasmExports["AVPacket_poshi"])(a0);

var _AVPacket_pos_s = Module["_AVPacket_pos_s"] = (a0, a1) => (_AVPacket_pos_s = Module["_AVPacket_pos_s"] = wasmExports["AVPacket_pos_s"])(a0, a1);

var _AVPacket_poshi_s = Module["_AVPacket_poshi_s"] = (a0, a1) => (_AVPacket_poshi_s = Module["_AVPacket_poshi_s"] = wasmExports["AVPacket_poshi_s"])(a0, a1);

var _AVPacket_pts = Module["_AVPacket_pts"] = a0 => (_AVPacket_pts = Module["_AVPacket_pts"] = wasmExports["AVPacket_pts"])(a0);

var _AVPacket_ptshi = Module["_AVPacket_ptshi"] = a0 => (_AVPacket_ptshi = Module["_AVPacket_ptshi"] = wasmExports["AVPacket_ptshi"])(a0);

var _AVPacket_pts_s = Module["_AVPacket_pts_s"] = (a0, a1) => (_AVPacket_pts_s = Module["_AVPacket_pts_s"] = wasmExports["AVPacket_pts_s"])(a0, a1);

var _AVPacket_ptshi_s = Module["_AVPacket_ptshi_s"] = (a0, a1) => (_AVPacket_ptshi_s = Module["_AVPacket_ptshi_s"] = wasmExports["AVPacket_ptshi_s"])(a0, a1);

var _AVPacket_side_data = Module["_AVPacket_side_data"] = a0 => (_AVPacket_side_data = Module["_AVPacket_side_data"] = wasmExports["AVPacket_side_data"])(a0);

var _AVPacket_side_data_s = Module["_AVPacket_side_data_s"] = (a0, a1) => (_AVPacket_side_data_s = Module["_AVPacket_side_data_s"] = wasmExports["AVPacket_side_data_s"])(a0, a1);

var _AVPacket_side_data_elems = Module["_AVPacket_side_data_elems"] = a0 => (_AVPacket_side_data_elems = Module["_AVPacket_side_data_elems"] = wasmExports["AVPacket_side_data_elems"])(a0);

var _AVPacket_side_data_elems_s = Module["_AVPacket_side_data_elems_s"] = (a0, a1) => (_AVPacket_side_data_elems_s = Module["_AVPacket_side_data_elems_s"] = wasmExports["AVPacket_side_data_elems_s"])(a0, a1);

var _AVPacket_size = Module["_AVPacket_size"] = a0 => (_AVPacket_size = Module["_AVPacket_size"] = wasmExports["AVPacket_size"])(a0);

var _AVPacket_size_s = Module["_AVPacket_size_s"] = (a0, a1) => (_AVPacket_size_s = Module["_AVPacket_size_s"] = wasmExports["AVPacket_size_s"])(a0, a1);

var _AVPacket_stream_index = Module["_AVPacket_stream_index"] = a0 => (_AVPacket_stream_index = Module["_AVPacket_stream_index"] = wasmExports["AVPacket_stream_index"])(a0);

var _AVPacket_stream_index_s = Module["_AVPacket_stream_index_s"] = (a0, a1) => (_AVPacket_stream_index_s = Module["_AVPacket_stream_index_s"] = wasmExports["AVPacket_stream_index_s"])(a0, a1);

var _AVPacketSideData_data = Module["_AVPacketSideData_data"] = (a0, a1) => (_AVPacketSideData_data = Module["_AVPacketSideData_data"] = wasmExports["AVPacketSideData_data"])(a0, a1);

var _AVPacketSideData_size = Module["_AVPacketSideData_size"] = (a0, a1) => (_AVPacketSideData_size = Module["_AVPacketSideData_size"] = wasmExports["AVPacketSideData_size"])(a0, a1);

var _AVPacketSideData_type = Module["_AVPacketSideData_type"] = (a0, a1) => (_AVPacketSideData_type = Module["_AVPacketSideData_type"] = wasmExports["AVPacketSideData_type"])(a0, a1);

var _avcodec_open2_js = Module["_avcodec_open2_js"] = (a0, a1, a2) => (_avcodec_open2_js = Module["_avcodec_open2_js"] = wasmExports["avcodec_open2_js"])(a0, a1, a2);

var _avcodec_open2 = Module["_avcodec_open2"] = (a0, a1, a2) => (_avcodec_open2 = Module["_avcodec_open2"] = wasmExports["avcodec_open2"])(a0, a1, a2);

var _av_packet_rescale_ts_js = Module["_av_packet_rescale_ts_js"] = (a0, a1, a2, a3, a4) => (_av_packet_rescale_ts_js = Module["_av_packet_rescale_ts_js"] = wasmExports["av_packet_rescale_ts_js"])(a0, a1, a2, a3, a4);

var _AVFormatContext_flags = Module["_AVFormatContext_flags"] = a0 => (_AVFormatContext_flags = Module["_AVFormatContext_flags"] = wasmExports["AVFormatContext_flags"])(a0);

var _AVFormatContext_flags_s = Module["_AVFormatContext_flags_s"] = (a0, a1) => (_AVFormatContext_flags_s = Module["_AVFormatContext_flags_s"] = wasmExports["AVFormatContext_flags_s"])(a0, a1);

var _AVFormatContext_nb_streams = Module["_AVFormatContext_nb_streams"] = a0 => (_AVFormatContext_nb_streams = Module["_AVFormatContext_nb_streams"] = wasmExports["AVFormatContext_nb_streams"])(a0);

var _AVFormatContext_nb_streams_s = Module["_AVFormatContext_nb_streams_s"] = (a0, a1) => (_AVFormatContext_nb_streams_s = Module["_AVFormatContext_nb_streams_s"] = wasmExports["AVFormatContext_nb_streams_s"])(a0, a1);

var _AVFormatContext_oformat = Module["_AVFormatContext_oformat"] = a0 => (_AVFormatContext_oformat = Module["_AVFormatContext_oformat"] = wasmExports["AVFormatContext_oformat"])(a0);

var _AVFormatContext_oformat_s = Module["_AVFormatContext_oformat_s"] = (a0, a1) => (_AVFormatContext_oformat_s = Module["_AVFormatContext_oformat_s"] = wasmExports["AVFormatContext_oformat_s"])(a0, a1);

var _AVFormatContext_pb = Module["_AVFormatContext_pb"] = a0 => (_AVFormatContext_pb = Module["_AVFormatContext_pb"] = wasmExports["AVFormatContext_pb"])(a0);

var _AVFormatContext_pb_s = Module["_AVFormatContext_pb_s"] = (a0, a1) => (_AVFormatContext_pb_s = Module["_AVFormatContext_pb_s"] = wasmExports["AVFormatContext_pb_s"])(a0, a1);

var _AVFormatContext_streams_a = Module["_AVFormatContext_streams_a"] = (a0, a1) => (_AVFormatContext_streams_a = Module["_AVFormatContext_streams_a"] = wasmExports["AVFormatContext_streams_a"])(a0, a1);

var _AVFormatContext_streams_a_s = Module["_AVFormatContext_streams_a_s"] = (a0, a1, a2) => (_AVFormatContext_streams_a_s = Module["_AVFormatContext_streams_a_s"] = wasmExports["AVFormatContext_streams_a_s"])(a0, a1, a2);

var _AVStream_codecpar = Module["_AVStream_codecpar"] = a0 => (_AVStream_codecpar = Module["_AVStream_codecpar"] = wasmExports["AVStream_codecpar"])(a0);

var _AVStream_codecpar_s = Module["_AVStream_codecpar_s"] = (a0, a1) => (_AVStream_codecpar_s = Module["_AVStream_codecpar_s"] = wasmExports["AVStream_codecpar_s"])(a0, a1);

var _AVStream_discard = Module["_AVStream_discard"] = a0 => (_AVStream_discard = Module["_AVStream_discard"] = wasmExports["AVStream_discard"])(a0);

var _AVStream_discard_s = Module["_AVStream_discard_s"] = (a0, a1) => (_AVStream_discard_s = Module["_AVStream_discard_s"] = wasmExports["AVStream_discard_s"])(a0, a1);

var _AVStream_duration = Module["_AVStream_duration"] = a0 => (_AVStream_duration = Module["_AVStream_duration"] = wasmExports["AVStream_duration"])(a0);

var _AVStream_durationhi = Module["_AVStream_durationhi"] = a0 => (_AVStream_durationhi = Module["_AVStream_durationhi"] = wasmExports["AVStream_durationhi"])(a0);

var _AVStream_duration_s = Module["_AVStream_duration_s"] = (a0, a1) => (_AVStream_duration_s = Module["_AVStream_duration_s"] = wasmExports["AVStream_duration_s"])(a0, a1);

var _AVStream_durationhi_s = Module["_AVStream_durationhi_s"] = (a0, a1) => (_AVStream_durationhi_s = Module["_AVStream_durationhi_s"] = wasmExports["AVStream_durationhi_s"])(a0, a1);

var _AVStream_time_base_num = Module["_AVStream_time_base_num"] = a0 => (_AVStream_time_base_num = Module["_AVStream_time_base_num"] = wasmExports["AVStream_time_base_num"])(a0);

var _AVStream_time_base_den = Module["_AVStream_time_base_den"] = a0 => (_AVStream_time_base_den = Module["_AVStream_time_base_den"] = wasmExports["AVStream_time_base_den"])(a0);

var _AVStream_time_base_s = Module["_AVStream_time_base_s"] = (a0, a1, a2) => (_AVStream_time_base_s = Module["_AVStream_time_base_s"] = wasmExports["AVStream_time_base_s"])(a0, a1, a2);

var _avformat_seek_file_min = Module["_avformat_seek_file_min"] = (a0, a1, a2, a3, a4) => (_avformat_seek_file_min = Module["_avformat_seek_file_min"] = wasmExports["avformat_seek_file_min"])(a0, a1, a2, a3, a4);

var _avformat_seek_file = Module["_avformat_seek_file"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => (_avformat_seek_file = Module["_avformat_seek_file"] = wasmExports["avformat_seek_file"])(a0, a1, a2, a3, a4, a5, a6, a7, a8);

var _avformat_seek_file_max = Module["_avformat_seek_file_max"] = (a0, a1, a2, a3, a4) => (_avformat_seek_file_max = Module["_avformat_seek_file_max"] = wasmExports["avformat_seek_file_max"])(a0, a1, a2, a3, a4);

var _avformat_seek_file_approx = Module["_avformat_seek_file_approx"] = (a0, a1, a2, a3, a4) => (_avformat_seek_file_approx = Module["_avformat_seek_file_approx"] = wasmExports["avformat_seek_file_approx"])(a0, a1, a2, a3, a4);

var _AVFilterInOut_filter_ctx = Module["_AVFilterInOut_filter_ctx"] = a0 => (_AVFilterInOut_filter_ctx = Module["_AVFilterInOut_filter_ctx"] = wasmExports["AVFilterInOut_filter_ctx"])(a0);

var _AVFilterInOut_filter_ctx_s = Module["_AVFilterInOut_filter_ctx_s"] = (a0, a1) => (_AVFilterInOut_filter_ctx_s = Module["_AVFilterInOut_filter_ctx_s"] = wasmExports["AVFilterInOut_filter_ctx_s"])(a0, a1);

var _AVFilterInOut_name = Module["_AVFilterInOut_name"] = a0 => (_AVFilterInOut_name = Module["_AVFilterInOut_name"] = wasmExports["AVFilterInOut_name"])(a0);

var _AVFilterInOut_name_s = Module["_AVFilterInOut_name_s"] = (a0, a1) => (_AVFilterInOut_name_s = Module["_AVFilterInOut_name_s"] = wasmExports["AVFilterInOut_name_s"])(a0, a1);

var _AVFilterInOut_next = Module["_AVFilterInOut_next"] = a0 => (_AVFilterInOut_next = Module["_AVFilterInOut_next"] = wasmExports["AVFilterInOut_next"])(a0);

var _AVFilterInOut_next_s = Module["_AVFilterInOut_next_s"] = (a0, a1) => (_AVFilterInOut_next_s = Module["_AVFilterInOut_next_s"] = wasmExports["AVFilterInOut_next_s"])(a0, a1);

var _AVFilterInOut_pad_idx = Module["_AVFilterInOut_pad_idx"] = a0 => (_AVFilterInOut_pad_idx = Module["_AVFilterInOut_pad_idx"] = wasmExports["AVFilterInOut_pad_idx"])(a0);

var _AVFilterInOut_pad_idx_s = Module["_AVFilterInOut_pad_idx_s"] = (a0, a1) => (_AVFilterInOut_pad_idx_s = Module["_AVFilterInOut_pad_idx_s"] = wasmExports["AVFilterInOut_pad_idx_s"])(a0, a1);

var _libavjs_with_swscale = Module["_libavjs_with_swscale"] = () => (_libavjs_with_swscale = Module["_libavjs_with_swscale"] = wasmExports["libavjs_with_swscale"])();

var _libavjs_create_main_thread = Module["_libavjs_create_main_thread"] = () => (_libavjs_create_main_thread = Module["_libavjs_create_main_thread"] = wasmExports["libavjs_create_main_thread"])();

var _avformat_alloc_output_context2_js = Module["_avformat_alloc_output_context2_js"] = (a0, a1, a2) => (_avformat_alloc_output_context2_js = Module["_avformat_alloc_output_context2_js"] = wasmExports["avformat_alloc_output_context2_js"])(a0, a1, a2);

var _avformat_open_input_js = Module["_avformat_open_input_js"] = (a0, a1, a2) => (_avformat_open_input_js = Module["_avformat_open_input_js"] = wasmExports["avformat_open_input_js"])(a0, a1, a2);

var _avformat_open_input = Module["_avformat_open_input"] = (a0, a1, a2, a3) => (_avformat_open_input = Module["_avformat_open_input"] = wasmExports["avformat_open_input"])(a0, a1, a2, a3);

var _avio_open2_js = Module["_avio_open2_js"] = (a0, a1, a2, a3) => (_avio_open2_js = Module["_avio_open2_js"] = wasmExports["avio_open2_js"])(a0, a1, a2, a3);

var _avfilter_graph_create_filter_js = Module["_avfilter_graph_create_filter_js"] = (a0, a1, a2, a3, a4) => (_avfilter_graph_create_filter_js = Module["_avfilter_graph_create_filter_js"] = wasmExports["avfilter_graph_create_filter_js"])(a0, a1, a2, a3, a4);

var _av_dict_copy_js = Module["_av_dict_copy_js"] = (a0, a1, a2) => (_av_dict_copy_js = Module["_av_dict_copy_js"] = wasmExports["av_dict_copy_js"])(a0, a1, a2);

var _av_dict_set_js = Module["_av_dict_set_js"] = (a0, a1, a2, a3) => (_av_dict_set_js = Module["_av_dict_set_js"] = wasmExports["av_dict_set_js"])(a0, a1, a2, a3);

var _av_compare_ts_js = Module["_av_compare_ts_js"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (_av_compare_ts_js = Module["_av_compare_ts_js"] = wasmExports["av_compare_ts_js"])(a0, a1, a2, a3, a4, a5, a6, a7);

var _ff_error = Module["_ff_error"] = a0 => (_ff_error = Module["_ff_error"] = wasmExports["ff_error"])(a0);

var _mallinfo_uordblks = Module["_mallinfo_uordblks"] = () => (_mallinfo_uordblks = Module["_mallinfo_uordblks"] = wasmExports["mallinfo_uordblks"])();

var _av_dict_free = Module["_av_dict_free"] = a0 => (_av_dict_free = Module["_av_dict_free"] = wasmExports["av_dict_free"])(a0);

var _av_log_set_level = Module["_av_log_set_level"] = a0 => (_av_log_set_level = Module["_av_log_set_level"] = wasmExports["av_log_set_level"])(a0);

var _av_strdup = Module["_av_strdup"] = a0 => (_av_strdup = Module["_av_strdup"] = wasmExports["av_strdup"])(a0);

var _avcodec_find_encoder = Module["_avcodec_find_encoder"] = a0 => (_avcodec_find_encoder = Module["_avcodec_find_encoder"] = wasmExports["avcodec_find_encoder"])(a0);

var _avcodec_find_decoder = Module["_avcodec_find_decoder"] = a0 => (_avcodec_find_decoder = Module["_avcodec_find_decoder"] = wasmExports["avcodec_find_decoder"])(a0);

var _av_frame_unref = Module["_av_frame_unref"] = a0 => (_av_frame_unref = Module["_av_frame_unref"] = wasmExports["av_frame_unref"])(a0);

var _av_frame_get_buffer = Module["_av_frame_get_buffer"] = (a0, a1) => (_av_frame_get_buffer = Module["_av_frame_get_buffer"] = wasmExports["av_frame_get_buffer"])(a0, a1);

var _av_buffersrc_add_frame_flags = Module["_av_buffersrc_add_frame_flags"] = (a0, a1, a2) => (_av_buffersrc_add_frame_flags = Module["_av_buffersrc_add_frame_flags"] = wasmExports["av_buffersrc_add_frame_flags"])(a0, a1, a2);

var _ffmpeg_main = Module["_ffmpeg_main"] = (a0, a1) => (_ffmpeg_main = Module["_ffmpeg_main"] = wasmExports["ffmpeg_main"])(a0, a1);

var _avfilter_graph_free = Module["_avfilter_graph_free"] = a0 => (_avfilter_graph_free = Module["_avfilter_graph_free"] = wasmExports["avfilter_graph_free"])(a0);

var _av_frame_free = Module["_av_frame_free"] = a0 => (_av_frame_free = Module["_av_frame_free"] = wasmExports["av_frame_free"])(a0);

var _avfilter_inout_free = Module["_avfilter_inout_free"] = a0 => (_avfilter_inout_free = Module["_avfilter_inout_free"] = wasmExports["avfilter_inout_free"])(a0);

var _av_packet_free = Module["_av_packet_free"] = a0 => (_av_packet_free = Module["_av_packet_free"] = wasmExports["av_packet_free"])(a0);

var _avcodec_free_context = Module["_avcodec_free_context"] = a0 => (_avcodec_free_context = Module["_avcodec_free_context"] = wasmExports["avcodec_free_context"])(a0);

var _avcodec_parameters_free = Module["_avcodec_parameters_free"] = a0 => (_avcodec_parameters_free = Module["_avcodec_parameters_free"] = wasmExports["avcodec_parameters_free"])(a0);

var _avformat_close_input = Module["_avformat_close_input"] = a0 => (_avformat_close_input = Module["_avformat_close_input"] = wasmExports["avformat_close_input"])(a0);

var _avcodec_get_name = Module["_avcodec_get_name"] = a0 => (_avcodec_get_name = Module["_avcodec_get_name"] = wasmExports["avcodec_get_name"])(a0);

var _avcodec_close = Module["_avcodec_close"] = a0 => (_avcodec_close = Module["_avcodec_close"] = wasmExports["avcodec_close"])(a0);

var _avcodec_descriptor_get = Module["_avcodec_descriptor_get"] = a0 => (_avcodec_descriptor_get = Module["_avcodec_descriptor_get"] = wasmExports["avcodec_descriptor_get"])(a0);

var _av_log_get_level = Module["_av_log_get_level"] = () => (_av_log_get_level = Module["_av_log_get_level"] = wasmExports["av_log_get_level"])();

var _av_packet_new_side_data = Module["_av_packet_new_side_data"] = (a0, a1, a2) => (_av_packet_new_side_data = Module["_av_packet_new_side_data"] = wasmExports["av_packet_new_side_data"])(a0, a1, a2);

var _av_packet_unref = Module["_av_packet_unref"] = a0 => (_av_packet_unref = Module["_av_packet_unref"] = wasmExports["av_packet_unref"])(a0);

var _avio_flush = Module["_avio_flush"] = a0 => (_avio_flush = Module["_avio_flush"] = wasmExports["avio_flush"])(a0);

var _av_packet_ref = Module["_av_packet_ref"] = (a0, a1) => (_av_packet_ref = Module["_av_packet_ref"] = wasmExports["av_packet_ref"])(a0, a1);

var _av_get_bytes_per_sample = Module["_av_get_bytes_per_sample"] = a0 => (_av_get_bytes_per_sample = Module["_av_get_bytes_per_sample"] = wasmExports["av_get_bytes_per_sample"])(a0);

var _av_pix_fmt_desc_get = Module["_av_pix_fmt_desc_get"] = a0 => (_av_pix_fmt_desc_get = Module["_av_pix_fmt_desc_get"] = wasmExports["av_pix_fmt_desc_get"])(a0);

var _avcodec_parameters_to_context = Module["_avcodec_parameters_to_context"] = (a0, a1) => (_avcodec_parameters_to_context = Module["_avcodec_parameters_to_context"] = wasmExports["avcodec_parameters_to_context"])(a0, a1);

var _avcodec_parameters_from_context = Module["_avcodec_parameters_from_context"] = (a0, a1) => (_avcodec_parameters_from_context = Module["_avcodec_parameters_from_context"] = wasmExports["avcodec_parameters_from_context"])(a0, a1);

var _avcodec_parameters_copy = Module["_avcodec_parameters_copy"] = (a0, a1) => (_avcodec_parameters_copy = Module["_avcodec_parameters_copy"] = wasmExports["avcodec_parameters_copy"])(a0, a1);

var _av_buffersink_set_frame_size = Module["_av_buffersink_set_frame_size"] = (a0, a1) => (_av_buffersink_set_frame_size = Module["_av_buffersink_set_frame_size"] = wasmExports["av_buffersink_set_frame_size"])(a0, a1);

var _strerror = Module["_strerror"] = a0 => (_strerror = Module["_strerror"] = wasmExports["strerror"])(a0);

var _av_read_frame = Module["_av_read_frame"] = (a0, a1) => (_av_read_frame = Module["_av_read_frame"] = wasmExports["av_read_frame"])(a0, a1);

var _av_packet_alloc = Module["_av_packet_alloc"] = () => (_av_packet_alloc = Module["_av_packet_alloc"] = wasmExports["av_packet_alloc"])();

var _avcodec_send_frame = Module["_avcodec_send_frame"] = (a0, a1) => (_avcodec_send_frame = Module["_avcodec_send_frame"] = wasmExports["avcodec_send_frame"])(a0, a1);

var _avcodec_receive_packet = Module["_avcodec_receive_packet"] = (a0, a1) => (_avcodec_receive_packet = Module["_avcodec_receive_packet"] = wasmExports["avcodec_receive_packet"])(a0, a1);

var _avcodec_send_packet = Module["_avcodec_send_packet"] = (a0, a1) => (_avcodec_send_packet = Module["_avcodec_send_packet"] = wasmExports["avcodec_send_packet"])(a0, a1);

var _avcodec_receive_frame = Module["_avcodec_receive_frame"] = (a0, a1) => (_avcodec_receive_frame = Module["_avcodec_receive_frame"] = wasmExports["avcodec_receive_frame"])(a0, a1);

var _av_frame_clone = Module["_av_frame_clone"] = a0 => (_av_frame_clone = Module["_av_frame_clone"] = wasmExports["av_frame_clone"])(a0);

var _avfilter_graph_alloc = Module["_avfilter_graph_alloc"] = () => (_avfilter_graph_alloc = Module["_avfilter_graph_alloc"] = wasmExports["avfilter_graph_alloc"])();

var _av_opt_set = Module["_av_opt_set"] = (a0, a1, a2, a3) => (_av_opt_set = Module["_av_opt_set"] = wasmExports["av_opt_set"])(a0, a1, a2, a3);

var _avfilter_get_by_name = Module["_avfilter_get_by_name"] = a0 => (_avfilter_get_by_name = Module["_avfilter_get_by_name"] = wasmExports["avfilter_get_by_name"])(a0);

var _av_frame_alloc = Module["_av_frame_alloc"] = () => (_av_frame_alloc = Module["_av_frame_alloc"] = wasmExports["av_frame_alloc"])();

var _avfilter_link = Module["_avfilter_link"] = (a0, a1, a2, a3) => (_avfilter_link = Module["_avfilter_link"] = wasmExports["avfilter_link"])(a0, a1, a2, a3);

var _av_get_sample_fmt_name = Module["_av_get_sample_fmt_name"] = a0 => (_av_get_sample_fmt_name = Module["_av_get_sample_fmt_name"] = wasmExports["av_get_sample_fmt_name"])(a0);

var _avfilter_graph_config = Module["_avfilter_graph_config"] = (a0, a1) => (_avfilter_graph_config = Module["_avfilter_graph_config"] = wasmExports["avfilter_graph_config"])(a0, a1);

var _av_interleaved_write_frame = Module["_av_interleaved_write_frame"] = (a0, a1) => (_av_interleaved_write_frame = Module["_av_interleaved_write_frame"] = wasmExports["av_interleaved_write_frame"])(a0, a1);

var _avformat_write_header = Module["_avformat_write_header"] = (a0, a1) => (_avformat_write_header = Module["_avformat_write_header"] = wasmExports["avformat_write_header"])(a0, a1);

var _av_write_trailer = Module["_av_write_trailer"] = a0 => (_av_write_trailer = Module["_av_write_trailer"] = wasmExports["av_write_trailer"])(a0);

var _avformat_free_context = Module["_avformat_free_context"] = a0 => (_avformat_free_context = Module["_avformat_free_context"] = wasmExports["avformat_free_context"])(a0);

var _av_find_input_format = Module["_av_find_input_format"] = a0 => (_av_find_input_format = Module["_av_find_input_format"] = wasmExports["av_find_input_format"])(a0);

var _avformat_alloc_context = Module["_avformat_alloc_context"] = () => (_avformat_alloc_context = Module["_avformat_alloc_context"] = wasmExports["avformat_alloc_context"])();

var _avformat_find_stream_info = Module["_avformat_find_stream_info"] = (a0, a1) => (_avformat_find_stream_info = Module["_avformat_find_stream_info"] = wasmExports["avformat_find_stream_info"])(a0, a1);

var _avcodec_alloc_context3 = Module["_avcodec_alloc_context3"] = a0 => (_avcodec_alloc_context3 = Module["_avcodec_alloc_context3"] = wasmExports["avcodec_alloc_context3"])(a0);

var _avio_close = Module["_avio_close"] = a0 => (_avio_close = Module["_avio_close"] = wasmExports["avio_close"])(a0);

var _avcodec_find_encoder_by_name = Module["_avcodec_find_encoder_by_name"] = a0 => (_avcodec_find_encoder_by_name = Module["_avcodec_find_encoder_by_name"] = wasmExports["avcodec_find_encoder_by_name"])(a0);

var _avcodec_find_decoder_by_name = Module["_avcodec_find_decoder_by_name"] = a0 => (_avcodec_find_decoder_by_name = Module["_avcodec_find_decoder_by_name"] = wasmExports["avcodec_find_decoder_by_name"])(a0);

var _avcodec_descriptor_get_by_name = Module["_avcodec_descriptor_get_by_name"] = a0 => (_avcodec_descriptor_get_by_name = Module["_avcodec_descriptor_get_by_name"] = wasmExports["avcodec_descriptor_get_by_name"])(a0);

var _avformat_new_stream = Module["_avformat_new_stream"] = (a0, a1) => (_avformat_new_stream = Module["_avformat_new_stream"] = wasmExports["avformat_new_stream"])(a0, a1);

var _avcodec_parameters_alloc = Module["_avcodec_parameters_alloc"] = () => (_avcodec_parameters_alloc = Module["_avcodec_parameters_alloc"] = wasmExports["avcodec_parameters_alloc"])();

var _ffprobe_main = Module["_ffprobe_main"] = (a0, a1) => (_ffprobe_main = Module["_ffprobe_main"] = wasmExports["ffprobe_main"])(a0, a1);

var _avcodec_descriptor_next = Module["_avcodec_descriptor_next"] = a0 => (_avcodec_descriptor_next = Module["_avcodec_descriptor_next"] = wasmExports["avcodec_descriptor_next"])(a0);

var _av_frame_ref = Module["_av_frame_ref"] = (a0, a1) => (_av_frame_ref = Module["_av_frame_ref"] = wasmExports["av_frame_ref"])(a0, a1);

var _av_shrink_packet = Module["_av_shrink_packet"] = (a0, a1) => (_av_shrink_packet = Module["_av_shrink_packet"] = wasmExports["av_shrink_packet"])(a0, a1);

var _av_grow_packet = Module["_av_grow_packet"] = (a0, a1) => (_av_grow_packet = Module["_av_grow_packet"] = wasmExports["av_grow_packet"])(a0, a1);

var _av_packet_clone = Module["_av_packet_clone"] = a0 => (_av_packet_clone = Module["_av_packet_clone"] = wasmExports["av_packet_clone"])(a0);

var _av_packet_make_writable = Module["_av_packet_make_writable"] = a0 => (_av_packet_make_writable = Module["_av_packet_make_writable"] = wasmExports["av_packet_make_writable"])(a0);

var _avfilter_free = Module["_avfilter_free"] = a0 => (_avfilter_free = Module["_avfilter_free"] = wasmExports["avfilter_free"])(a0);

var _av_buffersink_get_frame = Module["_av_buffersink_get_frame"] = (a0, a1) => (_av_buffersink_get_frame = Module["_av_buffersink_get_frame"] = wasmExports["av_buffersink_get_frame"])(a0, a1);

var _avfilter_inout_alloc = Module["_avfilter_inout_alloc"] = () => (_avfilter_inout_alloc = Module["_avfilter_inout_alloc"] = wasmExports["avfilter_inout_alloc"])();

var _avfilter_graph_parse = Module["_avfilter_graph_parse"] = (a0, a1, a2, a3, a4) => (_avfilter_graph_parse = Module["_avfilter_graph_parse"] = wasmExports["avfilter_graph_parse"])(a0, a1, a2, a3, a4);

var _sws_freeContext = Module["_sws_freeContext"] = a0 => (_sws_freeContext = Module["_sws_freeContext"] = wasmExports["sws_freeContext"])(a0);

var _sws_scale_frame = Module["_sws_scale_frame"] = (a0, a1, a2) => (_sws_scale_frame = Module["_sws_scale_frame"] = wasmExports["sws_scale_frame"])(a0, a1, a2);

var _av_find_best_stream = Module["_av_find_best_stream"] = (a0, a1, a2, a3, a4, a5) => (_av_find_best_stream = Module["_av_find_best_stream"] = wasmExports["av_find_best_stream"])(a0, a1, a2, a3, a4, a5);

var _av_write_frame = Module["_av_write_frame"] = (a0, a1) => (_av_write_frame = Module["_av_write_frame"] = wasmExports["av_write_frame"])(a0, a1);

var _close = Module["_close"] = a0 => (_close = Module["_close"] = wasmExports["close"])(a0);

var _avformat_flush = Module["_avformat_flush"] = a0 => (_avformat_flush = Module["_avformat_flush"] = wasmExports["avformat_flush"])(a0);

var _open = Module["_open"] = (a0, a1, a2) => (_open = Module["_open"] = wasmExports["open"])(a0, a1, a2);

var _av_frame_make_writable = Module["_av_frame_make_writable"] = a0 => (_av_frame_make_writable = Module["_av_frame_make_writable"] = wasmExports["av_frame_make_writable"])(a0);

var _free = Module["_free"] = a0 => (_free = Module["_free"] = wasmExports["free"])(a0);

var _sws_getContext = Module["_sws_getContext"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => (_sws_getContext = Module["_sws_getContext"] = wasmExports["sws_getContext"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);

var _malloc = Module["_malloc"] = a0 => (_malloc = Module["_malloc"] = wasmExports["malloc"])(a0);

var _calloc = Module["_calloc"] = (a0, a1) => (_calloc = Module["_calloc"] = wasmExports["calloc"])(a0, a1);

var setTempRet0 = a0 => (setTempRet0 = wasmExports["setTempRet0"])(a0);

var _pthread_self = Module["_pthread_self"] = () => (_pthread_self = Module["_pthread_self"] = wasmExports["pthread_self"])();

var __emscripten_tls_init = Module["__emscripten_tls_init"] = () => (__emscripten_tls_init = Module["__emscripten_tls_init"] = wasmExports["_emscripten_tls_init"])();

var _dup2 = Module["_dup2"] = (a0, a1) => (_dup2 = Module["_dup2"] = wasmExports["dup2"])(a0, a1);

var __emscripten_thread_init = Module["__emscripten_thread_init"] = (a0, a1, a2, a3, a4, a5) => (__emscripten_thread_init = Module["__emscripten_thread_init"] = wasmExports["_emscripten_thread_init"])(a0, a1, a2, a3, a4, a5);

var __emscripten_thread_crashed = Module["__emscripten_thread_crashed"] = () => (__emscripten_thread_crashed = Module["__emscripten_thread_crashed"] = wasmExports["_emscripten_thread_crashed"])();

var _emscripten_main_thread_process_queued_calls = () => (_emscripten_main_thread_process_queued_calls = wasmExports["emscripten_main_thread_process_queued_calls"])();

var _emscripten_main_runtime_thread_id = () => (_emscripten_main_runtime_thread_id = wasmExports["emscripten_main_runtime_thread_id"])();

var __emscripten_run_on_main_thread_js = (a0, a1, a2, a3, a4) => (__emscripten_run_on_main_thread_js = wasmExports["_emscripten_run_on_main_thread_js"])(a0, a1, a2, a3, a4);

var __emscripten_thread_free_data = a0 => (__emscripten_thread_free_data = wasmExports["_emscripten_thread_free_data"])(a0);

var __emscripten_thread_exit = Module["__emscripten_thread_exit"] = a0 => (__emscripten_thread_exit = Module["__emscripten_thread_exit"] = wasmExports["_emscripten_thread_exit"])(a0);

var __emscripten_check_mailbox = () => (__emscripten_check_mailbox = wasmExports["_emscripten_check_mailbox"])();

var _setThrew = (a0, a1) => (_setThrew = wasmExports["setThrew"])(a0, a1);

var _emscripten_stack_set_limits = (a0, a1) => (_emscripten_stack_set_limits = wasmExports["emscripten_stack_set_limits"])(a0, a1);

var stackSave = () => (stackSave = wasmExports["stackSave"])();

var stackRestore = a0 => (stackRestore = wasmExports["stackRestore"])(a0);

var stackAlloc = a0 => (stackAlloc = wasmExports["stackAlloc"])(a0);

var dynCall_ii = Module["dynCall_ii"] = (a0, a1) => (dynCall_ii = Module["dynCall_ii"] = wasmExports["dynCall_ii"])(a0, a1);

var dynCall_iiii = Module["dynCall_iiii"] = (a0, a1, a2, a3) => (dynCall_iiii = Module["dynCall_iiii"] = wasmExports["dynCall_iiii"])(a0, a1, a2, a3);

var dynCall_vi = Module["dynCall_vi"] = (a0, a1) => (dynCall_vi = Module["dynCall_vi"] = wasmExports["dynCall_vi"])(a0, a1);

var dynCall_iii = Module["dynCall_iii"] = (a0, a1, a2) => (dynCall_iii = Module["dynCall_iii"] = wasmExports["dynCall_iii"])(a0, a1, a2);

var dynCall_viiii = Module["dynCall_viiii"] = (a0, a1, a2, a3, a4) => (dynCall_viiii = Module["dynCall_viiii"] = wasmExports["dynCall_viiii"])(a0, a1, a2, a3, a4);

var dynCall_viii = Module["dynCall_viii"] = (a0, a1, a2, a3) => (dynCall_viii = Module["dynCall_viii"] = wasmExports["dynCall_viii"])(a0, a1, a2, a3);

var dynCall_vii = Module["dynCall_vii"] = (a0, a1, a2) => (dynCall_vii = Module["dynCall_vii"] = wasmExports["dynCall_vii"])(a0, a1, a2);

var dynCall_iiiii = Module["dynCall_iiiii"] = (a0, a1, a2, a3, a4) => (dynCall_iiiii = Module["dynCall_iiiii"] = wasmExports["dynCall_iiiii"])(a0, a1, a2, a3, a4);

var dynCall_viij = Module["dynCall_viij"] = (a0, a1, a2, a3, a4) => (dynCall_viij = Module["dynCall_viij"] = wasmExports["dynCall_viij"])(a0, a1, a2, a3, a4);

var dynCall_v = Module["dynCall_v"] = a0 => (dynCall_v = Module["dynCall_v"] = wasmExports["dynCall_v"])(a0);

var dynCall_fiiiiiiiiffii = Module["dynCall_fiiiiiiiiffii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) => (dynCall_fiiiiiiiiffii = Module["dynCall_fiiiiiiiiffii"] = wasmExports["dynCall_fiiiiiiiiffii"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);

var dynCall_viiif = Module["dynCall_viiif"] = (a0, a1, a2, a3, a4) => (dynCall_viiif = Module["dynCall_viiif"] = wasmExports["dynCall_viiif"])(a0, a1, a2, a3, a4);

var dynCall_viiiif = Module["dynCall_viiiif"] = (a0, a1, a2, a3, a4, a5) => (dynCall_viiiif = Module["dynCall_viiiif"] = wasmExports["dynCall_viiiif"])(a0, a1, a2, a3, a4, a5);

var dynCall_viiiiiiifi = Module["dynCall_viiiiiiifi"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => (dynCall_viiiiiiifi = Module["dynCall_viiiiiiifi"] = wasmExports["dynCall_viiiiiiifi"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);

var dynCall_viiiiiiff = Module["dynCall_viiiiiiff"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => (dynCall_viiiiiiff = Module["dynCall_viiiiiiff"] = wasmExports["dynCall_viiiiiiff"])(a0, a1, a2, a3, a4, a5, a6, a7, a8);

var dynCall_viiiii = Module["dynCall_viiiii"] = (a0, a1, a2, a3, a4, a5) => (dynCall_viiiii = Module["dynCall_viiiii"] = wasmExports["dynCall_viiiii"])(a0, a1, a2, a3, a4, a5);

var dynCall_viiiiiifi = Module["dynCall_viiiiiifi"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => (dynCall_viiiiiifi = Module["dynCall_viiiiiifi"] = wasmExports["dynCall_viiiiiifi"])(a0, a1, a2, a3, a4, a5, a6, a7, a8);

var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_iiiiiii = Module["dynCall_iiiiiii"] = wasmExports["dynCall_iiiiiii"])(a0, a1, a2, a3, a4, a5, a6);

var dynCall_iiiiii = Module["dynCall_iiiiii"] = (a0, a1, a2, a3, a4, a5) => (dynCall_iiiiii = Module["dynCall_iiiiii"] = wasmExports["dynCall_iiiiii"])(a0, a1, a2, a3, a4, a5);

var dynCall_viiiiij = Module["dynCall_viiiiij"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (dynCall_viiiiij = Module["dynCall_viiiiij"] = wasmExports["dynCall_viiiiij"])(a0, a1, a2, a3, a4, a5, a6, a7);

var dynCall_viiiiii = Module["dynCall_viiiiii"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_viiiiii = Module["dynCall_viiiiii"] = wasmExports["dynCall_viiiiii"])(a0, a1, a2, a3, a4, a5, a6);

var dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => (dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = wasmExports["dynCall_viiiiiiiii"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);

var dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => (dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = wasmExports["dynCall_viiiiiiii"])(a0, a1, a2, a3, a4, a5, a6, a7, a8);

var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (dynCall_viiiiiii = Module["dynCall_viiiiiii"] = wasmExports["dynCall_viiiiiii"])(a0, a1, a2, a3, a4, a5, a6, a7);

var dynCall_viiiiiiiiiiii = Module["dynCall_viiiiiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) => (dynCall_viiiiiiiiiiii = Module["dynCall_viiiiiiiiiiii"] = wasmExports["dynCall_viiiiiiiiiiii"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);

var dynCall_viiiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) => (dynCall_viiiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiiii"] = wasmExports["dynCall_viiiiiiiiiiiiii"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14);

var dynCall_viiiiiiiiiii = Module["dynCall_viiiiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) => (dynCall_viiiiiiiiiii = Module["dynCall_viiiiiiiiiii"] = wasmExports["dynCall_viiiiiiiiiii"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);

var dynCall_iiiiiiiii = Module["dynCall_iiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => (dynCall_iiiiiiiii = Module["dynCall_iiiiiiiii"] = wasmExports["dynCall_iiiiiiiii"])(a0, a1, a2, a3, a4, a5, a6, a7, a8);

var dynCall_did = Module["dynCall_did"] = (a0, a1, a2) => (dynCall_did = Module["dynCall_did"] = wasmExports["dynCall_did"])(a0, a1, a2);

var dynCall_viiiifii = Module["dynCall_viiiifii"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (dynCall_viiiifii = Module["dynCall_viiiifii"] = wasmExports["dynCall_viiiifii"])(a0, a1, a2, a3, a4, a5, a6, a7);

var dynCall_fii = Module["dynCall_fii"] = (a0, a1, a2) => (dynCall_fii = Module["dynCall_fii"] = wasmExports["dynCall_fii"])(a0, a1, a2);

var dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) => (dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = wasmExports["dynCall_viiiiiiiiii"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);

var dynCall_iiidiiiiii = Module["dynCall_iiidiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => (dynCall_iiidiiiiii = Module["dynCall_iiidiiiiii"] = wasmExports["dynCall_iiidiiiiii"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);

var dynCall_viiiiijjidd = Module["dynCall_viiiiijjidd"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) => (dynCall_viiiiijjidd = Module["dynCall_viiiiijjidd"] = wasmExports["dynCall_viiiiijjidd"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);

var dynCall_viiiid = Module["dynCall_viiiid"] = (a0, a1, a2, a3, a4, a5) => (dynCall_viiiid = Module["dynCall_viiiid"] = wasmExports["dynCall_viiiid"])(a0, a1, a2, a3, a4, a5);

var dynCall_ijii = Module["dynCall_ijii"] = (a0, a1, a2, a3, a4) => (dynCall_ijii = Module["dynCall_ijii"] = wasmExports["dynCall_ijii"])(a0, a1, a2, a3, a4);

var dynCall_jiji = Module["dynCall_jiji"] = (a0, a1, a2, a3, a4) => (dynCall_jiji = Module["dynCall_jiji"] = wasmExports["dynCall_jiji"])(a0, a1, a2, a3, a4);

var dynCall_iiiji = Module["dynCall_iiiji"] = (a0, a1, a2, a3, a4, a5) => (dynCall_iiiji = Module["dynCall_iiiji"] = wasmExports["dynCall_iiiji"])(a0, a1, a2, a3, a4, a5);

var dynCall_jiiij = Module["dynCall_jiiij"] = (a0, a1, a2, a3, a4, a5) => (dynCall_jiiij = Module["dynCall_jiiij"] = wasmExports["dynCall_jiiij"])(a0, a1, a2, a3, a4, a5);

var dynCall_iiiiij = Module["dynCall_iiiiij"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_iiiiij = Module["dynCall_iiiiij"] = wasmExports["dynCall_iiiiij"])(a0, a1, a2, a3, a4, a5, a6);

var dynCall_jiiji = Module["dynCall_jiiji"] = (a0, a1, a2, a3, a4, a5) => (dynCall_jiiji = Module["dynCall_jiiji"] = wasmExports["dynCall_jiiji"])(a0, a1, a2, a3, a4, a5);

var dynCall_dd = Module["dynCall_dd"] = (a0, a1) => (dynCall_dd = Module["dynCall_dd"] = wasmExports["dynCall_dd"])(a0, a1);

var dynCall_viifi = Module["dynCall_viifi"] = (a0, a1, a2, a3, a4) => (dynCall_viifi = Module["dynCall_viifi"] = wasmExports["dynCall_viifi"])(a0, a1, a2, a3, a4);

var dynCall_fiii = Module["dynCall_fiii"] = (a0, a1, a2, a3) => (dynCall_fiii = Module["dynCall_fiii"] = wasmExports["dynCall_fiii"])(a0, a1, a2, a3);

var dynCall_viidi = Module["dynCall_viidi"] = (a0, a1, a2, a3, a4) => (dynCall_viidi = Module["dynCall_viidi"] = wasmExports["dynCall_viidi"])(a0, a1, a2, a3, a4);

var dynCall_diii = Module["dynCall_diii"] = (a0, a1, a2, a3) => (dynCall_diii = Module["dynCall_diii"] = wasmExports["dynCall_diii"])(a0, a1, a2, a3);

var dynCall_iiijiiii = Module["dynCall_iiijiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => (dynCall_iiijiiii = Module["dynCall_iiijiiii"] = wasmExports["dynCall_iiijiiii"])(a0, a1, a2, a3, a4, a5, a6, a7, a8);

var dynCall_viiijj = Module["dynCall_viiijj"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (dynCall_viiijj = Module["dynCall_viiijj"] = wasmExports["dynCall_viiijj"])(a0, a1, a2, a3, a4, a5, a6, a7);

var dynCall_iiiiiiidiiddii = Module["dynCall_iiiiiiidiiddii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) => (dynCall_iiiiiiidiiddii = Module["dynCall_iiiiiiidiiddii"] = wasmExports["dynCall_iiiiiiidiiddii"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);

var dynCall_jij = Module["dynCall_jij"] = (a0, a1, a2, a3) => (dynCall_jij = Module["dynCall_jij"] = wasmExports["dynCall_jij"])(a0, a1, a2, a3);

var dynCall_jii = Module["dynCall_jii"] = (a0, a1, a2) => (dynCall_jii = Module["dynCall_jii"] = wasmExports["dynCall_jii"])(a0, a1, a2);

var dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = wasmExports["dynCall_iiiiiiii"])(a0, a1, a2, a3, a4, a5, a6, a7);

var dynCall_iiifii = Module["dynCall_iiifii"] = (a0, a1, a2, a3, a4, a5) => (dynCall_iiifii = Module["dynCall_iiifii"] = wasmExports["dynCall_iiifii"])(a0, a1, a2, a3, a4, a5);

var dynCall_iiiijj = Module["dynCall_iiiijj"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (dynCall_iiiijj = Module["dynCall_iiiijj"] = wasmExports["dynCall_iiiijj"])(a0, a1, a2, a3, a4, a5, a6, a7);

var dynCall_iiijiii = Module["dynCall_iiijiii"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (dynCall_iiijiii = Module["dynCall_iiijiii"] = wasmExports["dynCall_iiijiii"])(a0, a1, a2, a3, a4, a5, a6, a7);

var dynCall_iiiiiiiiiii = Module["dynCall_iiiiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) => (dynCall_iiiiiiiiiii = Module["dynCall_iiiiiiiiiii"] = wasmExports["dynCall_iiiiiiiiiii"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);

var dynCall_viiid = Module["dynCall_viiid"] = (a0, a1, a2, a3, a4) => (dynCall_viiid = Module["dynCall_viiid"] = wasmExports["dynCall_viiid"])(a0, a1, a2, a3, a4);

var dynCall_iiiiiiiiii = Module["dynCall_iiiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => (dynCall_iiiiiiiiii = Module["dynCall_iiiiiiiiii"] = wasmExports["dynCall_iiiiiiiiii"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);

var dynCall_iiiiiiiiiiii = Module["dynCall_iiiiiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) => (dynCall_iiiiiiiiiiii = Module["dynCall_iiiiiiiiiiii"] = wasmExports["dynCall_iiiiiiiiiiii"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);

var dynCall_iij = Module["dynCall_iij"] = (a0, a1, a2, a3) => (dynCall_iij = Module["dynCall_iij"] = wasmExports["dynCall_iij"])(a0, a1, a2, a3);

var dynCall_i = Module["dynCall_i"] = a0 => (dynCall_i = Module["dynCall_i"] = wasmExports["dynCall_i"])(a0);

var dynCall_iiiiiiiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17) => (dynCall_iiiiiiiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiiiiiiii"] = wasmExports["dynCall_iiiiiiiiiiiiiiiiii"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17);

var dynCall_viiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) => (dynCall_viiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiii"] = wasmExports["dynCall_viiiiiiiiiiiii"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);

var dynCall_viiiiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) => (dynCall_viiiiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiiiii"] = wasmExports["dynCall_viiiiiiiiiiiiiii"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);

var dynCall_ij = Module["dynCall_ij"] = (a0, a1, a2) => (dynCall_ij = Module["dynCall_ij"] = wasmExports["dynCall_ij"])(a0, a1, a2);

var dynCall_iiijii = Module["dynCall_iiijii"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_iiijii = Module["dynCall_iiijii"] = wasmExports["dynCall_iiijii"])(a0, a1, a2, a3, a4, a5, a6);

var dynCall_ff = Module["dynCall_ff"] = (a0, a1) => (dynCall_ff = Module["dynCall_ff"] = wasmExports["dynCall_ff"])(a0, a1);

var dynCall_jiiiiiiiii = Module["dynCall_jiiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => (dynCall_jiiiiiiiii = Module["dynCall_jiiiiiiiii"] = wasmExports["dynCall_jiiiiiiiii"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);

var dynCall_jiiiiii = Module["dynCall_jiiiiii"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_jiiiiii = Module["dynCall_jiiiiii"] = wasmExports["dynCall_jiiiiii"])(a0, a1, a2, a3, a4, a5, a6);

var dynCall_jiiiii = Module["dynCall_jiiiii"] = (a0, a1, a2, a3, a4, a5) => (dynCall_jiiiii = Module["dynCall_jiiiii"] = wasmExports["dynCall_jiiiii"])(a0, a1, a2, a3, a4, a5);

var dynCall_jiiiiiiii = Module["dynCall_jiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => (dynCall_jiiiiiiii = Module["dynCall_jiiiiiiii"] = wasmExports["dynCall_jiiiiiiii"])(a0, a1, a2, a3, a4, a5, a6, a7, a8);

var dynCall_vij = Module["dynCall_vij"] = (a0, a1, a2, a3) => (dynCall_vij = Module["dynCall_vij"] = wasmExports["dynCall_vij"])(a0, a1, a2, a3);

var dynCall_iiij = Module["dynCall_iiij"] = (a0, a1, a2, a3, a4) => (dynCall_iiij = Module["dynCall_iiij"] = wasmExports["dynCall_iiij"])(a0, a1, a2, a3, a4);

var dynCall_viji = Module["dynCall_viji"] = (a0, a1, a2, a3, a4) => (dynCall_viji = Module["dynCall_viji"] = wasmExports["dynCall_viji"])(a0, a1, a2, a3, a4);

var dynCall_iidiiii = Module["dynCall_iidiiii"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_iidiiii = Module["dynCall_iidiiii"] = wasmExports["dynCall_iidiiii"])(a0, a1, a2, a3, a4, a5, a6);

var _asyncify_start_unwind = a0 => (_asyncify_start_unwind = wasmExports["asyncify_start_unwind"])(a0);

var _asyncify_stop_unwind = () => (_asyncify_stop_unwind = wasmExports["asyncify_stop_unwind"])();

var _asyncify_start_rewind = a0 => (_asyncify_start_rewind = wasmExports["asyncify_start_rewind"])(a0);

var _asyncify_stop_rewind = () => (_asyncify_stop_rewind = wasmExports["asyncify_stop_rewind"])();

var _ff_h264_cabac_tables = Module["_ff_h264_cabac_tables"] = 514684;

var ___start_em_js = Module["___start_em_js"] = 2177344;

var ___stop_em_js = Module["___stop_em_js"] = 2180474;

function invoke_iiiii(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  return dynCall_iiiii(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_vii(index, a1, a2) {
 var sp = stackSave();
 try {
  dynCall_vii(index, a1, a2);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iii(index, a1, a2) {
 var sp = stackSave();
 try {
  return dynCall_iii(index, a1, a2);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
 var sp = stackSave();
 try {
  return dynCall_iiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viii(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  dynCall_viii(index, a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_ii(index, a1) {
 var sp = stackSave();
 try {
  return dynCall_ii(index, a1);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_vi(index, a1) {
 var sp = stackSave();
 try {
  dynCall_vi(index, a1);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiii(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  dynCall_viiii(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiid(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  dynCall_viiid(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiii(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  return dynCall_iiiiii(index, a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiii(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  return dynCall_iiii(index, a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_i(index) {
 var sp = stackSave();
 try {
  return dynCall_i(index);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiii(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  dynCall_viiiii(index, a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
 var sp = stackSave();
 try {
  dynCall_viiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
 var sp = stackSave();
 try {
  dynCall_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiiii(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  dynCall_viiiiii(index, a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
 var sp = stackSave();
 try {
  dynCall_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
 var sp = stackSave();
 try {
  dynCall_viiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
 var sp = stackSave();
 try {
  dynCall_viiiiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_v(index) {
 var sp = stackSave();
 try {
  dynCall_v(index);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
 var sp = stackSave();
 try {
  return dynCall_iiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
 var sp = stackSave();
 try {
  return dynCall_iiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiijj(index, a1, a2, a3, a4, a5, a6, a7) {
 var sp = stackSave();
 try {
  return dynCall_iiiijj(index, a1, a2, a3, a4, a5, a6, a7);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_iij(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  return dynCall_iij(index, a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_jij(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  return dynCall_jij(index, a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

function invoke_ij(index, a1, a2) {
 var sp = stackSave();
 try {
  return dynCall_ij(index, a1, a2);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0) throw e;
  _setThrew(1, 0);
 }
}

Module["wasmMemory"] = wasmMemory;

Module["keepRuntimeAlive"] = keepRuntimeAlive;

Module["cwrap"] = cwrap;

Module["ExitStatus"] = ExitStatus;

Module["PThread"] = PThread;

var calledRun;

dependenciesFulfilled = function runCaller() {
 if (!calledRun) run();
 if (!calledRun) dependenciesFulfilled = runCaller;
};

function run() {
 if (runDependencies > 0) {
  return;
 }
 if (ENVIRONMENT_IS_PTHREAD) {
  readyPromiseResolve(Module);
  initRuntime();
  startWorker(Module);
  return;
 }
 preRun();
 if (runDependencies > 0) {
  return;
 }
 function doRun() {
  if (calledRun) return;
  calledRun = true;
  Module["calledRun"] = true;
  if (ABORT) return;
  initRuntime();
  readyPromiseResolve(Module);
  if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
  postRun();
 }
 if (Module["setStatus"]) {
  Module["setStatus"]("Running...");
  setTimeout(function() {
   setTimeout(function() {
    Module["setStatus"]("");
   }, 1);
   doRun();
  }, 1);
 } else {
  doRun();
 }
}

if (Module["preInit"]) {
 if (typeof Module["preInit"] == "function") Module["preInit"] = [ Module["preInit"] ];
 while (Module["preInit"].length > 0) {
  Module["preInit"].pop()();
 }
}

run();

Module.serializationPromise = Promise.all([]);

Module.fsThrownError = null;

var ERRNO_CODES = {
 EPERM: 1,
 EIO: 5,
 EAGAIN: 6,
 ECANCELED: 11,
 ESPIPE: 29
};

var readerCallbacks = {
 open: function(stream) {
  if (stream.flags & 3) {
   throw new FS.ErrnoError(ERRNO_CODES.EPERM);
  }
 },
 close: function() {},
 read: function(stream, buffer, offset, length, position) {
  var data = Module.readBuffers[stream.node.name];
  if (!data) throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
  if (data.error) {
   Module.fsThrownError = data.error;
   throw new FS.ErrnoError(ERRNO_CODES.ECANCELED);
  }
  if (data.errorCode) throw new FS.ErrnoError(data.errorCode);
  if (data.buf.length === 0) {
   if (data.eof) {
    return 0;
   } else {
    data.ready = false;
    throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
   }
  }
  var ret;
  if (length < data.buf.length) {
   ret = data.buf.subarray(0, length);
   data.buf = data.buf.slice(length);
  } else {
   ret = data.buf;
   data.buf = new Uint8Array(0);
  }
  (new Uint8Array(buffer.buffer)).set(ret, offset);
  return ret.length;
 },
 write: function() {
  throw new FS.ErrnoError(ERRNO_CODES.EIO);
 },
 llseek: function() {
  throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
 }
};

var blockReaderCallbacks = {
 open: function(stream) {
  if (stream.flags & 3) throw new FS.ErrnoError(ERRNO_CODES.EPERM);
 },
 close: function() {},
 read: function(stream, buffer, offset, length, position) {
  var data = Module.blockReadBuffers[stream.node.name];
  if (!data) throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
  if (data.error) {
   Module.fsThrownError = data.error;
   throw new FS.ErrnoError(ERRNO_CODES.ECANCELED);
  }
  if (data.errorCode) throw new FS.ErrnoError(data.errorCode);
  var bufMin = data.position;
  var bufMax = data.position + data.buf.length;
  if (position < bufMin || position >= bufMax) {
   if (position >= stream.node.ff_block_reader_dev_size) return 0;
   if (!Module.onblockread) throw new FS.ErrnoError(ERRNO_CODES.EIO);
   try {
    var brr = Module.onblockread(stream.node.name, position, length);
    if (brr && brr.then && brr.catch) {
     brr.catch(function(ex) {
      ff_block_reader_dev_send(stream.node.name, position, null, {
       error: ex
      });
     });
    }
   } catch (ex) {
    Module.fsThrownError = ex;
    throw new FS.ErrnoError(ERRNO_CODES.ECANCELED);
   }
   bufMin = data.position;
   bufMax = data.position + data.buf.length;
   if (position < bufMin || position >= bufMax) {
    data.ready = false;
    throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
   }
  }
  var bufPos = position - bufMin;
  var ret;
  if (bufPos + length < data.buf.length) {
   ret = data.buf.subarray(bufPos, bufPos + length);
  } else {
   ret = data.buf.subarray(bufPos, data.buf.length);
  }
  (new Uint8Array(buffer.buffer)).set(ret, offset);
  return ret.length;
 },
 write: function() {
  throw new FS.ErrnoError(ERRNO_CODES.EIO);
 },
 llseek: function(stream, offset, whence) {
  if (whence === 2) /* SEEK_END */ offset = stream.node.size + offset; else if (whence === 1) /* SEEK_CUR */ offset += stream.position;
  return offset;
 }
};

var writerCallbacks = {
 open: function(stream) {
  if (!(stream.flags & 1)) {
   throw new FS.ErrnoError(ERRNO_CODES.EPERM);
  }
 },
 close: function() {},
 read: function() {
  throw new FS.ErrnoError(ERRNO_CODES.EIO);
 },
 write: function(stream, buffer, offset, length, position) {
  if (!Module.onwrite) throw new FS.ErrnoError(ERRNO_CODES.EIO);
  Module.onwrite(stream.node.name, position, buffer.subarray(offset, offset + length));
  return length;
 },
 llseek: function(stream, offset, whence) {
  if (whence === 2) throw new FS.ErrnoError(ERRNO_CODES.EIO); else if (whence === 1) offset += stream.position;
  return offset;
 }
};

var streamWriterCallbacks = Object.create(writerCallbacks);

streamWriterCallbacks.write = function(stream, buffer, offset, length, position) {
 if (position != stream.position) throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
 return writerCallbacks.write(stream, buffer, offset, length, position);
};

streamWriterCallbacks.llseek = function() {
 throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
};

/* Filesystem for a writer directory. This is done by using MEMFS, but overriding
 * the stream operations. */ var streamWriterFS = Object.create(MEMFS);

streamWriterFS.mount = function(mount) {
 return streamWriterFS.createNode(null, "/", 16384 | /* S_IFDIR */ 511, 0);
};

streamWriterFS.createNode = function() {
 var node = MEMFS.createNode.apply(MEMFS, arguments);
 if (FS.isDir(node.mode)) {
  if (!streamWriterFS.dir_node_ops) {
   streamWriterFS.dir_node_ops = Object.create(node.node_ops);
   streamWriterFS.dir_node_ops.mknod = function(parent, name, mode, dev) {
    return streamWriterFS.createNode(parent, name, mode, dev);
   };
  }
  node.node_ops = streamWriterFS.dir_node_ops;
 } else if (FS.isFile(node.mode)) {
  node.stream_ops = writerCallbacks;
 }
 return node;
};

/* Original versions of all our functions, since the Module version is replaced
 * if we're a Worker */ var CAccessors = {};

var av_get_bytes_per_sample = Module.av_get_bytes_per_sample = CAccessors.av_get_bytes_per_sample = Module.cwrap("av_get_bytes_per_sample", "number", [ "number" ]);

var av_compare_ts_js = Module.av_compare_ts_js = CAccessors.av_compare_ts_js = Module.cwrap("av_compare_ts_js", "number", [ "number", "number", "number", "number", "number", "number", "number", "number" ]);

var av_opt_set = Module.av_opt_set = CAccessors.av_opt_set = Module.cwrap("av_opt_set", "number", [ "number", "string", "string", "number" ]);

var av_opt_set_int_list_js = Module.av_opt_set_int_list_js = CAccessors.av_opt_set_int_list_js = Module.cwrap("av_opt_set_int_list_js", "number", [ "number", "string", "number", "number", "number", "number" ]);

var av_frame_alloc = Module.av_frame_alloc = CAccessors.av_frame_alloc = Module.cwrap("av_frame_alloc", "number", []);

var av_frame_clone = Module.av_frame_clone = CAccessors.av_frame_clone = Module.cwrap("av_frame_clone", "number", [ "number", "number" ]);

var av_frame_free = Module.av_frame_free = CAccessors.av_frame_free = Module.cwrap("av_frame_free", null, [ "number" ]);

var av_frame_get_buffer = Module.av_frame_get_buffer = CAccessors.av_frame_get_buffer = Module.cwrap("av_frame_get_buffer", "number", [ "number", "number" ]);

var av_frame_make_writable = Module.av_frame_make_writable = CAccessors.av_frame_make_writable = Module.cwrap("av_frame_make_writable", "number", [ "number" ]);

var av_frame_ref = Module.av_frame_ref = CAccessors.av_frame_ref = Module.cwrap("av_frame_ref", "number", [ "number", "number" ]);

var av_frame_unref = Module.av_frame_unref = CAccessors.av_frame_unref = Module.cwrap("av_frame_unref", null, [ "number" ]);

var av_log_get_level = Module.av_log_get_level = CAccessors.av_log_get_level = Module.cwrap("av_log_get_level", "number", []);

var av_log_set_level = Module.av_log_set_level = CAccessors.av_log_set_level = Module.cwrap("av_log_set_level", null, [ "number" ]);

var av_packet_alloc = Module.av_packet_alloc = CAccessors.av_packet_alloc = Module.cwrap("av_packet_alloc", "number", []);

var av_packet_clone = Module.av_packet_clone = CAccessors.av_packet_clone = Module.cwrap("av_packet_clone", "number", [ "number" ]);

var av_packet_free = Module.av_packet_free = CAccessors.av_packet_free = Module.cwrap("av_packet_free", null, [ "number" ]);

var av_packet_new_side_data = Module.av_packet_new_side_data = CAccessors.av_packet_new_side_data = Module.cwrap("av_packet_new_side_data", "number", [ "number", "number", "number" ]);

var av_packet_ref = Module.av_packet_ref = CAccessors.av_packet_ref = Module.cwrap("av_packet_ref", "number", [ "number", "number" ]);

var av_packet_rescale_ts_js = Module.av_packet_rescale_ts_js = CAccessors.av_packet_rescale_ts_js = Module.cwrap("av_packet_rescale_ts_js", null, [ "number", "number", "number", "number", "number" ]);

var av_packet_unref = Module.av_packet_unref = CAccessors.av_packet_unref = Module.cwrap("av_packet_unref", null, [ "number" ]);

var av_strdup = Module.av_strdup = CAccessors.av_strdup = Module.cwrap("av_strdup", "number", [ "string" ]);

var av_buffersink_get_frame = Module.av_buffersink_get_frame = CAccessors.av_buffersink_get_frame = Module.cwrap("av_buffersink_get_frame", "number", [ "number", "number" ]);

var av_buffersink_set_frame_size = Module.av_buffersink_set_frame_size = CAccessors.av_buffersink_set_frame_size = Module.cwrap("av_buffersink_set_frame_size", null, [ "number", "number" ]);

var av_buffersrc_add_frame_flags = Module.av_buffersrc_add_frame_flags = CAccessors.av_buffersrc_add_frame_flags = Module.cwrap("av_buffersrc_add_frame_flags", "number", [ "number", "number", "number" ]);

var avfilter_free = Module.avfilter_free = CAccessors.avfilter_free = Module.cwrap("avfilter_free", null, [ "number" ]);

var avfilter_get_by_name = Module.avfilter_get_by_name = CAccessors.avfilter_get_by_name = Module.cwrap("avfilter_get_by_name", "number", [ "string" ]);

var avfilter_graph_alloc = Module.avfilter_graph_alloc = CAccessors.avfilter_graph_alloc = Module.cwrap("avfilter_graph_alloc", "number", []);

var avfilter_graph_config = Module.avfilter_graph_config = CAccessors.avfilter_graph_config = Module.cwrap("avfilter_graph_config", "number", [ "number", "number" ]);

var avfilter_graph_create_filter_js = Module.avfilter_graph_create_filter_js = CAccessors.avfilter_graph_create_filter_js = Module.cwrap("avfilter_graph_create_filter_js", "number", [ "number", "string", "string", "number", "number" ]);

var avfilter_graph_free = Module.avfilter_graph_free = CAccessors.avfilter_graph_free = Module.cwrap("avfilter_graph_free", null, [ "number" ]);

var avfilter_graph_parse = Module.avfilter_graph_parse = CAccessors.avfilter_graph_parse = Module.cwrap("avfilter_graph_parse", "number", [ "number", "string", "number", "number", "number" ]);

var avfilter_inout_alloc = Module.avfilter_inout_alloc = CAccessors.avfilter_inout_alloc = Module.cwrap("avfilter_inout_alloc", "number", []);

var avfilter_inout_free = Module.avfilter_inout_free = CAccessors.avfilter_inout_free = Module.cwrap("avfilter_inout_free", null, [ "number" ]);

var avfilter_link = Module.avfilter_link = CAccessors.avfilter_link = Module.cwrap("avfilter_link", "number", [ "number", "number", "number", "number" ]);

var avcodec_alloc_context3 = Module.avcodec_alloc_context3 = CAccessors.avcodec_alloc_context3 = Module.cwrap("avcodec_alloc_context3", "number", [ "number" ]);

var avcodec_close = Module.avcodec_close = CAccessors.avcodec_close = Module.cwrap("avcodec_close", "number", [ "number" ]);

var avcodec_descriptor_get = Module.avcodec_descriptor_get = CAccessors.avcodec_descriptor_get = Module.cwrap("avcodec_descriptor_get", "number", [ "number" ]);

var avcodec_descriptor_get_by_name = Module.avcodec_descriptor_get_by_name = CAccessors.avcodec_descriptor_get_by_name = Module.cwrap("avcodec_descriptor_get_by_name", "number", [ "string" ]);

var avcodec_descriptor_next = Module.avcodec_descriptor_next = CAccessors.avcodec_descriptor_next = Module.cwrap("avcodec_descriptor_next", "number", [ "number" ]);

var avcodec_find_decoder = Module.avcodec_find_decoder = CAccessors.avcodec_find_decoder = Module.cwrap("avcodec_find_decoder", "number", [ "number" ]);

var avcodec_find_decoder_by_name = Module.avcodec_find_decoder_by_name = CAccessors.avcodec_find_decoder_by_name = Module.cwrap("avcodec_find_decoder_by_name", "number", [ "string" ]);

var avcodec_find_encoder = Module.avcodec_find_encoder = CAccessors.avcodec_find_encoder = Module.cwrap("avcodec_find_encoder", "number", [ "number" ]);

var avcodec_find_encoder_by_name = Module.avcodec_find_encoder_by_name = CAccessors.avcodec_find_encoder_by_name = Module.cwrap("avcodec_find_encoder_by_name", "number", [ "string" ]);

var avcodec_free_context = Module.avcodec_free_context = CAccessors.avcodec_free_context = Module.cwrap("avcodec_free_context", null, [ "number" ]);

var avcodec_get_name = Module.avcodec_get_name = CAccessors.avcodec_get_name = Module.cwrap("avcodec_get_name", "string", [ "number" ]);

var avcodec_open2 = Module.avcodec_open2 = CAccessors.avcodec_open2 = Module.cwrap("avcodec_open2", "number", [ "number", "number", "number" ]);

var avcodec_open2_js = Module.avcodec_open2_js = CAccessors.avcodec_open2_js = Module.cwrap("avcodec_open2_js", "number", [ "number", "number", "number" ]);

var avcodec_parameters_alloc = Module.avcodec_parameters_alloc = CAccessors.avcodec_parameters_alloc = Module.cwrap("avcodec_parameters_alloc", "number", []);

var avcodec_parameters_copy = Module.avcodec_parameters_copy = CAccessors.avcodec_parameters_copy = Module.cwrap("avcodec_parameters_copy", "number", [ "number", "number" ]);

var avcodec_parameters_free = Module.avcodec_parameters_free = CAccessors.avcodec_parameters_free = Module.cwrap("avcodec_parameters_free", null, [ "number" ]);

var avcodec_parameters_from_context = Module.avcodec_parameters_from_context = CAccessors.avcodec_parameters_from_context = Module.cwrap("avcodec_parameters_from_context", "number", [ "number", "number" ]);

var avcodec_parameters_to_context = Module.avcodec_parameters_to_context = CAccessors.avcodec_parameters_to_context = Module.cwrap("avcodec_parameters_to_context", "number", [ "number", "number" ]);

var avcodec_receive_frame = Module.avcodec_receive_frame = CAccessors.avcodec_receive_frame = Module.cwrap("avcodec_receive_frame", "number", [ "number", "number" ]);

var avcodec_receive_packet = Module.avcodec_receive_packet = CAccessors.avcodec_receive_packet = Module.cwrap("avcodec_receive_packet", "number", [ "number", "number" ]);

var avcodec_send_frame = Module.avcodec_send_frame = CAccessors.avcodec_send_frame = Module.cwrap("avcodec_send_frame", "number", [ "number", "number" ]);

var avcodec_send_packet = Module.avcodec_send_packet = CAccessors.avcodec_send_packet = Module.cwrap("avcodec_send_packet", "number", [ "number", "number" ]);

var av_find_input_format = Module.av_find_input_format = CAccessors.av_find_input_format = Module.cwrap("av_find_input_format", "number", [ "string" ]);

var avformat_alloc_context = Module.avformat_alloc_context = CAccessors.avformat_alloc_context = Module.cwrap("avformat_alloc_context", "number", []);

var avformat_alloc_output_context2_js = Module.avformat_alloc_output_context2_js = CAccessors.avformat_alloc_output_context2_js = Module.cwrap("avformat_alloc_output_context2_js", "number", [ "number", "string", "string" ]);

var avformat_close_input = Module.avformat_close_input = CAccessors.avformat_close_input = Module.cwrap("avformat_close_input", null, [ "number" ]);

var avformat_find_stream_info = Module.avformat_find_stream_info = CAccessors.avformat_find_stream_info = Module.cwrap("avformat_find_stream_info", "number", [ "number", "number" ], {
 async: true
});

var avformat_find_stream_info__raw = avformat_find_stream_info;

avformat_find_stream_info = Module.avformat_find_stream_info = function() {
 var args = arguments;
 var ret = avformat_find_stream_info__raw.apply(void 0, args);
 if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) {
  return ret.then(function(ret) {
   if (ret === -11) throw Module.fsThrownError;
   return ret;
  });
 }
 return ret;
};

Module.avformat_find_stream_info = function() {
 var args = arguments;
 Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
  return avformat_find_stream_info.apply(void 0, args);
 });
 return Module.serializationPromise;
};

var avformat_flush = Module.avformat_flush = CAccessors.avformat_flush = Module.cwrap("avformat_flush", "number", [ "number" ]);

var avformat_free_context = Module.avformat_free_context = CAccessors.avformat_free_context = Module.cwrap("avformat_free_context", null, [ "number" ]);

var avformat_new_stream = Module.avformat_new_stream = CAccessors.avformat_new_stream = Module.cwrap("avformat_new_stream", "number", [ "number", "number" ]);

var avformat_open_input = Module.avformat_open_input = CAccessors.avformat_open_input = Module.cwrap("avformat_open_input", "number", [ "number", "string", "number", "number" ], {
 async: true
});

var avformat_open_input__raw = avformat_open_input;

avformat_open_input = Module.avformat_open_input = function() {
 var args = arguments;
 var ret = avformat_open_input__raw.apply(void 0, args);
 if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) {
  return ret.then(function(ret) {
   if (ret === -11) throw Module.fsThrownError;
   return ret;
  });
 }
 return ret;
};

Module.avformat_open_input = function() {
 var args = arguments;
 Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
  return avformat_open_input.apply(void 0, args);
 });
 return Module.serializationPromise;
};

var avformat_open_input_js = Module.avformat_open_input_js = CAccessors.avformat_open_input_js = Module.cwrap("avformat_open_input_js", "number", [ "string", "number", "number" ], {
 async: true
});

var avformat_open_input_js__raw = avformat_open_input_js;

avformat_open_input_js = Module.avformat_open_input_js = function() {
 var args = arguments;
 var ret = avformat_open_input_js__raw.apply(void 0, args);
 if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) {
  return ret.then(function(ret) {
   if (ret === -11) throw Module.fsThrownError;
   return ret;
  });
 }
 return ret;
};

Module.avformat_open_input_js = function() {
 var args = arguments;
 Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
  return avformat_open_input_js.apply(void 0, args);
 });
 return Module.serializationPromise;
};

var avformat_seek_file = Module.avformat_seek_file = CAccessors.avformat_seek_file = Module.cwrap("avformat_seek_file", "number", [ "number", "number", "number", "number", "number", "number" ], {
 async: true
});

var avformat_seek_file__raw = avformat_seek_file;

avformat_seek_file = Module.avformat_seek_file = function() {
 var args = arguments;
 var ret = avformat_seek_file__raw.apply(void 0, args);
 if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) {
  return ret.then(function(ret) {
   if (ret === -11) throw Module.fsThrownError;
   return ret;
  });
 }
 return ret;
};

Module.avformat_seek_file = function() {
 var args = arguments;
 Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
  return avformat_seek_file.apply(void 0, args);
 });
 return Module.serializationPromise;
};

var avformat_seek_file_min = Module.avformat_seek_file_min = CAccessors.avformat_seek_file_min = Module.cwrap("avformat_seek_file_min", "number", [ "number", "number", "number", "number" ], {
 async: true
});

var avformat_seek_file_min__raw = avformat_seek_file_min;

avformat_seek_file_min = Module.avformat_seek_file_min = function() {
 var args = arguments;
 var ret = avformat_seek_file_min__raw.apply(void 0, args);
 if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) {
  return ret.then(function(ret) {
   if (ret === -11) throw Module.fsThrownError;
   return ret;
  });
 }
 return ret;
};

Module.avformat_seek_file_min = function() {
 var args = arguments;
 Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
  return avformat_seek_file_min.apply(void 0, args);
 });
 return Module.serializationPromise;
};

var avformat_seek_file_max = Module.avformat_seek_file_max = CAccessors.avformat_seek_file_max = Module.cwrap("avformat_seek_file_max", "number", [ "number", "number", "number", "number" ], {
 async: true
});

var avformat_seek_file_max__raw = avformat_seek_file_max;

avformat_seek_file_max = Module.avformat_seek_file_max = function() {
 var args = arguments;
 var ret = avformat_seek_file_max__raw.apply(void 0, args);
 if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) {
  return ret.then(function(ret) {
   if (ret === -11) throw Module.fsThrownError;
   return ret;
  });
 }
 return ret;
};

Module.avformat_seek_file_max = function() {
 var args = arguments;
 Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
  return avformat_seek_file_max.apply(void 0, args);
 });
 return Module.serializationPromise;
};

var avformat_seek_file_approx = Module.avformat_seek_file_approx = CAccessors.avformat_seek_file_approx = Module.cwrap("avformat_seek_file_approx", "number", [ "number", "number", "number", "number" ], {
 async: true
});

var avformat_seek_file_approx__raw = avformat_seek_file_approx;

avformat_seek_file_approx = Module.avformat_seek_file_approx = function() {
 var args = arguments;
 var ret = avformat_seek_file_approx__raw.apply(void 0, args);
 if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) {
  return ret.then(function(ret) {
   if (ret === -11) throw Module.fsThrownError;
   return ret;
  });
 }
 return ret;
};

Module.avformat_seek_file_approx = function() {
 var args = arguments;
 Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
  return avformat_seek_file_approx.apply(void 0, args);
 });
 return Module.serializationPromise;
};

var avformat_write_header = Module.avformat_write_header = CAccessors.avformat_write_header = Module.cwrap("avformat_write_header", "number", [ "number", "number" ]);

var avio_open2_js = Module.avio_open2_js = CAccessors.avio_open2_js = Module.cwrap("avio_open2_js", "number", [ "string", "number", "number", "number" ]);

var avio_close = Module.avio_close = CAccessors.avio_close = Module.cwrap("avio_close", "number", [ "number" ]);

var avio_flush = Module.avio_flush = CAccessors.avio_flush = Module.cwrap("avio_flush", null, [ "number" ]);

var av_find_best_stream = Module.av_find_best_stream = CAccessors.av_find_best_stream = Module.cwrap("av_find_best_stream", "number", [ "number", "number", "number", "number", "number", "number" ]);

var av_get_sample_fmt_name = Module.av_get_sample_fmt_name = CAccessors.av_get_sample_fmt_name = Module.cwrap("av_get_sample_fmt_name", "string", [ "number" ]);

var av_grow_packet = Module.av_grow_packet = CAccessors.av_grow_packet = Module.cwrap("av_grow_packet", "number", [ "number", "number" ]);

var av_interleaved_write_frame = Module.av_interleaved_write_frame = CAccessors.av_interleaved_write_frame = Module.cwrap("av_interleaved_write_frame", "number", [ "number", "number" ]);

var av_packet_make_writable = Module.av_packet_make_writable = CAccessors.av_packet_make_writable = Module.cwrap("av_packet_make_writable", "number", [ "number" ]);

var av_pix_fmt_desc_get = Module.av_pix_fmt_desc_get = CAccessors.av_pix_fmt_desc_get = Module.cwrap("av_pix_fmt_desc_get", "number", [ "number" ]);

var av_read_frame = Module.av_read_frame = CAccessors.av_read_frame = Module.cwrap("av_read_frame", "number", [ "number", "number" ], {
 async: true
});

var av_read_frame__raw = av_read_frame;

av_read_frame = Module.av_read_frame = function() {
 var args = arguments;
 var ret = av_read_frame__raw.apply(void 0, args);
 if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) {
  return ret.then(function(ret) {
   if (ret === -11) throw Module.fsThrownError;
   return ret;
  });
 }
 return ret;
};

Module.av_read_frame = function() {
 var args = arguments;
 Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
  return av_read_frame.apply(void 0, args);
 });
 return Module.serializationPromise;
};

var av_shrink_packet = Module.av_shrink_packet = CAccessors.av_shrink_packet = Module.cwrap("av_shrink_packet", null, [ "number", "number" ]);

var av_write_frame = Module.av_write_frame = CAccessors.av_write_frame = Module.cwrap("av_write_frame", "number", [ "number", "number" ]);

var av_write_trailer = Module.av_write_trailer = CAccessors.av_write_trailer = Module.cwrap("av_write_trailer", "number", [ "number" ]);

var av_dict_copy_js = Module.av_dict_copy_js = CAccessors.av_dict_copy_js = Module.cwrap("av_dict_copy_js", "number", [ "number", "number", "number" ]);

var av_dict_free = Module.av_dict_free = CAccessors.av_dict_free = Module.cwrap("av_dict_free", null, [ "number" ]);

var av_dict_set_js = Module.av_dict_set_js = CAccessors.av_dict_set_js = Module.cwrap("av_dict_set_js", "number", [ "number", "string", "string", "number" ]);

var sws_getContext = Module.sws_getContext = CAccessors.sws_getContext = Module.cwrap("sws_getContext", "number", [ "number", "number", "number", "number", "number", "number", "number", "number", "number", "number" ]);

var sws_freeContext = Module.sws_freeContext = CAccessors.sws_freeContext = Module.cwrap("sws_freeContext", null, [ "number" ]);

var sws_scale_frame = Module.sws_scale_frame = CAccessors.sws_scale_frame = Module.cwrap("sws_scale_frame", "number", [ "number", "number", "number" ]);

var AVFrame_sample_aspect_ratio_num = Module.AVFrame_sample_aspect_ratio_num = CAccessors.AVFrame_sample_aspect_ratio_num = Module.cwrap("AVFrame_sample_aspect_ratio_num", "number", [ "number" ]);

var AVFrame_sample_aspect_ratio_den = Module.AVFrame_sample_aspect_ratio_den = CAccessors.AVFrame_sample_aspect_ratio_den = Module.cwrap("AVFrame_sample_aspect_ratio_den", "number", [ "number" ]);

var AVFrame_sample_aspect_ratio_s = Module.AVFrame_sample_aspect_ratio_s = CAccessors.AVFrame_sample_aspect_ratio_s = Module.cwrap("AVFrame_sample_aspect_ratio_s", null, [ "number", "number", "number" ]);

var AVCodecContext_framerate_num = Module.AVCodecContext_framerate_num = CAccessors.AVCodecContext_framerate_num = Module.cwrap("AVCodecContext_framerate_num", "number", [ "number" ]);

var AVCodecContext_framerate_den = Module.AVCodecContext_framerate_den = CAccessors.AVCodecContext_framerate_den = Module.cwrap("AVCodecContext_framerate_den", "number", [ "number" ]);

var AVCodecContext_framerate_num_s = Module.AVCodecContext_framerate_num_s = CAccessors.AVCodecContext_framerate_num_s = Module.cwrap("AVCodecContext_framerate_num_s", null, [ "number", "number" ]);

var AVCodecContext_framerate_den_s = Module.AVCodecContext_framerate_den_s = CAccessors.AVCodecContext_framerate_den_s = Module.cwrap("AVCodecContext_framerate_den_s", null, [ "number", "number" ]);

var AVCodecContext_framerate_s = Module.AVCodecContext_framerate_s = CAccessors.AVCodecContext_framerate_s = Module.cwrap("AVCodecContext_framerate_s", null, [ "number", "number", "number" ]);

var AVCodecContext_sample_aspect_ratio_num = Module.AVCodecContext_sample_aspect_ratio_num = CAccessors.AVCodecContext_sample_aspect_ratio_num = Module.cwrap("AVCodecContext_sample_aspect_ratio_num", "number", [ "number" ]);

var AVCodecContext_sample_aspect_ratio_den = Module.AVCodecContext_sample_aspect_ratio_den = CAccessors.AVCodecContext_sample_aspect_ratio_den = Module.cwrap("AVCodecContext_sample_aspect_ratio_den", "number", [ "number" ]);

var AVCodecContext_sample_aspect_ratio_num_s = Module.AVCodecContext_sample_aspect_ratio_num_s = CAccessors.AVCodecContext_sample_aspect_ratio_num_s = Module.cwrap("AVCodecContext_sample_aspect_ratio_num_s", null, [ "number", "number" ]);

var AVCodecContext_sample_aspect_ratio_den_s = Module.AVCodecContext_sample_aspect_ratio_den_s = CAccessors.AVCodecContext_sample_aspect_ratio_den_s = Module.cwrap("AVCodecContext_sample_aspect_ratio_den_s", null, [ "number", "number" ]);

var AVCodecContext_sample_aspect_ratio_s = Module.AVCodecContext_sample_aspect_ratio_s = CAccessors.AVCodecContext_sample_aspect_ratio_s = Module.cwrap("AVCodecContext_sample_aspect_ratio_s", null, [ "number", "number", "number" ]);

var AVCodecContext_time_base_s = Module.AVCodecContext_time_base_s = CAccessors.AVCodecContext_time_base_s = Module.cwrap("AVCodecContext_time_base_s", null, [ "number", "number", "number" ]);

var AVStream_time_base_num = Module.AVStream_time_base_num = CAccessors.AVStream_time_base_num = Module.cwrap("AVStream_time_base_num", "number", [ "number" ]);

var AVStream_time_base_den = Module.AVStream_time_base_den = CAccessors.AVStream_time_base_den = Module.cwrap("AVStream_time_base_den", "number", [ "number" ]);

var AVStream_time_base_s = Module.AVStream_time_base_s = CAccessors.AVStream_time_base_s = Module.cwrap("AVStream_time_base_s", null, [ "number", "number", "number" ]);

var AVPacketSideData_data = Module.AVPacketSideData_data = CAccessors.AVPacketSideData_data = Module.cwrap("AVPacketSideData_data", "number", [ "number", "number" ]);

var AVPacketSideData_size = Module.AVPacketSideData_size = CAccessors.AVPacketSideData_size = Module.cwrap("AVPacketSideData_size", "number", [ "number", "number" ]);

var AVPacketSideData_type = Module.AVPacketSideData_type = CAccessors.AVPacketSideData_type = Module.cwrap("AVPacketSideData_type", "number", [ "number", "number" ]);

var AVPixFmtDescriptor_comp_depth = Module.AVPixFmtDescriptor_comp_depth = CAccessors.AVPixFmtDescriptor_comp_depth = Module.cwrap("AVPixFmtDescriptor_comp_depth", "number", [ "number", "number" ]);

var ff_error = Module.ff_error = CAccessors.ff_error = Module.cwrap("ff_error", "string", [ "number" ]);

var ff_nothing = Module.ff_nothing = CAccessors.ff_nothing = Module.cwrap("ff_nothing", null, [], {
 async: true
});

Module.ff_nothing = function() {
 var args = arguments;
 Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
  return ff_nothing.apply(void 0, args);
 });
 return Module.serializationPromise;
};

var calloc = Module.calloc = CAccessors.calloc = Module.cwrap("calloc", "number", [ "number", "number" ]);

var close = Module.close = CAccessors.close = Module.cwrap("close", "number", [ "number" ]);

var dup2 = Module.dup2 = CAccessors.dup2 = Module.cwrap("dup2", "number", [ "number", "number" ]);

var free = Module.free = CAccessors.free = Module.cwrap("free", null, [ "number" ]);

var malloc = Module.malloc = CAccessors.malloc = Module.cwrap("malloc", "number", [ "number" ]);

var mallinfo_uordblks = Module.mallinfo_uordblks = CAccessors.mallinfo_uordblks = Module.cwrap("mallinfo_uordblks", "number", []);

var open = Module.open = CAccessors.open = Module.cwrap("open", "number", [ "string", "number", "number" ]);

var strerror = Module.strerror = CAccessors.strerror = Module.cwrap("strerror", "string", [ "number" ]);

var libavjs_with_swscale = Module.libavjs_with_swscale = CAccessors.libavjs_with_swscale = Module.cwrap("libavjs_with_swscale", "number", []);

var libavjs_create_main_thread = Module.libavjs_create_main_thread = CAccessors.libavjs_create_main_thread = Module.cwrap("libavjs_create_main_thread", "number", []);

var ffmpeg_main = Module.ffmpeg_main = CAccessors.ffmpeg_main = Module.cwrap("ffmpeg_main", "number", [ "number", "number" ], {
 async: true
});

Module.ffmpeg_main = function() {
 var args = arguments;
 Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
  return ffmpeg_main.apply(void 0, args);
 });
 return Module.serializationPromise;
};

var ffprobe_main = Module.ffprobe_main = CAccessors.ffprobe_main = Module.cwrap("ffprobe_main", "number", [ "number", "number" ], {
 async: true
});

Module.ffprobe_main = function() {
 var args = arguments;
 Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
  return ffprobe_main.apply(void 0, args);
 });
 return Module.serializationPromise;
};

var AVFrame_channel_layout = Module.AVFrame_channel_layout = CAccessors.AVFrame_channel_layout = Module.cwrap("AVFrame_channel_layout", "number", [ "number" ]);

var AVFrame_channel_layout_s = Module.AVFrame_channel_layout_s = CAccessors.AVFrame_channel_layout_s = Module.cwrap("AVFrame_channel_layout_s", null, [ "number", "number" ]);

var AVFrame_channel_layouthi = Module.AVFrame_channel_layouthi = CAccessors.AVFrame_channel_layouthi = Module.cwrap("AVFrame_channel_layouthi", "number", [ "number" ]);

var AVFrame_channel_layouthi_s = Module.AVFrame_channel_layouthi_s = CAccessors.AVFrame_channel_layouthi_s = Module.cwrap("AVFrame_channel_layouthi_s", null, [ "number", "number" ]);

var AVFrame_channels = Module.AVFrame_channels = CAccessors.AVFrame_channels = Module.cwrap("AVFrame_channels", "number", [ "number" ]);

var AVFrame_channels_s = Module.AVFrame_channels_s = CAccessors.AVFrame_channels_s = Module.cwrap("AVFrame_channels_s", null, [ "number", "number" ]);

var AVFrame_channel_layoutmask = Module.AVFrame_channel_layoutmask = CAccessors.AVFrame_channel_layoutmask = Module.cwrap("AVFrame_channel_layoutmask", "number", [ "number" ]);

var AVFrame_channel_layoutmask_s = Module.AVFrame_channel_layoutmask_s = CAccessors.AVFrame_channel_layoutmask_s = Module.cwrap("AVFrame_channel_layoutmask_s", null, [ "number", "number" ]);

var AVFrame_ch_layout_nb_channels = Module.AVFrame_ch_layout_nb_channels = CAccessors.AVFrame_ch_layout_nb_channels = Module.cwrap("AVFrame_ch_layout_nb_channels", "number", [ "number" ]);

var AVFrame_ch_layout_nb_channels_s = Module.AVFrame_ch_layout_nb_channels_s = CAccessors.AVFrame_ch_layout_nb_channels_s = Module.cwrap("AVFrame_ch_layout_nb_channels_s", null, [ "number", "number" ]);

var AVFrame_crop_bottom = Module.AVFrame_crop_bottom = CAccessors.AVFrame_crop_bottom = Module.cwrap("AVFrame_crop_bottom", "number", [ "number" ]);

var AVFrame_crop_bottom_s = Module.AVFrame_crop_bottom_s = CAccessors.AVFrame_crop_bottom_s = Module.cwrap("AVFrame_crop_bottom_s", null, [ "number", "number" ]);

var AVFrame_crop_left = Module.AVFrame_crop_left = CAccessors.AVFrame_crop_left = Module.cwrap("AVFrame_crop_left", "number", [ "number" ]);

var AVFrame_crop_left_s = Module.AVFrame_crop_left_s = CAccessors.AVFrame_crop_left_s = Module.cwrap("AVFrame_crop_left_s", null, [ "number", "number" ]);

var AVFrame_crop_right = Module.AVFrame_crop_right = CAccessors.AVFrame_crop_right = Module.cwrap("AVFrame_crop_right", "number", [ "number" ]);

var AVFrame_crop_right_s = Module.AVFrame_crop_right_s = CAccessors.AVFrame_crop_right_s = Module.cwrap("AVFrame_crop_right_s", null, [ "number", "number" ]);

var AVFrame_crop_top = Module.AVFrame_crop_top = CAccessors.AVFrame_crop_top = Module.cwrap("AVFrame_crop_top", "number", [ "number" ]);

var AVFrame_crop_top_s = Module.AVFrame_crop_top_s = CAccessors.AVFrame_crop_top_s = Module.cwrap("AVFrame_crop_top_s", null, [ "number", "number" ]);

var AVFrame_data_a = Module.AVFrame_data_a = CAccessors.AVFrame_data_a = Module.cwrap("AVFrame_data_a", "number", [ "number", "number" ]);

var AVFrame_data_a_s = Module.AVFrame_data_a_s = CAccessors.AVFrame_data_a_s = Module.cwrap("AVFrame_data_a_s", null, [ "number", "number", "number" ]);

var AVFrame_format = Module.AVFrame_format = CAccessors.AVFrame_format = Module.cwrap("AVFrame_format", "number", [ "number" ]);

var AVFrame_format_s = Module.AVFrame_format_s = CAccessors.AVFrame_format_s = Module.cwrap("AVFrame_format_s", null, [ "number", "number" ]);

var AVFrame_height = Module.AVFrame_height = CAccessors.AVFrame_height = Module.cwrap("AVFrame_height", "number", [ "number" ]);

var AVFrame_height_s = Module.AVFrame_height_s = CAccessors.AVFrame_height_s = Module.cwrap("AVFrame_height_s", null, [ "number", "number" ]);

var AVFrame_key_frame = Module.AVFrame_key_frame = CAccessors.AVFrame_key_frame = Module.cwrap("AVFrame_key_frame", "number", [ "number" ]);

var AVFrame_key_frame_s = Module.AVFrame_key_frame_s = CAccessors.AVFrame_key_frame_s = Module.cwrap("AVFrame_key_frame_s", null, [ "number", "number" ]);

var AVFrame_linesize_a = Module.AVFrame_linesize_a = CAccessors.AVFrame_linesize_a = Module.cwrap("AVFrame_linesize_a", "number", [ "number", "number" ]);

var AVFrame_linesize_a_s = Module.AVFrame_linesize_a_s = CAccessors.AVFrame_linesize_a_s = Module.cwrap("AVFrame_linesize_a_s", null, [ "number", "number", "number" ]);

var AVFrame_nb_samples = Module.AVFrame_nb_samples = CAccessors.AVFrame_nb_samples = Module.cwrap("AVFrame_nb_samples", "number", [ "number" ]);

var AVFrame_nb_samples_s = Module.AVFrame_nb_samples_s = CAccessors.AVFrame_nb_samples_s = Module.cwrap("AVFrame_nb_samples_s", null, [ "number", "number" ]);

var AVFrame_pict_type = Module.AVFrame_pict_type = CAccessors.AVFrame_pict_type = Module.cwrap("AVFrame_pict_type", "number", [ "number" ]);

var AVFrame_pict_type_s = Module.AVFrame_pict_type_s = CAccessors.AVFrame_pict_type_s = Module.cwrap("AVFrame_pict_type_s", null, [ "number", "number" ]);

var AVFrame_pts = Module.AVFrame_pts = CAccessors.AVFrame_pts = Module.cwrap("AVFrame_pts", "number", [ "number" ]);

var AVFrame_pts_s = Module.AVFrame_pts_s = CAccessors.AVFrame_pts_s = Module.cwrap("AVFrame_pts_s", null, [ "number", "number" ]);

var AVFrame_ptshi = Module.AVFrame_ptshi = CAccessors.AVFrame_ptshi = Module.cwrap("AVFrame_ptshi", "number", [ "number" ]);

var AVFrame_ptshi_s = Module.AVFrame_ptshi_s = CAccessors.AVFrame_ptshi_s = Module.cwrap("AVFrame_ptshi_s", null, [ "number", "number" ]);

var AVFrame_sample_rate = Module.AVFrame_sample_rate = CAccessors.AVFrame_sample_rate = Module.cwrap("AVFrame_sample_rate", "number", [ "number" ]);

var AVFrame_sample_rate_s = Module.AVFrame_sample_rate_s = CAccessors.AVFrame_sample_rate_s = Module.cwrap("AVFrame_sample_rate_s", null, [ "number", "number" ]);

var AVFrame_width = Module.AVFrame_width = CAccessors.AVFrame_width = Module.cwrap("AVFrame_width", "number", [ "number" ]);

var AVFrame_width_s = Module.AVFrame_width_s = CAccessors.AVFrame_width_s = Module.cwrap("AVFrame_width_s", null, [ "number", "number" ]);

var AVPixFmtDescriptor_flags = Module.AVPixFmtDescriptor_flags = CAccessors.AVPixFmtDescriptor_flags = Module.cwrap("AVPixFmtDescriptor_flags", "number", [ "number" ]);

var AVPixFmtDescriptor_flags_s = Module.AVPixFmtDescriptor_flags_s = CAccessors.AVPixFmtDescriptor_flags_s = Module.cwrap("AVPixFmtDescriptor_flags_s", null, [ "number", "number" ]);

var AVPixFmtDescriptor_log2_chroma_h = Module.AVPixFmtDescriptor_log2_chroma_h = CAccessors.AVPixFmtDescriptor_log2_chroma_h = Module.cwrap("AVPixFmtDescriptor_log2_chroma_h", "number", [ "number" ]);

var AVPixFmtDescriptor_log2_chroma_h_s = Module.AVPixFmtDescriptor_log2_chroma_h_s = CAccessors.AVPixFmtDescriptor_log2_chroma_h_s = Module.cwrap("AVPixFmtDescriptor_log2_chroma_h_s", null, [ "number", "number" ]);

var AVPixFmtDescriptor_log2_chroma_w = Module.AVPixFmtDescriptor_log2_chroma_w = CAccessors.AVPixFmtDescriptor_log2_chroma_w = Module.cwrap("AVPixFmtDescriptor_log2_chroma_w", "number", [ "number" ]);

var AVPixFmtDescriptor_log2_chroma_w_s = Module.AVPixFmtDescriptor_log2_chroma_w_s = CAccessors.AVPixFmtDescriptor_log2_chroma_w_s = Module.cwrap("AVPixFmtDescriptor_log2_chroma_w_s", null, [ "number", "number" ]);

var AVPixFmtDescriptor_nb_components = Module.AVPixFmtDescriptor_nb_components = CAccessors.AVPixFmtDescriptor_nb_components = Module.cwrap("AVPixFmtDescriptor_nb_components", "number", [ "number" ]);

var AVPixFmtDescriptor_nb_components_s = Module.AVPixFmtDescriptor_nb_components_s = CAccessors.AVPixFmtDescriptor_nb_components_s = Module.cwrap("AVPixFmtDescriptor_nb_components_s", null, [ "number", "number" ]);

var AVCodec_sample_fmts = Module.AVCodec_sample_fmts = CAccessors.AVCodec_sample_fmts = Module.cwrap("AVCodec_sample_fmts", "number", [ "number" ]);

var AVCodec_sample_fmts_s = Module.AVCodec_sample_fmts_s = CAccessors.AVCodec_sample_fmts_s = Module.cwrap("AVCodec_sample_fmts_s", null, [ "number", "number" ]);

var AVCodec_sample_fmts_a = Module.AVCodec_sample_fmts_a = CAccessors.AVCodec_sample_fmts_a = Module.cwrap("AVCodec_sample_fmts_a", "number", [ "number", "number" ]);

var AVCodec_sample_fmts_a_s = Module.AVCodec_sample_fmts_a_s = CAccessors.AVCodec_sample_fmts_a_s = Module.cwrap("AVCodec_sample_fmts_a_s", null, [ "number", "number", "number" ]);

var AVCodec_supported_samplerates = Module.AVCodec_supported_samplerates = CAccessors.AVCodec_supported_samplerates = Module.cwrap("AVCodec_supported_samplerates", "number", [ "number" ]);

var AVCodec_supported_samplerates_s = Module.AVCodec_supported_samplerates_s = CAccessors.AVCodec_supported_samplerates_s = Module.cwrap("AVCodec_supported_samplerates_s", null, [ "number", "number" ]);

var AVCodec_supported_samplerates_a = Module.AVCodec_supported_samplerates_a = CAccessors.AVCodec_supported_samplerates_a = Module.cwrap("AVCodec_supported_samplerates_a", "number", [ "number", "number" ]);

var AVCodec_supported_samplerates_a_s = Module.AVCodec_supported_samplerates_a_s = CAccessors.AVCodec_supported_samplerates_a_s = Module.cwrap("AVCodec_supported_samplerates_a_s", null, [ "number", "number", "number" ]);

var AVCodec_type = Module.AVCodec_type = CAccessors.AVCodec_type = Module.cwrap("AVCodec_type", "number", [ "number" ]);

var AVCodec_type_s = Module.AVCodec_type_s = CAccessors.AVCodec_type_s = Module.cwrap("AVCodec_type_s", null, [ "number", "number" ]);

var AVCodecContext_codec_id = Module.AVCodecContext_codec_id = CAccessors.AVCodecContext_codec_id = Module.cwrap("AVCodecContext_codec_id", "number", [ "number" ]);

var AVCodecContext_codec_id_s = Module.AVCodecContext_codec_id_s = CAccessors.AVCodecContext_codec_id_s = Module.cwrap("AVCodecContext_codec_id_s", null, [ "number", "number" ]);

var AVCodecContext_codec_type = Module.AVCodecContext_codec_type = CAccessors.AVCodecContext_codec_type = Module.cwrap("AVCodecContext_codec_type", "number", [ "number" ]);

var AVCodecContext_codec_type_s = Module.AVCodecContext_codec_type_s = CAccessors.AVCodecContext_codec_type_s = Module.cwrap("AVCodecContext_codec_type_s", null, [ "number", "number" ]);

var AVCodecContext_bit_rate = Module.AVCodecContext_bit_rate = CAccessors.AVCodecContext_bit_rate = Module.cwrap("AVCodecContext_bit_rate", "number", [ "number" ]);

var AVCodecContext_bit_rate_s = Module.AVCodecContext_bit_rate_s = CAccessors.AVCodecContext_bit_rate_s = Module.cwrap("AVCodecContext_bit_rate_s", null, [ "number", "number" ]);

var AVCodecContext_bit_ratehi = Module.AVCodecContext_bit_ratehi = CAccessors.AVCodecContext_bit_ratehi = Module.cwrap("AVCodecContext_bit_ratehi", "number", [ "number" ]);

var AVCodecContext_bit_ratehi_s = Module.AVCodecContext_bit_ratehi_s = CAccessors.AVCodecContext_bit_ratehi_s = Module.cwrap("AVCodecContext_bit_ratehi_s", null, [ "number", "number" ]);

var AVCodecContext_channel_layout = Module.AVCodecContext_channel_layout = CAccessors.AVCodecContext_channel_layout = Module.cwrap("AVCodecContext_channel_layout", "number", [ "number" ]);

var AVCodecContext_channel_layout_s = Module.AVCodecContext_channel_layout_s = CAccessors.AVCodecContext_channel_layout_s = Module.cwrap("AVCodecContext_channel_layout_s", null, [ "number", "number" ]);

var AVCodecContext_channel_layouthi = Module.AVCodecContext_channel_layouthi = CAccessors.AVCodecContext_channel_layouthi = Module.cwrap("AVCodecContext_channel_layouthi", "number", [ "number" ]);

var AVCodecContext_channel_layouthi_s = Module.AVCodecContext_channel_layouthi_s = CAccessors.AVCodecContext_channel_layouthi_s = Module.cwrap("AVCodecContext_channel_layouthi_s", null, [ "number", "number" ]);

var AVCodecContext_channels = Module.AVCodecContext_channels = CAccessors.AVCodecContext_channels = Module.cwrap("AVCodecContext_channels", "number", [ "number" ]);

var AVCodecContext_channels_s = Module.AVCodecContext_channels_s = CAccessors.AVCodecContext_channels_s = Module.cwrap("AVCodecContext_channels_s", null, [ "number", "number" ]);

var AVCodecContext_channel_layoutmask = Module.AVCodecContext_channel_layoutmask = CAccessors.AVCodecContext_channel_layoutmask = Module.cwrap("AVCodecContext_channel_layoutmask", "number", [ "number" ]);

var AVCodecContext_channel_layoutmask_s = Module.AVCodecContext_channel_layoutmask_s = CAccessors.AVCodecContext_channel_layoutmask_s = Module.cwrap("AVCodecContext_channel_layoutmask_s", null, [ "number", "number" ]);

var AVCodecContext_ch_layout_nb_channels = Module.AVCodecContext_ch_layout_nb_channels = CAccessors.AVCodecContext_ch_layout_nb_channels = Module.cwrap("AVCodecContext_ch_layout_nb_channels", "number", [ "number" ]);

var AVCodecContext_ch_layout_nb_channels_s = Module.AVCodecContext_ch_layout_nb_channels_s = CAccessors.AVCodecContext_ch_layout_nb_channels_s = Module.cwrap("AVCodecContext_ch_layout_nb_channels_s", null, [ "number", "number" ]);

var AVCodecContext_extradata = Module.AVCodecContext_extradata = CAccessors.AVCodecContext_extradata = Module.cwrap("AVCodecContext_extradata", "number", [ "number" ]);

var AVCodecContext_extradata_s = Module.AVCodecContext_extradata_s = CAccessors.AVCodecContext_extradata_s = Module.cwrap("AVCodecContext_extradata_s", null, [ "number", "number" ]);

var AVCodecContext_extradata_size = Module.AVCodecContext_extradata_size = CAccessors.AVCodecContext_extradata_size = Module.cwrap("AVCodecContext_extradata_size", "number", [ "number" ]);

var AVCodecContext_extradata_size_s = Module.AVCodecContext_extradata_size_s = CAccessors.AVCodecContext_extradata_size_s = Module.cwrap("AVCodecContext_extradata_size_s", null, [ "number", "number" ]);

var AVCodecContext_frame_size = Module.AVCodecContext_frame_size = CAccessors.AVCodecContext_frame_size = Module.cwrap("AVCodecContext_frame_size", "number", [ "number" ]);

var AVCodecContext_frame_size_s = Module.AVCodecContext_frame_size_s = CAccessors.AVCodecContext_frame_size_s = Module.cwrap("AVCodecContext_frame_size_s", null, [ "number", "number" ]);

var AVCodecContext_gop_size = Module.AVCodecContext_gop_size = CAccessors.AVCodecContext_gop_size = Module.cwrap("AVCodecContext_gop_size", "number", [ "number" ]);

var AVCodecContext_gop_size_s = Module.AVCodecContext_gop_size_s = CAccessors.AVCodecContext_gop_size_s = Module.cwrap("AVCodecContext_gop_size_s", null, [ "number", "number" ]);

var AVCodecContext_height = Module.AVCodecContext_height = CAccessors.AVCodecContext_height = Module.cwrap("AVCodecContext_height", "number", [ "number" ]);

var AVCodecContext_height_s = Module.AVCodecContext_height_s = CAccessors.AVCodecContext_height_s = Module.cwrap("AVCodecContext_height_s", null, [ "number", "number" ]);

var AVCodecContext_keyint_min = Module.AVCodecContext_keyint_min = CAccessors.AVCodecContext_keyint_min = Module.cwrap("AVCodecContext_keyint_min", "number", [ "number" ]);

var AVCodecContext_keyint_min_s = Module.AVCodecContext_keyint_min_s = CAccessors.AVCodecContext_keyint_min_s = Module.cwrap("AVCodecContext_keyint_min_s", null, [ "number", "number" ]);

var AVCodecContext_level = Module.AVCodecContext_level = CAccessors.AVCodecContext_level = Module.cwrap("AVCodecContext_level", "number", [ "number" ]);

var AVCodecContext_level_s = Module.AVCodecContext_level_s = CAccessors.AVCodecContext_level_s = Module.cwrap("AVCodecContext_level_s", null, [ "number", "number" ]);

var AVCodecContext_max_b_frames = Module.AVCodecContext_max_b_frames = CAccessors.AVCodecContext_max_b_frames = Module.cwrap("AVCodecContext_max_b_frames", "number", [ "number" ]);

var AVCodecContext_max_b_frames_s = Module.AVCodecContext_max_b_frames_s = CAccessors.AVCodecContext_max_b_frames_s = Module.cwrap("AVCodecContext_max_b_frames_s", null, [ "number", "number" ]);

var AVCodecContext_pix_fmt = Module.AVCodecContext_pix_fmt = CAccessors.AVCodecContext_pix_fmt = Module.cwrap("AVCodecContext_pix_fmt", "number", [ "number" ]);

var AVCodecContext_pix_fmt_s = Module.AVCodecContext_pix_fmt_s = CAccessors.AVCodecContext_pix_fmt_s = Module.cwrap("AVCodecContext_pix_fmt_s", null, [ "number", "number" ]);

var AVCodecContext_profile = Module.AVCodecContext_profile = CAccessors.AVCodecContext_profile = Module.cwrap("AVCodecContext_profile", "number", [ "number" ]);

var AVCodecContext_profile_s = Module.AVCodecContext_profile_s = CAccessors.AVCodecContext_profile_s = Module.cwrap("AVCodecContext_profile_s", null, [ "number", "number" ]);

var AVCodecContext_rc_max_rate = Module.AVCodecContext_rc_max_rate = CAccessors.AVCodecContext_rc_max_rate = Module.cwrap("AVCodecContext_rc_max_rate", "number", [ "number" ]);

var AVCodecContext_rc_max_rate_s = Module.AVCodecContext_rc_max_rate_s = CAccessors.AVCodecContext_rc_max_rate_s = Module.cwrap("AVCodecContext_rc_max_rate_s", null, [ "number", "number" ]);

var AVCodecContext_rc_max_ratehi = Module.AVCodecContext_rc_max_ratehi = CAccessors.AVCodecContext_rc_max_ratehi = Module.cwrap("AVCodecContext_rc_max_ratehi", "number", [ "number" ]);

var AVCodecContext_rc_max_ratehi_s = Module.AVCodecContext_rc_max_ratehi_s = CAccessors.AVCodecContext_rc_max_ratehi_s = Module.cwrap("AVCodecContext_rc_max_ratehi_s", null, [ "number", "number" ]);

var AVCodecContext_rc_min_rate = Module.AVCodecContext_rc_min_rate = CAccessors.AVCodecContext_rc_min_rate = Module.cwrap("AVCodecContext_rc_min_rate", "number", [ "number" ]);

var AVCodecContext_rc_min_rate_s = Module.AVCodecContext_rc_min_rate_s = CAccessors.AVCodecContext_rc_min_rate_s = Module.cwrap("AVCodecContext_rc_min_rate_s", null, [ "number", "number" ]);

var AVCodecContext_rc_min_ratehi = Module.AVCodecContext_rc_min_ratehi = CAccessors.AVCodecContext_rc_min_ratehi = Module.cwrap("AVCodecContext_rc_min_ratehi", "number", [ "number" ]);

var AVCodecContext_rc_min_ratehi_s = Module.AVCodecContext_rc_min_ratehi_s = CAccessors.AVCodecContext_rc_min_ratehi_s = Module.cwrap("AVCodecContext_rc_min_ratehi_s", null, [ "number", "number" ]);

var AVCodecContext_sample_fmt = Module.AVCodecContext_sample_fmt = CAccessors.AVCodecContext_sample_fmt = Module.cwrap("AVCodecContext_sample_fmt", "number", [ "number" ]);

var AVCodecContext_sample_fmt_s = Module.AVCodecContext_sample_fmt_s = CAccessors.AVCodecContext_sample_fmt_s = Module.cwrap("AVCodecContext_sample_fmt_s", null, [ "number", "number" ]);

var AVCodecContext_sample_rate = Module.AVCodecContext_sample_rate = CAccessors.AVCodecContext_sample_rate = Module.cwrap("AVCodecContext_sample_rate", "number", [ "number" ]);

var AVCodecContext_sample_rate_s = Module.AVCodecContext_sample_rate_s = CAccessors.AVCodecContext_sample_rate_s = Module.cwrap("AVCodecContext_sample_rate_s", null, [ "number", "number" ]);

var AVCodecContext_qmax = Module.AVCodecContext_qmax = CAccessors.AVCodecContext_qmax = Module.cwrap("AVCodecContext_qmax", "number", [ "number" ]);

var AVCodecContext_qmax_s = Module.AVCodecContext_qmax_s = CAccessors.AVCodecContext_qmax_s = Module.cwrap("AVCodecContext_qmax_s", null, [ "number", "number" ]);

var AVCodecContext_qmin = Module.AVCodecContext_qmin = CAccessors.AVCodecContext_qmin = Module.cwrap("AVCodecContext_qmin", "number", [ "number" ]);

var AVCodecContext_qmin_s = Module.AVCodecContext_qmin_s = CAccessors.AVCodecContext_qmin_s = Module.cwrap("AVCodecContext_qmin_s", null, [ "number", "number" ]);

var AVCodecContext_width = Module.AVCodecContext_width = CAccessors.AVCodecContext_width = Module.cwrap("AVCodecContext_width", "number", [ "number" ]);

var AVCodecContext_width_s = Module.AVCodecContext_width_s = CAccessors.AVCodecContext_width_s = Module.cwrap("AVCodecContext_width_s", null, [ "number", "number" ]);

var AVCodecDescriptor_id = Module.AVCodecDescriptor_id = CAccessors.AVCodecDescriptor_id = Module.cwrap("AVCodecDescriptor_id", "number", [ "number" ]);

var AVCodecDescriptor_id_s = Module.AVCodecDescriptor_id_s = CAccessors.AVCodecDescriptor_id_s = Module.cwrap("AVCodecDescriptor_id_s", null, [ "number", "number" ]);

var AVCodecDescriptor_long_name = Module.AVCodecDescriptor_long_name = CAccessors.AVCodecDescriptor_long_name = Module.cwrap("AVCodecDescriptor_long_name", "number", [ "number" ]);

var AVCodecDescriptor_long_name_s = Module.AVCodecDescriptor_long_name_s = CAccessors.AVCodecDescriptor_long_name_s = Module.cwrap("AVCodecDescriptor_long_name_s", null, [ "number", "number" ]);

var AVCodecDescriptor_mime_types_a = Module.AVCodecDescriptor_mime_types_a = CAccessors.AVCodecDescriptor_mime_types_a = Module.cwrap("AVCodecDescriptor_mime_types_a", "number", [ "number", "number" ]);

var AVCodecDescriptor_mime_types_a_s = Module.AVCodecDescriptor_mime_types_a_s = CAccessors.AVCodecDescriptor_mime_types_a_s = Module.cwrap("AVCodecDescriptor_mime_types_a_s", null, [ "number", "number", "number" ]);

var AVCodecDescriptor_name = Module.AVCodecDescriptor_name = CAccessors.AVCodecDescriptor_name = Module.cwrap("AVCodecDescriptor_name", "number", [ "number" ]);

var AVCodecDescriptor_name_s = Module.AVCodecDescriptor_name_s = CAccessors.AVCodecDescriptor_name_s = Module.cwrap("AVCodecDescriptor_name_s", null, [ "number", "number" ]);

var AVCodecDescriptor_props = Module.AVCodecDescriptor_props = CAccessors.AVCodecDescriptor_props = Module.cwrap("AVCodecDescriptor_props", "number", [ "number" ]);

var AVCodecDescriptor_props_s = Module.AVCodecDescriptor_props_s = CAccessors.AVCodecDescriptor_props_s = Module.cwrap("AVCodecDescriptor_props_s", null, [ "number", "number" ]);

var AVCodecDescriptor_type = Module.AVCodecDescriptor_type = CAccessors.AVCodecDescriptor_type = Module.cwrap("AVCodecDescriptor_type", "number", [ "number" ]);

var AVCodecDescriptor_type_s = Module.AVCodecDescriptor_type_s = CAccessors.AVCodecDescriptor_type_s = Module.cwrap("AVCodecDescriptor_type_s", null, [ "number", "number" ]);

var AVCodecParameters_codec_id = Module.AVCodecParameters_codec_id = CAccessors.AVCodecParameters_codec_id = Module.cwrap("AVCodecParameters_codec_id", "number", [ "number" ]);

var AVCodecParameters_codec_id_s = Module.AVCodecParameters_codec_id_s = CAccessors.AVCodecParameters_codec_id_s = Module.cwrap("AVCodecParameters_codec_id_s", null, [ "number", "number" ]);

var AVCodecParameters_codec_tag = Module.AVCodecParameters_codec_tag = CAccessors.AVCodecParameters_codec_tag = Module.cwrap("AVCodecParameters_codec_tag", "number", [ "number" ]);

var AVCodecParameters_codec_tag_s = Module.AVCodecParameters_codec_tag_s = CAccessors.AVCodecParameters_codec_tag_s = Module.cwrap("AVCodecParameters_codec_tag_s", null, [ "number", "number" ]);

var AVCodecParameters_codec_type = Module.AVCodecParameters_codec_type = CAccessors.AVCodecParameters_codec_type = Module.cwrap("AVCodecParameters_codec_type", "number", [ "number" ]);

var AVCodecParameters_codec_type_s = Module.AVCodecParameters_codec_type_s = CAccessors.AVCodecParameters_codec_type_s = Module.cwrap("AVCodecParameters_codec_type_s", null, [ "number", "number" ]);

var AVCodecParameters_extradata = Module.AVCodecParameters_extradata = CAccessors.AVCodecParameters_extradata = Module.cwrap("AVCodecParameters_extradata", "number", [ "number" ]);

var AVCodecParameters_extradata_s = Module.AVCodecParameters_extradata_s = CAccessors.AVCodecParameters_extradata_s = Module.cwrap("AVCodecParameters_extradata_s", null, [ "number", "number" ]);

var AVCodecParameters_extradata_size = Module.AVCodecParameters_extradata_size = CAccessors.AVCodecParameters_extradata_size = Module.cwrap("AVCodecParameters_extradata_size", "number", [ "number" ]);

var AVCodecParameters_extradata_size_s = Module.AVCodecParameters_extradata_size_s = CAccessors.AVCodecParameters_extradata_size_s = Module.cwrap("AVCodecParameters_extradata_size_s", null, [ "number", "number" ]);

var AVCodecParameters_format = Module.AVCodecParameters_format = CAccessors.AVCodecParameters_format = Module.cwrap("AVCodecParameters_format", "number", [ "number" ]);

var AVCodecParameters_format_s = Module.AVCodecParameters_format_s = CAccessors.AVCodecParameters_format_s = Module.cwrap("AVCodecParameters_format_s", null, [ "number", "number" ]);

var AVCodecParameters_bit_rate = Module.AVCodecParameters_bit_rate = CAccessors.AVCodecParameters_bit_rate = Module.cwrap("AVCodecParameters_bit_rate", "number", [ "number" ]);

var AVCodecParameters_bit_rate_s = Module.AVCodecParameters_bit_rate_s = CAccessors.AVCodecParameters_bit_rate_s = Module.cwrap("AVCodecParameters_bit_rate_s", null, [ "number", "number" ]);

var AVCodecParameters_profile = Module.AVCodecParameters_profile = CAccessors.AVCodecParameters_profile = Module.cwrap("AVCodecParameters_profile", "number", [ "number" ]);

var AVCodecParameters_profile_s = Module.AVCodecParameters_profile_s = CAccessors.AVCodecParameters_profile_s = Module.cwrap("AVCodecParameters_profile_s", null, [ "number", "number" ]);

var AVCodecParameters_level = Module.AVCodecParameters_level = CAccessors.AVCodecParameters_level = Module.cwrap("AVCodecParameters_level", "number", [ "number" ]);

var AVCodecParameters_level_s = Module.AVCodecParameters_level_s = CAccessors.AVCodecParameters_level_s = Module.cwrap("AVCodecParameters_level_s", null, [ "number", "number" ]);

var AVCodecParameters_width = Module.AVCodecParameters_width = CAccessors.AVCodecParameters_width = Module.cwrap("AVCodecParameters_width", "number", [ "number" ]);

var AVCodecParameters_width_s = Module.AVCodecParameters_width_s = CAccessors.AVCodecParameters_width_s = Module.cwrap("AVCodecParameters_width_s", null, [ "number", "number" ]);

var AVCodecParameters_height = Module.AVCodecParameters_height = CAccessors.AVCodecParameters_height = Module.cwrap("AVCodecParameters_height", "number", [ "number" ]);

var AVCodecParameters_height_s = Module.AVCodecParameters_height_s = CAccessors.AVCodecParameters_height_s = Module.cwrap("AVCodecParameters_height_s", null, [ "number", "number" ]);

var AVCodecParameters_color_range = Module.AVCodecParameters_color_range = CAccessors.AVCodecParameters_color_range = Module.cwrap("AVCodecParameters_color_range", "number", [ "number" ]);

var AVCodecParameters_color_range_s = Module.AVCodecParameters_color_range_s = CAccessors.AVCodecParameters_color_range_s = Module.cwrap("AVCodecParameters_color_range_s", null, [ "number", "number" ]);

var AVCodecParameters_color_primaries = Module.AVCodecParameters_color_primaries = CAccessors.AVCodecParameters_color_primaries = Module.cwrap("AVCodecParameters_color_primaries", "number", [ "number" ]);

var AVCodecParameters_color_primaries_s = Module.AVCodecParameters_color_primaries_s = CAccessors.AVCodecParameters_color_primaries_s = Module.cwrap("AVCodecParameters_color_primaries_s", null, [ "number", "number" ]);

var AVCodecParameters_color_trc = Module.AVCodecParameters_color_trc = CAccessors.AVCodecParameters_color_trc = Module.cwrap("AVCodecParameters_color_trc", "number", [ "number" ]);

var AVCodecParameters_color_trc_s = Module.AVCodecParameters_color_trc_s = CAccessors.AVCodecParameters_color_trc_s = Module.cwrap("AVCodecParameters_color_trc_s", null, [ "number", "number" ]);

var AVCodecParameters_color_space = Module.AVCodecParameters_color_space = CAccessors.AVCodecParameters_color_space = Module.cwrap("AVCodecParameters_color_space", "number", [ "number" ]);

var AVCodecParameters_color_space_s = Module.AVCodecParameters_color_space_s = CAccessors.AVCodecParameters_color_space_s = Module.cwrap("AVCodecParameters_color_space_s", null, [ "number", "number" ]);

var AVCodecParameters_chroma_location = Module.AVCodecParameters_chroma_location = CAccessors.AVCodecParameters_chroma_location = Module.cwrap("AVCodecParameters_chroma_location", "number", [ "number" ]);

var AVCodecParameters_chroma_location_s = Module.AVCodecParameters_chroma_location_s = CAccessors.AVCodecParameters_chroma_location_s = Module.cwrap("AVCodecParameters_chroma_location_s", null, [ "number", "number" ]);

var AVCodecParameters_channels = Module.AVCodecParameters_channels = CAccessors.AVCodecParameters_channels = Module.cwrap("AVCodecParameters_channels", "number", [ "number" ]);

var AVCodecParameters_channels_s = Module.AVCodecParameters_channels_s = CAccessors.AVCodecParameters_channels_s = Module.cwrap("AVCodecParameters_channels_s", null, [ "number", "number" ]);

var AVCodecParameters_channel_layoutmask = Module.AVCodecParameters_channel_layoutmask = CAccessors.AVCodecParameters_channel_layoutmask = Module.cwrap("AVCodecParameters_channel_layoutmask", "number", [ "number" ]);

var AVCodecParameters_channel_layoutmask_s = Module.AVCodecParameters_channel_layoutmask_s = CAccessors.AVCodecParameters_channel_layoutmask_s = Module.cwrap("AVCodecParameters_channel_layoutmask_s", null, [ "number", "number" ]);

var AVCodecParameters_ch_layout_nb_channels = Module.AVCodecParameters_ch_layout_nb_channels = CAccessors.AVCodecParameters_ch_layout_nb_channels = Module.cwrap("AVCodecParameters_ch_layout_nb_channels", "number", [ "number" ]);

var AVCodecParameters_ch_layout_nb_channels_s = Module.AVCodecParameters_ch_layout_nb_channels_s = CAccessors.AVCodecParameters_ch_layout_nb_channels_s = Module.cwrap("AVCodecParameters_ch_layout_nb_channels_s", null, [ "number", "number" ]);

var AVCodecParameters_sample_rate = Module.AVCodecParameters_sample_rate = CAccessors.AVCodecParameters_sample_rate = Module.cwrap("AVCodecParameters_sample_rate", "number", [ "number" ]);

var AVCodecParameters_sample_rate_s = Module.AVCodecParameters_sample_rate_s = CAccessors.AVCodecParameters_sample_rate_s = Module.cwrap("AVCodecParameters_sample_rate_s", null, [ "number", "number" ]);

var AVPacket_pos = Module.AVPacket_pos = CAccessors.AVPacket_pos = Module.cwrap("AVPacket_pos", "number", [ "number" ]);

var AVPacket_pos_s = Module.AVPacket_pos_s = CAccessors.AVPacket_pos_s = Module.cwrap("AVPacket_pos_s", null, [ "number", "number" ]);

var AVPacket_poshi = Module.AVPacket_poshi = CAccessors.AVPacket_poshi = Module.cwrap("AVPacket_poshi", "number", [ "number" ]);

var AVPacket_poshi_s = Module.AVPacket_poshi_s = CAccessors.AVPacket_poshi_s = Module.cwrap("AVPacket_poshi_s", null, [ "number", "number" ]);

var AVPacket_pts = Module.AVPacket_pts = CAccessors.AVPacket_pts = Module.cwrap("AVPacket_pts", "number", [ "number" ]);

var AVPacket_pts_s = Module.AVPacket_pts_s = CAccessors.AVPacket_pts_s = Module.cwrap("AVPacket_pts_s", null, [ "number", "number" ]);

var AVPacket_ptshi = Module.AVPacket_ptshi = CAccessors.AVPacket_ptshi = Module.cwrap("AVPacket_ptshi", "number", [ "number" ]);

var AVPacket_ptshi_s = Module.AVPacket_ptshi_s = CAccessors.AVPacket_ptshi_s = Module.cwrap("AVPacket_ptshi_s", null, [ "number", "number" ]);

var AVPacket_dts = Module.AVPacket_dts = CAccessors.AVPacket_dts = Module.cwrap("AVPacket_dts", "number", [ "number" ]);

var AVPacket_dts_s = Module.AVPacket_dts_s = CAccessors.AVPacket_dts_s = Module.cwrap("AVPacket_dts_s", null, [ "number", "number" ]);

var AVPacket_dtshi = Module.AVPacket_dtshi = CAccessors.AVPacket_dtshi = Module.cwrap("AVPacket_dtshi", "number", [ "number" ]);

var AVPacket_dtshi_s = Module.AVPacket_dtshi_s = CAccessors.AVPacket_dtshi_s = Module.cwrap("AVPacket_dtshi_s", null, [ "number", "number" ]);

var AVPacket_data = Module.AVPacket_data = CAccessors.AVPacket_data = Module.cwrap("AVPacket_data", "number", [ "number" ]);

var AVPacket_data_s = Module.AVPacket_data_s = CAccessors.AVPacket_data_s = Module.cwrap("AVPacket_data_s", null, [ "number", "number" ]);

var AVPacket_size = Module.AVPacket_size = CAccessors.AVPacket_size = Module.cwrap("AVPacket_size", "number", [ "number" ]);

var AVPacket_size_s = Module.AVPacket_size_s = CAccessors.AVPacket_size_s = Module.cwrap("AVPacket_size_s", null, [ "number", "number" ]);

var AVPacket_stream_index = Module.AVPacket_stream_index = CAccessors.AVPacket_stream_index = Module.cwrap("AVPacket_stream_index", "number", [ "number" ]);

var AVPacket_stream_index_s = Module.AVPacket_stream_index_s = CAccessors.AVPacket_stream_index_s = Module.cwrap("AVPacket_stream_index_s", null, [ "number", "number" ]);

var AVPacket_flags = Module.AVPacket_flags = CAccessors.AVPacket_flags = Module.cwrap("AVPacket_flags", "number", [ "number" ]);

var AVPacket_flags_s = Module.AVPacket_flags_s = CAccessors.AVPacket_flags_s = Module.cwrap("AVPacket_flags_s", null, [ "number", "number" ]);

var AVPacket_side_data = Module.AVPacket_side_data = CAccessors.AVPacket_side_data = Module.cwrap("AVPacket_side_data", "number", [ "number" ]);

var AVPacket_side_data_s = Module.AVPacket_side_data_s = CAccessors.AVPacket_side_data_s = Module.cwrap("AVPacket_side_data_s", null, [ "number", "number" ]);

var AVPacket_side_data_elems = Module.AVPacket_side_data_elems = CAccessors.AVPacket_side_data_elems = Module.cwrap("AVPacket_side_data_elems", "number", [ "number" ]);

var AVPacket_side_data_elems_s = Module.AVPacket_side_data_elems_s = CAccessors.AVPacket_side_data_elems_s = Module.cwrap("AVPacket_side_data_elems_s", null, [ "number", "number" ]);

var AVPacket_duration = Module.AVPacket_duration = CAccessors.AVPacket_duration = Module.cwrap("AVPacket_duration", "number", [ "number" ]);

var AVPacket_duration_s = Module.AVPacket_duration_s = CAccessors.AVPacket_duration_s = Module.cwrap("AVPacket_duration_s", null, [ "number", "number" ]);

var AVPacket_durationhi = Module.AVPacket_durationhi = CAccessors.AVPacket_durationhi = Module.cwrap("AVPacket_durationhi", "number", [ "number" ]);

var AVPacket_durationhi_s = Module.AVPacket_durationhi_s = CAccessors.AVPacket_durationhi_s = Module.cwrap("AVPacket_durationhi_s", null, [ "number", "number" ]);

var AVFormatContext_flags = Module.AVFormatContext_flags = CAccessors.AVFormatContext_flags = Module.cwrap("AVFormatContext_flags", "number", [ "number" ]);

var AVFormatContext_flags_s = Module.AVFormatContext_flags_s = CAccessors.AVFormatContext_flags_s = Module.cwrap("AVFormatContext_flags_s", null, [ "number", "number" ]);

var AVFormatContext_nb_streams = Module.AVFormatContext_nb_streams = CAccessors.AVFormatContext_nb_streams = Module.cwrap("AVFormatContext_nb_streams", "number", [ "number" ]);

var AVFormatContext_nb_streams_s = Module.AVFormatContext_nb_streams_s = CAccessors.AVFormatContext_nb_streams_s = Module.cwrap("AVFormatContext_nb_streams_s", null, [ "number", "number" ]);

var AVFormatContext_oformat = Module.AVFormatContext_oformat = CAccessors.AVFormatContext_oformat = Module.cwrap("AVFormatContext_oformat", "number", [ "number" ]);

var AVFormatContext_oformat_s = Module.AVFormatContext_oformat_s = CAccessors.AVFormatContext_oformat_s = Module.cwrap("AVFormatContext_oformat_s", null, [ "number", "number" ]);

var AVFormatContext_pb = Module.AVFormatContext_pb = CAccessors.AVFormatContext_pb = Module.cwrap("AVFormatContext_pb", "number", [ "number" ]);

var AVFormatContext_pb_s = Module.AVFormatContext_pb_s = CAccessors.AVFormatContext_pb_s = Module.cwrap("AVFormatContext_pb_s", null, [ "number", "number" ]);

var AVFormatContext_streams_a = Module.AVFormatContext_streams_a = CAccessors.AVFormatContext_streams_a = Module.cwrap("AVFormatContext_streams_a", "number", [ "number", "number" ]);

var AVFormatContext_streams_a_s = Module.AVFormatContext_streams_a_s = CAccessors.AVFormatContext_streams_a_s = Module.cwrap("AVFormatContext_streams_a_s", null, [ "number", "number", "number" ]);

var AVStream_codecpar = Module.AVStream_codecpar = CAccessors.AVStream_codecpar = Module.cwrap("AVStream_codecpar", "number", [ "number" ]);

var AVStream_codecpar_s = Module.AVStream_codecpar_s = CAccessors.AVStream_codecpar_s = Module.cwrap("AVStream_codecpar_s", null, [ "number", "number" ]);

var AVStream_discard = Module.AVStream_discard = CAccessors.AVStream_discard = Module.cwrap("AVStream_discard", "number", [ "number" ]);

var AVStream_discard_s = Module.AVStream_discard_s = CAccessors.AVStream_discard_s = Module.cwrap("AVStream_discard_s", null, [ "number", "number" ]);

var AVStream_duration = Module.AVStream_duration = CAccessors.AVStream_duration = Module.cwrap("AVStream_duration", "number", [ "number" ]);

var AVStream_duration_s = Module.AVStream_duration_s = CAccessors.AVStream_duration_s = Module.cwrap("AVStream_duration_s", null, [ "number", "number" ]);

var AVStream_durationhi = Module.AVStream_durationhi = CAccessors.AVStream_durationhi = Module.cwrap("AVStream_durationhi", "number", [ "number" ]);

var AVStream_durationhi_s = Module.AVStream_durationhi_s = CAccessors.AVStream_durationhi_s = Module.cwrap("AVStream_durationhi_s", null, [ "number", "number" ]);

var AVFilterInOut_filter_ctx = Module.AVFilterInOut_filter_ctx = CAccessors.AVFilterInOut_filter_ctx = Module.cwrap("AVFilterInOut_filter_ctx", "number", [ "number" ]);

var AVFilterInOut_filter_ctx_s = Module.AVFilterInOut_filter_ctx_s = CAccessors.AVFilterInOut_filter_ctx_s = Module.cwrap("AVFilterInOut_filter_ctx_s", null, [ "number", "number" ]);

var AVFilterInOut_name = Module.AVFilterInOut_name = CAccessors.AVFilterInOut_name = Module.cwrap("AVFilterInOut_name", "number", [ "number" ]);

var AVFilterInOut_name_s = Module.AVFilterInOut_name_s = CAccessors.AVFilterInOut_name_s = Module.cwrap("AVFilterInOut_name_s", null, [ "number", "number" ]);

var AVFilterInOut_next = Module.AVFilterInOut_next = CAccessors.AVFilterInOut_next = Module.cwrap("AVFilterInOut_next", "number", [ "number" ]);

var AVFilterInOut_next_s = Module.AVFilterInOut_next_s = CAccessors.AVFilterInOut_next_s = Module.cwrap("AVFilterInOut_next_s", null, [ "number", "number" ]);

var AVFilterInOut_pad_idx = Module.AVFilterInOut_pad_idx = CAccessors.AVFilterInOut_pad_idx = Module.cwrap("AVFilterInOut_pad_idx", "number", [ "number" ]);

var AVFilterInOut_pad_idx_s = Module.AVFilterInOut_pad_idx_s = CAccessors.AVFilterInOut_pad_idx_s = Module.cwrap("AVFilterInOut_pad_idx_s", null, [ "number", "number" ]);

var av_frame_free_js = Module.av_frame_free_js = CAccessors.av_frame_free_js = function(p) {
 var p2 = malloc(4);
 if (p2 === 0) throw new Error("Could not malloc");
 (new Uint32Array(Module.HEAPU8.buffer, p2, 1))[0] = p;
 CAccessors.av_frame_free(p2);
 free(p2);
};

var av_packet_free_js = Module.av_packet_free_js = CAccessors.av_packet_free_js = function(p) {
 var p2 = malloc(4);
 if (p2 === 0) throw new Error("Could not malloc");
 (new Uint32Array(Module.HEAPU8.buffer, p2, 1))[0] = p;
 CAccessors.av_packet_free(p2);
 free(p2);
};

var avformat_close_input_js = Module.avformat_close_input_js = CAccessors.avformat_close_input_js = function(p) {
 var p2 = malloc(4);
 if (p2 === 0) throw new Error("Could not malloc");
 (new Uint32Array(Module.HEAPU8.buffer, p2, 1))[0] = p;
 CAccessors.avformat_close_input(p2);
 free(p2);
};

var avcodec_free_context_js = Module.avcodec_free_context_js = CAccessors.avcodec_free_context_js = function(p) {
 var p2 = malloc(4);
 if (p2 === 0) throw new Error("Could not malloc");
 (new Uint32Array(Module.HEAPU8.buffer, p2, 1))[0] = p;
 CAccessors.avcodec_free_context(p2);
 free(p2);
};

var avcodec_parameters_free_js = Module.avcodec_parameters_free_js = CAccessors.avcodec_parameters_free_js = function(p) {
 var p2 = malloc(4);
 if (p2 === 0) throw new Error("Could not malloc");
 (new Uint32Array(Module.HEAPU8.buffer, p2, 1))[0] = p;
 CAccessors.avcodec_parameters_free(p2);
 free(p2);
};

var avfilter_graph_free_js = Module.avfilter_graph_free_js = CAccessors.avfilter_graph_free_js = function(p) {
 var p2 = malloc(4);
 if (p2 === 0) throw new Error("Could not malloc");
 (new Uint32Array(Module.HEAPU8.buffer, p2, 1))[0] = p;
 CAccessors.avfilter_graph_free(p2);
 free(p2);
};

var avfilter_inout_free_js = Module.avfilter_inout_free_js = CAccessors.avfilter_inout_free_js = function(p) {
 var p2 = malloc(4);
 if (p2 === 0) throw new Error("Could not malloc");
 (new Uint32Array(Module.HEAPU8.buffer, p2, 1))[0] = p;
 CAccessors.avfilter_inout_free(p2);
 free(p2);
};

var av_dict_free_js = Module.av_dict_free_js = CAccessors.av_dict_free_js = function(p) {
 var p2 = malloc(4);
 if (p2 === 0) throw new Error("Could not malloc");
 (new Uint32Array(Module.HEAPU8.buffer, p2, 1))[0] = p;
 CAccessors.av_dict_free(p2);
 free(p2);
};

var copyin_u8 = Module.copyin_u8 = CAccessors.copyin_u8 = function(ptr, arr) {
 var buf = new Uint8Array(Module.HEAPU8.buffer, ptr);
 buf.set(arr);
};

var copyout_u8 = Module.copyout_u8 = CAccessors.copyout_u8 = function(ptr, len) {
 var ret = (new Uint8Array(Module.HEAPU8.buffer, ptr, len)).slice(0);
 ret.libavjsTransfer = [ ret.buffer ];
 return ret;
};

var copyin_s16 = Module.copyin_s16 = CAccessors.copyin_s16 = function(ptr, arr) {
 var buf = new Int16Array(Module.HEAPU8.buffer, ptr);
 buf.set(arr);
};

var copyout_s16 = Module.copyout_s16 = CAccessors.copyout_s16 = function(ptr, len) {
 var ret = (new Int16Array(Module.HEAPU8.buffer, ptr, len)).slice(0);
 ret.libavjsTransfer = [ ret.buffer ];
 return ret;
};

var copyin_s32 = Module.copyin_s32 = CAccessors.copyin_s32 = function(ptr, arr) {
 var buf = new Int32Array(Module.HEAPU8.buffer, ptr);
 buf.set(arr);
};

var copyout_s32 = Module.copyout_s32 = CAccessors.copyout_s32 = function(ptr, len) {
 var ret = (new Int32Array(Module.HEAPU8.buffer, ptr, len)).slice(0);
 ret.libavjsTransfer = [ ret.buffer ];
 return ret;
};

var copyin_f32 = Module.copyin_f32 = CAccessors.copyin_f32 = function(ptr, arr) {
 var buf = new Float32Array(Module.HEAPU8.buffer, ptr);
 buf.set(arr);
};

var copyout_f32 = Module.copyout_f32 = CAccessors.copyout_f32 = function(ptr, len) {
 var ret = (new Float32Array(Module.HEAPU8.buffer, ptr, len)).slice(0);
 ret.libavjsTransfer = [ ret.buffer ];
 return ret;
};

function fsBinding(of) {
 Module[of] = function() {
  try {
   return FS[of].apply(FS, arguments);
  } catch (ex) {
   if (ex && ex.name === "ErrnoError") {
    ex.message = strerror(ex.errno);
    if (typeof arguments[0] === "string") ex.message = arguments[0] + ": " + ex.message;
   }
   throw ex;
  }
 };
}

var readerDev = FS.makedev(44, 0);

FS.registerDevice(readerDev, readerCallbacks);

Module.readBuffers = {};

Module.blockReadBuffers = {};

var writerDev = FS.makedev(44, 1);

FS.registerDevice(writerDev, writerCallbacks);

var streamWriterDev = FS.makedev(44, 2);

FS.registerDevice(streamWriterDev, streamWriterCallbacks);

fsBinding("readFile");

fsBinding("writeFile");

fsBinding("unlink");

fsBinding("unmount");

fsBinding("mkdev");

/* @types
 * createLazyFile@sync(
 *     parent: string, name: string, url: string, canRead: boolean,
 *     canWrite: boolean
 * ): @promise@void@
 */ fsBinding("createLazyFile");

Module.mkreaderdev = function(loc, mode) {
 FS.mkdev(loc, mode ? mode : 511, readerDev);
 return 0;
};

var mkblockreaderdev = Module.mkblockreaderdev = function(name, size) {
 FS.writeFile(name, new Uint8Array(0));
 var f = FS.open(name, 0);
 var super_node_ops = f.node.node_ops;
 var node_ops = f.node.node_ops = Object.create(super_node_ops);
 node_ops.getattr = function(node) {
  var ret = super_node_ops.getattr(node);
  ret.size = size;
  ret.blksize = 4096;
  ret.blocks = Math.ceil(size / 4096);
  return ret;
 };
 f.node.stream_ops = blockReaderCallbacks;
 f.node.ff_block_reader_dev_size = size;
 Module.blockReadBuffers[name] = {
  position: -1,
  buf: new Uint8Array(0),
  ready: false,
  errorCode: 0,
  error: null
 };
 FS.close(f);
};

var readaheads = {};

var preReadaheadOnBlockRead = null;

function readaheadOnBlockRead(name, position, length) {
 if (!(name in readaheads)) {
  if (preReadaheadOnBlockRead) preReadaheadOnBlockRead(name, position, length);
  return;
 }
 var ra = readaheads[name];
 function then() {
  if (ra.position !== position) {
   ra.position = position;
   ra.buf = null;
   ra.bufPromise = ra.file.slice(position, position + length).arrayBuffer().then(function(ret) {
    ra.buf = ret;
   }).catch(function(ex) {
    console.error(ex + "\n" + ex.stack);
    ra.buf = new Uint8Array(0);
   }).then(then);
   return;
  }
  ff_block_reader_dev_send(name, position, new Uint8Array(ra.buf));
  position += length;
  ra.position = position;
  ra.buf = null;
  ra.bufPromise = ra.file.slice(position, position + length).arrayBuffer().then(function(ret) {
   ra.buf = ret;
  }).catch(function(ex) {
   console.error(ex + "\n" + ex.stack);
   ra.buf = new Uint8Array(0);
  });
 }
 if (!ra.buf && ra.bufPromise) ra.bufPromise.then(then); else then();
}

Module.mkreadaheadfile = function(name, file) {
 if (Module.onblockread !== readaheadOnBlockRead) {
  preReadaheadOnBlockRead = Module.onblockread;
  Module.onblockread = readaheadOnBlockRead;
 }
 mkblockreaderdev(name, file.size);
 readaheads[name] = {
  file: file,
  position: -1,
  bufPromise: null,
  buf: null
 };
};

/**
 * Unlink a readahead file. Also gets rid of the File reference.
 * @param name  Filename to unlink.
 */ Module.unlinkreadaheadfile = function(name) {
 FS.unlink(name);
 delete readaheads[name];
};

Module.mkwriterdev = function(loc, mode) {
 FS.mkdev(loc, mode ? mode : 511, writerDev);
 return 0;
};

Module.mkstreamwriterdev = function(loc, mode) {
 FS.mkdev(loc, mode ? mode : 511, streamWriterDev);
 return 0;
};

Module.mountwriterfs = function(mountpoint) {
 try {
  FS.mkdir(mountpoint);
 } catch (ex) {}
 FS.mount(streamWriterFS, {}, mountpoint);
 return 0;
};

Module.ff_reader_dev_waiters = Object.create(null);

Module.mkworkerfsfile = function(name, blob) {
 FS.mkdir("/" + name + ".d");
 FS.mount(WORKERFS, {
  blobs: [ {
   name: name,
   data: blob
  } ]
 }, "/" + name + ".d");
 return "/" + name + ".d/" + name;
};

Module.unlinkworkerfsfile = function(name) {
 FS.unmount("/" + name + ".d");
 FS.rmdir("/" + name + ".d");
};

/* @types
 * ff_reader_dev_send@sync(
 *     name: string, data: Uint8Array | null,
 *     opts?: {
 *         errorCode?: number,
 *         error?: any // any other error, used internally
 *     }
 * ): @promise@void@
 */ var ff_reader_dev_send = Module.ff_reader_dev_send = function(name, data, opts) {
 opts = opts || {};
 var idata;
 if (!(name in Module.readBuffers)) {
  Module.readBuffers[name] = {
   buf: new Uint8Array(0),
   eof: false,
   errorCode: 0,
   error: null
  };
 }
 idata = Module.readBuffers[name];
 if (data === null) {
  idata.eof = true;
 } else {
  var newbuf = new Uint8Array(idata.buf.length + data.length);
  newbuf.set(idata.buf);
  newbuf.set(data, idata.buf.length);
  idata.buf = newbuf;
 }
 idata.ready = true;
 idata.errorCode = 0;
 if (typeof opts.errorCode === "number") idata.errorCode = opts.errorCode;
 idata.error = null;
 if (opts.error) idata.error = opts.error;
 var waiters = Module.ff_reader_dev_waiters[name] || [];
 delete Module.ff_reader_dev_waiters[name];
 for (var i = 0; i < waiters.length; i++) waiters[i]();
};

/* @types
 * ff_block_reader_dev_send@sync(
 *     name: string, pos: number, data: Uint8Array | null,
 *     opts?: {
 *         errorCode?: number,
 *         error?: any // any other error, used internally
 *     }
 * ): @promise@void@
 */ var ff_block_reader_dev_send = Module.ff_block_reader_dev_send = function(name, pos, data, opts) {
 opts = opts || {};
 var idata;
 if (!(name in Module.blockReadBuffers)) {
  idata = Module.blockReadBuffers[name] = {
   position: pos,
   buf: data,
   ready: true,
   errorCode: 0,
   error: null
  };
 } else {
  idata = Module.blockReadBuffers[name];
  idata.position = pos;
  idata.buf = data;
  idata.ready = true;
  idata.errorCode = 0;
  idata.error = null;
 }
 if (data === null) idata.buf = new Uint8Array(0);
 if (typeof opts.errorCode === "number") idata.errorCode = opts.errorCode;
 if (opts.error) idata.error = opts.error;
 var waiters = Module.ff_reader_dev_waiters[name] || [];
 delete Module.ff_reader_dev_waiters[name];
 for (var i = 0; i < waiters.length; i++) waiters[i]();
};

var ff_reader_dev_waiting = Module.ff_reader_dev_waiting = function(name) {
 return ff_nothing().then(function() {
  if (name) return !!Module.ff_reader_dev_waiters[name]; else return !!Object.keys(Module.ff_reader_dev_waiters).length;
 });
};

/**
 * Internal function to determine if this device is ready (to avoid race
 * conditions).
 */ Module.readerDevReady = function(fd) {
 var stream = FS.streams[fd].node.name;
 if (stream in Module.readBuffers) return Module.readBuffers[stream].ready; else if (stream in Module.blockReadBuffers) return Module.blockReadBuffers[stream].ready;
 return false;
};

/**
 * Internal function to get the name of a file being read by an FD.
 */ Module.fdName = function(fd) {
 return FS.streams[fd].node.name;
};

/* @types
 * ff_init_encoder@sync(
 *     name: string, opts?: {
 *         ctx?: AVCodecContextProps,
 *         time_base?: [number, number],
 *         options?: Record<string, string>
 *     }
 * ): @promise@[number, number, number, number, number]@
 */ var ff_init_encoder = Module.ff_init_encoder = function(name, opts) {
 opts = opts || {};
 var codec = avcodec_find_encoder_by_name(name);
 if (codec === 0) throw new Error("Codec not found");
 var c = avcodec_alloc_context3(codec);
 if (c === 0) throw new Error("Could not allocate audio codec context");
 var ctxProps = opts.ctx || {};
 for (var prop in ctxProps) this["AVCodecContext_" + prop + "_s"](c, ctxProps[prop]);
 var time_base = opts.time_base || [ 1, 1e3 ];
 AVCodecContext_time_base_s(c, time_base[0], time_base[1]);
 var options = 0;
 if (opts.options) {
  for (var prop in opts.options) options = av_dict_set_js(options, prop, opts.options[prop], 0);
 }
 var ret = avcodec_open2_js(c, codec, options);
 if (ret < 0) throw new Error("Could not open codec: " + ff_error(ret));
 var frame = av_frame_alloc();
 if (frame === 0) throw new Error("Could not allocate frame");
 var pkt = av_packet_alloc();
 if (pkt === 0) throw new Error("Could not allocate packet");
 var frame_size = AVCodecContext_frame_size(c);
 return [ codec, c, frame, pkt, frame_size ];
};

/* @types
 * ff_init_decoder@sync(
 *     name: string | number, codecpar?: number
 * ): @promise@[number, number, number, number]@
 */ var ff_init_decoder = Module.ff_init_decoder = function(name, codecpar) {
 var codec, ret;
 if (typeof name === "string") codec = avcodec_find_decoder_by_name(name); else codec = avcodec_find_decoder(name);
 if (codec === 0) throw new Error("Codec not found");
 var c = avcodec_alloc_context3(codec);
 if (c === 0) throw new Error("Could not allocate audio codec context");
 var codecid = AVCodecContext_codec_id(c);
 if (codecpar) {
  ret = avcodec_parameters_to_context(c, codecpar);
  if (ret < 0) throw new Error("Could not set codec parameters: " + ff_error(ret));
 }
 if (AVCodecContext_codec_id(c) === 0) AVCodecContext_codec_id_s(c, codecid);
 ret = avcodec_open2(c, codec, 0);
 if (ret < 0) throw new Error("Could not open codec: " + ff_error(ret));
 var pkt = av_packet_alloc();
 if (pkt === 0) throw new Error("Could not allocate packet");
 var frame = av_frame_alloc();
 if (frame === 0) throw new Error("Could not allocate frame");
 return [ codec, c, pkt, frame ];
};

/* @types
 * ff_free_encoder@sync(
 *     c: number, frame: number, pkt: number
 * ): @promise@void@
 */ var ff_free_encoder = Module.ff_free_encoder = function(c, frame, pkt) {
 av_frame_free_js(frame);
 av_packet_free_js(pkt);
 avcodec_free_context_js(c);
};

/* @types
 * ff_free_decoder@sync(
 *     c: number, pkt: number, frame: number
 * ): @promise@void@
 */ var ff_free_decoder = Module.ff_free_decoder = function(c, pkt, frame) {
 ff_free_encoder(c, frame, pkt);
};

/* @types
 * ff_encode_multi@sync(
 *     ctx: number, frame: number, pkt: number, inFrames: (Frame | number)[],
 *     fin?: boolean
 * ): @promise@Packet[]@
 */ var ff_encode_multi = Module.ff_encode_multi = function(ctx, frame, pkt, inFrames, fin) {
 var outPackets = [];
 function handleFrame(inFrame) {
  if (inFrame !== null) ff_copyin_frame(frame, inFrame);
  var ret = avcodec_send_frame(ctx, inFrame ? frame : 0);
  if (ret < 0) throw new Error("Error sending the frame to the encoder: " + ff_error(ret));
  if (inFrame) av_frame_unref(frame);
  while (true) {
   ret = avcodec_receive_packet(ctx, pkt);
   if (ret === -6 || /* EAGAIN */ ret === -541478725) /* AVERROR_EOF */ return; else if (ret < 0) throw new Error("Error encoding audio frame: " + ff_error(ret));
   var outPacket = ff_copyout_packet(pkt);
   outPackets.push(outPacket);
   av_packet_unref(pkt);
  }
 }
 inFrames.forEach(handleFrame);
 if (fin) handleFrame(null);
 return outPackets;
};

/* @types
 * ff_decode_multi@sync(
 *     ctx: number, pkt: number, frame: number, inPackets: (Packet | number)[],
 *     config?: boolean | {
 *         fin?: boolean,
 *         ignoreErrors?: boolean,
 *         copyoutFrame?: "default" | "video" | "video_packed"
 *     }
 * ): @promise@Frame[]@
 * ff_decode_multi@sync(
 *     ctx: number, pkt: number, frame: number, inPackets: (Packet | number)[],
 *     config?: boolean | {
 *         fin?: boolean,
 *         ignoreErrors?: boolean,
 *         copyoutFrame: "ptr"
 *     }
 * ): @promise@number[]@
 * ff_decode_multi@sync(
 *     ctx: number, pkt: number, frame: number, inPackets: (Packet | number)[],
 *     config?: boolean | {
 *         fin?: boolean,
 *         ignoreErrors?: boolean,
 *         copyoutFrame: "ImageData"
 *     }
 * ): @promise@ImageData[]@
 */ var ff_decode_multi = Module.ff_decode_multi = function(ctx, pkt, frame, inPackets, config) {
 var outFrames = [];
 var transfer = [];
 if (typeof config === "boolean") {
  config = {
   fin: config
  };
 } else {
  config = config || {};
 }
 var copyoutFrame = ff_copyout_frame;
 if (config.copyoutFrame) copyoutFrame = ff_copyout_frame_versions[config.copyoutFrame];
 function handlePacket(inPacket) {
  var ret;
  if (inPacket !== null) {
   ret = av_packet_make_writable(pkt);
   if (ret < 0) throw new Error("Failed to make packet writable: " + ff_error(ret));
   ff_copyin_packet(pkt, inPacket);
  } else {
   av_packet_unref(pkt);
  }
  ret = avcodec_send_packet(ctx, pkt);
  if (ret < 0) {
   var err = "Error submitting the packet to the decoder: " + ff_error(ret);
   if (!config.ignoreErrors) throw new Error(err); else {
    console.log(err);
    av_packet_unref(pkt);
    return;
   }
  }
  av_packet_unref(pkt);
  while (true) {
   ret = avcodec_receive_frame(ctx, frame);
   if (ret === -6 || /* EAGAIN */ ret === -541478725) /* AVERROR_EOF */ return; else if (ret < 0) throw new Error("Error decoding audio frame: " + ff_error(ret));
   var outFrame = copyoutFrame(frame);
   if (outFrame && outFrame.libavjsTransfer && outFrame.libavjsTransfer.length) transfer.push.apply(transfer, outFrame.libavjsTransfer);
   outFrames.push(outFrame);
   av_frame_unref(frame);
  }
 }
 inPackets.forEach(handlePacket);
 if (config.fin) handlePacket(null);
 outFrames.libavjsTransfer = transfer;
 return outFrames;
};

/* Set the content of a packet. Necessary because we tend to strip packets of their content. */ var ff_set_packet = Module.ff_set_packet = function(pkt, data) {
 if (data.length === 0) {
  av_packet_unref(pkt);
 } else {
  var size = AVPacket_size(pkt);
  if (size < data.length) {
   var ret = av_grow_packet(pkt, data.length - size);
   if (ret < 0) throw new Error("Error growing packet: " + ff_error(ret));
  } else if (size > data.length) av_shrink_packet(pkt, data.length);
 }
 var ptr = AVPacket_data(pkt);
 Module.HEAPU8.set(data, ptr);
};

/* @types
 * ff_init_muxer@sync(
 *     opts: {
 *         oformat?: number, // format pointer
 *         format_name?: string, // libav name
 *         filename?: string,
 *         device?: boolean, // Create a writer device
 *         open?: boolean, // Open the file for writing
 *         codecpars?: boolean // Streams is in terms of codecpars, not codecctx
 *     },
 *     streamCtxs: [number, number, number][] // AVCodecContext | AVCodecParameters, time_base_num, time_base_den
 * ): @promise@[number, number, number, number[]]@
 */ var ff_init_muxer = Module.ff_init_muxer = function(opts, streamCtxs) {
 var oformat = opts.oformat ? opts.oformat : 0;
 var format_name = opts.format_name ? opts.format_name : null;
 var filename = opts.filename ? opts.filename : null;
 var oc = avformat_alloc_output_context2_js(oformat, format_name, filename);
 if (oc === 0) throw new Error("Failed to allocate output context");
 var fmt = AVFormatContext_oformat(oc);
 var sts = [];
 streamCtxs.forEach(function(ctx) {
  var st = avformat_new_stream(oc, 0);
  if (st === 0) throw new Error("Could not allocate stream");
  sts.push(st);
  var codecpar = AVStream_codecpar(st);
  var ret;
  if (opts.codecpars) {
   ret = avcodec_parameters_copy(codecpar, ctx[0]);
   AVCodecParameters_codec_tag_s(codecpar, 0);
  } else {
   ret = avcodec_parameters_from_context(codecpar, ctx[0]);
  }
  if (ret < 0) throw new Error("Could not copy the stream parameters: " + ff_error(ret));
  AVStream_time_base_s(st, ctx[1], ctx[2]);
 });
 if (opts.device) FS.mkdev(opts.filename, 511, writerDev);
 var pb = null;
 if (opts.open) {
  pb = avio_open2_js(opts.filename, 2, /* AVIO_FLAG_WRITE */ 0, 0);
  if (pb === 0) throw new Error("Could not open file");
  AVFormatContext_pb_s(oc, pb);
 }
 return [ oc, fmt, pb, sts ];
};

var ff_free_muxer = Module.ff_free_muxer = function(oc, pb) {
 avformat_free_context(oc);
 if (pb) avio_close(pb);
};

/* @types
 * ff_init_demuxer_file@sync(
 *     filename: string, fmt?: string
 * ): @promsync@[number, Stream[]]@
 */ function ff_init_demuxer_file(filename, fmt) {
 var fmt_ctx;
 return Promise.all([]).then(function() {
  return avformat_open_input_js(filename, fmt ? fmt : null, null);
 }).then(function(ret) {
  fmt_ctx = ret;
  if (fmt_ctx === 0) throw new Error("Could not open source file");
  return avformat_find_stream_info(fmt_ctx, 0);
 }).then(function() {
  var nb_streams = AVFormatContext_nb_streams(fmt_ctx);
  var streams = [];
  for (var i = 0; i < nb_streams; i++) {
   var inStream = AVFormatContext_streams_a(fmt_ctx, i);
   var outStream = {
    ptr: inStream,
    index: i
   };
   var codecpar = AVStream_codecpar(inStream);
   outStream.codecpar = codecpar;
   outStream.codec_type = AVCodecParameters_codec_type(codecpar);
   outStream.codec_id = AVCodecParameters_codec_id(codecpar);
   outStream.time_base_num = AVStream_time_base_num(inStream);
   outStream.time_base_den = AVStream_time_base_den(inStream);
   outStream.duration_time_base = AVStream_duration(inStream) + (AVStream_durationhi(inStream) * 4294967296);
   outStream.duration = outStream.duration_time_base * outStream.time_base_num / outStream.time_base_den;
   streams.push(outStream);
  }
  return [ fmt_ctx, streams ];
 });
}

Module.ff_init_demuxer_file = function() {
 var args = arguments;
 Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
  return ff_init_demuxer_file.apply(void 0, args);
 });
 return Module.serializationPromise;
};

/* @types
 * ff_write_multi@sync(
 *     oc: number, pkt: number, inPackets: (Packet | number)[], interleave?: boolean
 * ): @promise@void@
 */ var ff_write_multi = Module.ff_write_multi = function(oc, pkt, inPackets, interleave) {
 var step = av_interleaved_write_frame;
 if (interleave === false) step = av_write_frame;
 inPackets.forEach(function(inPacket) {
  var ret = av_packet_make_writable(pkt);
  if (ret < 0) throw new Error("Error making packet writable: " + ff_error(ret));
  ff_copyin_packet(pkt, inPacket);
  step(oc, pkt);
  av_packet_unref(pkt);
 });
 av_packet_unref(pkt);
};

/* @types
 * ff_read_frame_multi@sync(
 *     fmt_ctx: number, pkt: number, opts?: {
 *         limit?: number, // OUTPUT limit, in bytes
 *         unify?: boolean, // If true, unify the packets into a single stream (called 0), so that the output is in the same order as the input
 *         copyoutPacket?: "default" // Version of ff_copyout_packet to use
 *     }
 * ): @promsync@[number, Record<number, Packet[]>]@
 * ff_read_frame_multi@sync(
 *     fmt_ctx: number, pkt: number, opts?: {
 *         limit?: number, // OUTPUT limit, in bytes
 *         unify?: boolean, // If true, unify the packets into a single stream (called 0), so that the output is in the same order as the input
 *         copyoutPacket: "ptr" // Version of ff_copyout_packet to use
 *     }
 * ): @promsync@[number, Record<number, number[]>]@
 */ function ff_read_frame_multi(fmt_ctx, pkt, opts) {
 var sz = 0;
 var outPackets = {};
 if (typeof opts === "number") opts = {
  limit: opts
 };
 if (typeof opts === "undefined") opts = {};
 var unify = !!opts.unify;
 var copyoutPacket = ff_copyout_packet;
 if (opts.copyoutPacket) copyoutPacket = ff_copyout_packet_versions[opts.copyoutPacket];
 function step() {
  return Promise.all([]).then(function() {
   return av_read_frame(fmt_ctx, pkt);
  }).then(function(ret) {
   if (ret < 0) return [ ret, outPackets ];
   var packet = copyoutPacket(pkt);
   var idx = unify ? 0 : AVPacket_stream_index(pkt);
   if (!(idx in outPackets)) outPackets[idx] = [];
   outPackets[idx].push(packet);
   sz += AVPacket_size(pkt);
   av_packet_unref(pkt);
   if (opts.limit && sz >= opts.limit) return [ -6, /* EAGAIN */ outPackets ];
   return Promise.all([]).then(step);
  });
 }
 return Promise.all([]).then(step);
}

Module.ff_read_frame_multi = function() {
 var args = arguments;
 Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
  return ff_read_frame_multi.apply(void 0, args);
 });
 return Module.serializationPromise;
};

/* @types
 * ff_read_multi@sync(
 *     fmt_ctx: number, pkt: number, devfile?: string, opts?: {
 *         limit?: number, // OUTPUT limit, in bytes
 *         unify?: boolean, // If true, unify the packets into a single stream (called 0), so that the output is in the same order as the input
 *         copyoutPacket?: "default" // Version of ff_copyout_packet to use
 *     }
 * ): @promsync@[number, Record<number, Packet[]>]@
 * ff_read_multi@sync(
 *     fmt_ctx: number, pkt: number, devfile?: string, opts?: {
 *         limit?: number, // OUTPUT limit, in bytes
 *         devLimit?: number, // INPUT limit, in bytes (don't read if less than this much data is available)
 *         unify?: boolean, // If true, unify the packets into a single stream (called 0), so that the output is in the same order as the input
 *         copyoutPacket: "ptr" // Version of ff_copyout_packet to use
 *     }
 * ): @promsync@[number, Record<number, number[]>]@
 */ Module.ff_read_multi = function(fmt_ctx, pkt, devfile, opts) {
 console.log("[libav.js] ff_read_multi is deprecated. Use ff_read_frame_multi.");
 return Module.ff_read_frame_multi(fmt_ctx, pkt, opts);
};

/* @types
 * ff_init_filter_graph@sync(
 *     filters_descr: string,
 *     input: FilterIOSettings,
 *     output: FilterIOSettings
 * ): @promise@[number, number, number]@;
 * ff_init_filter_graph@sync(
 *     filters_descr: string,
 *     input: FilterIOSettings[],
 *     output: FilterIOSettings
 * ): @promise@[number, number[], number]@;
 * ff_init_filter_graph@sync(
 *     filters_descr: string,
 *     input: FilterIOSettings,
 *     output: FilterIOSettings[]
 * ): @promise@[number, number, number[]]@;
 * ff_init_filter_graph@sync(
 *     filters_descr: string,
 *     input: FilterIOSettings[],
 *     output: FilterIOSettings[]
 * ): @promise@[number, number[], number[]]@
 */ var ff_init_filter_graph = Module.ff_init_filter_graph = function(filters_descr, input, output) {
 var buffersrc, abuffersrc, buffersink, abuffersink, filter_graph, tmp_src_ctx, tmp_sink_ctx, src_ctxs, sink_ctxs, io_outputs, io_inputs, int32s, int64s;
 var instr, outstr;
 var multiple_inputs = !!input.length;
 if (!multiple_inputs) input = [ input ];
 var multiple_outputs = !!output.length;
 if (!multiple_outputs) output = [ output ];
 src_ctxs = [];
 sink_ctxs = [];
 try {
  buffersrc = avfilter_get_by_name("buffer");
  abuffersrc = avfilter_get_by_name("abuffer");
  buffersink = avfilter_get_by_name("buffersink");
  abuffersink = avfilter_get_by_name("abuffersink");
  filter_graph = avfilter_graph_alloc();
  if (filter_graph === 0) throw new Error("Failed to allocate filter graph");
  io_outputs = 0;
  var ii = 0;
  input.forEach(function(input) {
   var next_io_outputs = avfilter_inout_alloc();
   if (next_io_outputs === 0) throw new Error("Failed to allocate outputs");
   AVFilterInOut_next_s(next_io_outputs, io_outputs);
   io_outputs = next_io_outputs;
   var nm = "in" + (multiple_inputs ? ii : "");
   if (input.type === 0) /* AVMEDIA_TYPE_VIDEO */ {
    if (buffersrc === 0) throw new Error("Failed to load buffer filter");
    var frame_rate = input.frame_rate;
    var time_base = input.time_base;
    if (typeof frame_rate === "undefined") frame_rate = 30;
    if (typeof time_base === "undefined") time_base = [ 1, frame_rate ];
    tmp_src_ctx = avfilter_graph_create_filter_js(buffersrc, nm, "time_base=" + time_base[0] + "/" + time_base[1] + ":frame_rate=" + frame_rate + ":pix_fmt=" + (input.pix_fmt ? input.pix_fmt : 0) + ":width=" + (input.width ? input.width : 640) + ":height=" + (input.height ? input.height : 360), null, filter_graph);
   } else {
    if (abuffersrc === 0) throw new Error("Failed to load abuffer filter");
    var sample_rate = input.sample_rate;
    var time_base = input.time_base;
    if (typeof sample_rate === "undefined") sample_rate = 48e3;
    if (typeof time_base === "undefined") time_base = [ 1, sample_rate ];
    tmp_src_ctx = avfilter_graph_create_filter_js(abuffersrc, nm, "time_base=" + time_base[0] + "/" + time_base[1] + ":sample_rate=" + sample_rate + ":sample_fmt=" + (input.sample_fmt ? input.sample_fmt : 3) + ":channel_layout=" + (input.channel_layout ? input.channel_layout : 4), null, filter_graph);
   }
   if (tmp_src_ctx === 0) throw new Error("Cannot create buffer source");
   src_ctxs.push(tmp_src_ctx);
   instr = av_strdup(nm);
   if (instr === 0) throw new Error("Failed to allocate output");
   AVFilterInOut_name_s(io_outputs, instr);
   instr = 0;
   AVFilterInOut_filter_ctx_s(io_outputs, tmp_src_ctx);
   tmp_src_ctx = 0;
   AVFilterInOut_pad_idx_s(io_outputs, 0);
   ii++;
  });
  io_inputs = 0;
  var oi = 0;
  output.forEach(function(output) {
   var next_io_inputs = avfilter_inout_alloc();
   if (next_io_inputs === 0) throw new Error("Failed to allocate inputs");
   AVFilterInOut_next_s(next_io_inputs, io_inputs);
   io_inputs = next_io_inputs;
   var nm = "out" + (multiple_outputs ? oi : "");
   if (output.type === 0) /* AVMEDIA_TYPE_VIDEO */ {
    if (buffersink === 0) throw new Error("Failed to load buffersink filter");
    tmp_sink_ctx = avfilter_graph_create_filter_js(buffersink, nm, null, null, filter_graph);
   } else {
    tmp_sink_ctx = avfilter_graph_create_filter_js(abuffersink, nm, null, null, filter_graph);
   }
   if (tmp_sink_ctx === 0) throw new Error("Cannot create buffer sink");
   sink_ctxs.push(tmp_sink_ctx);
   if (output.type === 0) /* AVMEDIA_TYPE_VIDEO */ {
    int32s = ff_malloc_int32_list([ output.pix_fmt ? output.pix_fmt : 0, /* YUV420P */ -1 ]);
    if (int32s === 0) throw new Error("Failed to transfer parameters");
    if (av_opt_set_int_list_js(tmp_sink_ctx, "pix_fmts", 4, int32s, -1, 1) < 0) {
     throw new Error("Failed to set filter parameters");
    }
    free(int32s);
    int32s = 0;
   } else {
    int32s = ff_malloc_int32_list([ output.sample_fmt ? output.sample_fmt : 3, /*FLT*/ -1, output.sample_rate ? output.sample_rate : 48e3, -1 ]);
    int64s = ff_malloc_int64_list([ output.channel_layout ? output.channel_layout : 4, /*MONO*/ -1 ]);
    if (int32s === 0 || int64s === 0) throw new Error("Failed to transfer parameters");
    if (av_opt_set_int_list_js(tmp_sink_ctx, "sample_fmts", 4, int32s, -1, 1) < 0 || av_opt_set_int_list_js(tmp_sink_ctx, "channel_layouts", 8, int64s, -1, 1) < 0 || av_opt_set_int_list_js(tmp_sink_ctx, "sample_rates", 4, int32s + 8, -1, 1) < 0) {
     throw new Error("Failed to set filter parameters");
    }
    free(int32s);
    int32s = 0;
    free(int64s);
    int64s = 0;
   }
   outstr = av_strdup(nm);
   if (outstr === 0) throw new Error("Failed to transfer parameters");
   AVFilterInOut_name_s(io_inputs, outstr);
   outstr = 0;
   AVFilterInOut_filter_ctx_s(io_inputs, tmp_sink_ctx);
   tmp_sink_ctx = 0;
   AVFilterInOut_pad_idx_s(io_inputs, 0);
   oi++;
  });
  var ret = avfilter_graph_parse(filter_graph, filters_descr, io_inputs, io_outputs, 0);
  if (ret < 0) throw new Error("Failed to initialize filters: " + ff_error(ret));
  io_inputs = io_outputs = 0;
  var oi = 0;
  output.forEach(function(output) {
   if (output.frame_size) av_buffersink_set_frame_size(sink_ctxs[oi], output.frame_size);
   oi++;
  });
  ret = avfilter_graph_config(filter_graph, 0);
  if (ret < 0) throw new Error("Failed to configure filter graph: " + ff_error(ret));
 } catch (ex) {
  if (io_outputs) avfilter_inout_free(io_outputs);
  if (io_inputs) avfilter_inout_free(io_inputs);
  if (filter_graph) avfilter_graph_free(filter_graph);
  if (tmp_src_ctx) avfilter_free(tmp_src_ctx);
  if (tmp_sink_ctx) avfilter_free(tmp_sink_ctx);
  if (int32s) free(int32s);
  if (int64s) free(int64s);
  if (instr) free(instr);
  if (outstr) free(outstr);
  throw ex;
 }
 return [ filter_graph, multiple_inputs ? src_ctxs : src_ctxs[0], multiple_outputs ? sink_ctxs : sink_ctxs[0] ];
};

/* @types
 * ff_filter_multi@sync(
 *     srcs: number, buffersink_ctx: number, framePtr: number,
 *     inFrames: (Frame | number)[], config?: boolean | {
 *         fin?: boolean,
 *         copyoutFrame?: "default" | "video" | "video_packed"
 *     }
 * ): @promise@Frame[]@;
 * ff_filter_multi@sync(
 *     srcs: number[], buffersink_ctx: number, framePtr: number,
 *     inFrames: (Frame | number)[][], config?: boolean[] | {
 *         fin?: boolean,
 *         copyoutFrame?: "default" | "video" | "video_packed"
 *     }[]
 * ): @promise@Frame[]@
 * ff_filter_multi@sync(
 *     srcs: number, buffersink_ctx: number, framePtr: number,
 *     inFrames: (Frame | number)[], config?: boolean | {
 *         fin?: boolean,
 *         copyoutFrame: "ptr"
 *     }
 * ): @promise@number[]@;
 * ff_filter_multi@sync(
 *     srcs: number[], buffersink_ctx: number, framePtr: number,
 *     inFrames: (Frame | number)[][], config?: boolean[] | {
 *         fin?: boolean,
 *         copyoutFrame: "ptr"
 *     }[]
 * ): @promise@number[]@
 * ff_filter_multi@sync(
 *     srcs: number, buffersink_ctx: number, framePtr: number,
 *     inFrames: (Frame | number)[], config?: boolean | {
 *         fin?: boolean,
 *         copyoutFrame: "ImageData"
 *     }
 * ): @promise@ImageData[]@;
 * ff_filter_multi@sync(
 *     srcs: number[], buffersink_ctx: number, framePtr: number,
 *     inFrames: (Frame | number)[][], config?: boolean[] | {
 *         fin?: boolean,
 *         copyoutFrame: "ImageData"
 *     }[]
 * ): @promise@ImageData[]@
 */ var ff_filter_multi = Module.ff_filter_multi = function(srcs, buffersink_ctx, framePtr, inFrames, config) {
 var outFrames = [];
 var transfer = [];
 if (!srcs.length) {
  srcs = [ srcs ];
  inFrames = [ inFrames ];
  config = [ config ];
 }
 config = config.map(function(config) {
  if (config === true) return {
   fin: true
  };
  return config || {};
 });
 var max = inFrames.map(function(srcFrames) {
  return srcFrames.length;
 }).reduce(function(a, b) {
  return Math.max(a, b);
 });
 function handleFrame(buffersrc_ctx, inFrame, copyoutFrame) {
  if (inFrame !== null) ff_copyin_frame(framePtr, inFrame);
  var ret = av_buffersrc_add_frame_flags(buffersrc_ctx, inFrame ? framePtr : 0, 8);
  /* AV_BUFFERSRC_FLAG_KEEP_REF */ if (ret < 0) throw new Error("Error while feeding the audio filtergraph: " + ff_error(ret));
  av_frame_unref(framePtr);
  while (true) {
   ret = av_buffersink_get_frame(buffersink_ctx, framePtr);
   if (ret === -6 || /* EAGAIN */ ret === -541478725) /* AVERROR_EOF */ break;
   if (ret < 0) throw new Error("Error while receiving a frame from the filtergraph: " + ff_error(ret));
   var outFrame = copyoutFrame(framePtr);
   if (outFrame && outFrame.libavjsTransfer && outFrame.libavjsTransfer.length) transfer.push.apply(transfer, outFrame.libavjsTransfer);
   outFrames.push(outFrame);
   av_frame_unref(framePtr);
  }
 }
 for (var fi = 0; fi <= max; fi++) {
  for (var ti = 0; ti < inFrames.length; ti++) {
   var inFrame = inFrames[ti][fi];
   var copyoutFrame = ff_copyout_frame;
   if (config[ti].copyoutFrame) copyoutFrame = ff_copyout_frame_versions[config[ti].copyoutFrame];
   if (inFrame) handleFrame(srcs[ti], inFrame, copyoutFrame); else if (config[ti].fin) handleFrame(srcs[ti], null, copyoutFrame);
  }
 }
 outFrames.libavjsTransfer = transfer;
 return outFrames;
};

/* @types
 * ff_decode_filter_multi@sync(
 *     ctx: number, buffersrc_ctx: number, buffersink_ctx: number, pkt: number,
 *     frame: number, inPackets: (Packet | number)[],
 *     config?: boolean | {
 *         fin?: boolean,
 *         ignoreErrors?: boolean,
 *         copyoutFrame?: "default" | "video" | "video_packed"
 *     }
 * ): @promise@Frame[]@
 * ff_decode_filter_multi@sync(
 *     ctx: number, buffersrc_ctx: number, buffersink_ctx: number, pkt: number,
 *     frame: number, inPackets: (Packet | number)[],
 *     config?: boolean | {
 *         fin?: boolean,
 *         ignoreErrors?: boolean,
 *         copyoutFrame: "ptr"
 *     }
 * ): @promise@number[]@
 * ff_decode_filter_multi@sync(
 *     ctx: number, buffersrc_ctx: number, buffersink_ctx: number, pkt: number,
 *     frame: number, inPackets: (Packet | number)[],
 *     config?: boolean | {
 *         fin?: boolean,
 *         ignoreErrors?: boolean,
 *         copyoutFrame: "ImageData"
 *     }
 * ): @promise@ImageData[]@
 */ var ff_decode_filter_multi = Module.ff_decode_filter_multi = function(ctx, buffersrc_ctx, buffersink_ctx, pkt, frame, inPackets, config) {
 if (typeof config === "boolean") {
  config = {
   fin: config
  };
 } else {
  config = config || {};
 }
 var decodedFrames = ff_decode_multi(ctx, pkt, frame, inPackets, {
  fin: !!config.fin,
  ignoreErrors: !!config.ignoreErrors,
  copyoutFrame: "ptr"
 });
 return ff_filter_multi(buffersrc_ctx, buffersink_ctx, frame, decodedFrames, {
  fin: !!config.fin,
  copyoutFrame: config.copyoutFrame || "default"
 });
};

var ff_copyout_frame = Module.ff_copyout_frame = function(frame) {
 var nb_samples = AVFrame_nb_samples(frame);
 if (nb_samples === 0) {
  var width = AVFrame_width(frame);
  if (width) return ff_copyout_frame_video_width(frame, width);
 }
 var channels = AVFrame_channels(frame);
 var format = AVFrame_format(frame);
 var transfer = [];
 var outFrame = {
  data: null,
  libavjsTransfer: transfer,
  channel_layout: AVFrame_channel_layout(frame),
  channels: channels,
  format: format,
  nb_samples: nb_samples,
  pts: AVFrame_pts(frame),
  ptshi: AVFrame_ptshi(frame),
  sample_rate: AVFrame_sample_rate(frame)
 };
 if (format >= 5) /* U8P */ {
  var data = [];
  for (var ci = 0; ci < channels; ci++) {
   var inData = AVFrame_data_a(frame, ci);
   var outData = null;
   switch (format) {
   case 5:
    outData = copyout_u8(inData, nb_samples);
    break;

   case 6:
    outData = copyout_s16(inData, nb_samples);
    break;

   case 7:
    outData = copyout_s32(inData, nb_samples);
    break;

   case 8:
    outData = copyout_f32(inData, nb_samples);
    break;
   }
   if (outData) {
    data.push(outData);
    transfer.push(outData.buffer);
   }
  }
  outFrame.data = data;
 } else {
  var ct = channels * nb_samples;
  var inData = AVFrame_data_a(frame, 0);
  var outData = null;
  switch (format) {
  case 0:
   outData = copyout_u8(inData, ct);
   break;

  case 1:
   outData = copyout_s16(inData, ct);
   break;

  case 2:
   outData = copyout_s32(inData, ct);
   break;

  case 3:
   outData = copyout_f32(inData, ct);
   break;
  }
  if (outData) {
   outFrame.data = outData;
   transfer.push(outData.buffer);
  }
 }
 return outFrame;
};

var ff_copyout_frame_video = Module.ff_copyout_frame_video = function(frame) {
 return ff_copyout_frame_video_width(frame, AVFrame_width(frame));
};

var ff_copyout_frame_video_width = Module.ff_copyout_frame_video = function(frame, width) {
 var height = AVFrame_height(frame);
 var format = AVFrame_format(frame);
 var desc = av_pix_fmt_desc_get(format);
 var log2ch = AVPixFmtDescriptor_log2_chroma_h(desc);
 var layout = [];
 var transfer = [];
 var outFrame = {
  data: null,
  layout: layout,
  libavjsTransfer: transfer,
  width: width,
  height: height,
  crop: {
   top: AVFrame_crop_top(frame),
   bottom: AVFrame_crop_bottom(frame),
   left: AVFrame_crop_left(frame),
   right: AVFrame_crop_right(frame)
  },
  format: AVFrame_format(frame),
  key_frame: AVFrame_key_frame(frame),
  pict_type: AVFrame_pict_type(frame),
  pts: AVFrame_pts(frame),
  ptshi: AVFrame_ptshi(frame),
  sample_aspect_ratio: [ AVFrame_sample_aspect_ratio_num(frame), AVFrame_sample_aspect_ratio_den(frame) ]
 };
 var dataLo = 1 / 0;
 var dataHi = 0;
 for (var p = 0; p < 8; /* AV_NUM_DATA_POINTERS */ p++) {
  var linesize = AVFrame_linesize_a(frame, p);
  if (!linesize) break;
  var plane = AVFrame_data_a(frame, p);
  if (plane < dataLo) dataLo = plane;
  var h = height;
  if (p === 1 || p === 2) h >>= log2ch;
  plane += linesize * h;
  if (plane > dataHi) dataHi = plane;
 }
 outFrame.data = Module.HEAPU8.slice(dataLo, dataHi);
 transfer.push(outFrame.data.buffer);
 for (var p = 0; p < 8; p++) {
  var linesize = AVFrame_linesize_a(frame, p);
  if (!linesize) break;
  var plane = AVFrame_data_a(frame, p);
  layout.push({
   offset: plane - dataLo,
   stride: linesize
  });
 }
 return outFrame;
};

var ff_frame_video_packed_size = Module.ff_frame_video_packed_size = function(frame) {
 var width = AVFrame_width(frame);
 var height = AVFrame_height(frame);
 var format = AVFrame_format(frame);
 var desc = av_pix_fmt_desc_get(format);
 var bpp = 1;
 if (!(AVPixFmtDescriptor_flags(desc) & 16)) /* planar */ bpp *= AVPixFmtDescriptor_nb_components(desc);
 var dataSz = 0;
 for (var i = 0; i < 8; /* AV_NUM_DATA_POINTERS */ i++) {
  var linesize = AVFrame_linesize_a(frame, i);
  if (!linesize) break;
  var w = width * bpp;
  var h = height;
  if (i === 1 || i === 2) {
   w >>= AVPixFmtDescriptor_log2_chroma_w(desc);
   h >>= AVPixFmtDescriptor_log2_chroma_h(desc);
  }
  dataSz += w * h;
 }
 return dataSz;
};

/* Copy out just the packed data from this frame, into the given buffer. Used
 * internally. */ function ff_copyout_frame_data_packed(data, layout, frame) {
 var width = AVFrame_width(frame);
 var height = AVFrame_height(frame);
 var format = AVFrame_format(frame);
 var desc = av_pix_fmt_desc_get(format);
 var bpp = 1;
 if (!(AVPixFmtDescriptor_flags(desc) & 16)) /* planar */ bpp *= AVPixFmtDescriptor_nb_components(desc);
 var dIdx = 0;
 for (var i = 0; i < 8; /* AV_NUM_DATA_POINTERS */ i++) {
  var linesize = AVFrame_linesize_a(frame, i);
  if (!linesize) break;
  var inData = AVFrame_data_a(frame, i);
  var w = width * bpp;
  var h = height;
  if (i === 1 || i === 2) {
   w >>= AVPixFmtDescriptor_log2_chroma_w(desc);
   h >>= AVPixFmtDescriptor_log2_chroma_h(desc);
  }
  layout.push({
   offset: dIdx,
   stride: w
  });
  for (var y = 0; y < h; y++) {
   var line = inData + y * linesize;
   data.set(Module.HEAPU8.subarray(line, line + w), dIdx);
   dIdx += w;
  }
 }
}

var ff_copyout_frame_video_packed = Module.ff_copyout_frame_video_packed = function(frame) {
 var data = new Uint8Array(ff_frame_video_packed_size(frame));
 var layout = [];
 ff_copyout_frame_data_packed(data, layout, frame);
 var outFrame = {
  data: data,
  libavjsTransfer: [ data.buffer ],
  width: AVFrame_width(frame),
  height: AVFrame_height(frame),
  format: AVFrame_format(frame),
  key_frame: AVFrame_key_frame(frame),
  pict_type: AVFrame_pict_type(frame),
  pts: AVFrame_pts(frame),
  ptshi: AVFrame_ptshi(frame),
  sample_aspect_ratio: [ AVFrame_sample_aspect_ratio_num(frame), AVFrame_sample_aspect_ratio_den(frame) ]
 };
 return outFrame;
};

/* @types
 * ff_copyout_frame_video_imagedata@sync(
 *     frame: number
 * ): @promise@ImageData@
 */ var ff_copyout_frame_video_imagedata = Module.ff_copyout_frame_video_imagedata = function(frame) {
 var width = AVFrame_width(frame);
 var height = AVFrame_height(frame);
 var id = new ImageData(width, height);
 var layout = [];
 ff_copyout_frame_data_packed(id.data, layout, frame);
 id.libavjsTransfer = [ id.data.buffer ];
 return id;
};

/**
 * Copy "out" a video frame by just allocating another frame in libav.
 * @param frame  AVFrame
 */ var ff_copyout_frame_ptr = Module.ff_copyout_frame_ptr = function(frame) {
 var ret = av_frame_clone(frame);
 if (!ret) throw new Error("Failed to allocate new frame");
 return ret;
};

var ff_copyout_frame_versions = {
 default: ff_copyout_frame,
 video: ff_copyout_frame_video,
 video_packed: ff_copyout_frame_video_packed,
 ImageData: ff_copyout_frame_video_imagedata,
 ptr: ff_copyout_frame_ptr
};

var ff_copyin_frame = Module.ff_copyin_frame = function(framePtr, frame) {
 if (typeof frame === "number") {
  av_frame_unref(framePtr);
  var ret = av_frame_ref(framePtr, frame);
  if (ret < 0) throw new Error("Failed to reference frame data: " + ff_error(ret));
  av_frame_unref(frame);
  av_frame_free_js(frame);
  return;
 }
 if (frame.width) return ff_copyin_frame_video(framePtr, frame);
 var format = frame.format;
 var channels = frame.channels;
 if (!channels) {
  var channel_layout = frame.channel_layout;
  channels = 0;
  while (channel_layout) {
   if (channel_layout & 1) channels++;
   channel_layout >>>= 1;
  }
 }
 [ "channel_layout", "channels", "format", "pts", "ptshi", "sample_rate" ].forEach(function(key) {
  if (key in frame) CAccessors["AVFrame_" + key + "_s"](framePtr, frame[key]);
 });
 var nb_samples;
 if (format >= 5) /* U8P */ {
  nb_samples = frame.data[0].length;
 } else {
  nb_samples = frame.data.length / channels;
 }
 AVFrame_nb_samples_s(framePtr, nb_samples);
 if (av_frame_make_writable(framePtr) < 0) {
  var ret = av_frame_get_buffer(framePtr, 0);
  if (ret < 0) throw new Error("Failed to allocate frame buffers: " + ff_error(ret));
 }
 if (format >= 5) /* U8P */ {
  for (var ci = 0; ci < channels; ci++) {
   var data = AVFrame_data_a(framePtr, ci);
   var inData = frame.data[ci];
   switch (format) {
   case 5:
    copyin_u8(data, inData);
    break;

   case 6:
    copyin_s16(data, inData);
    break;

   case 7:
    copyin_s32(data, inData);
    break;

   case 8:
    copyin_f32(data, inData);
    break;
   }
  }
 } else {
  var data = AVFrame_data_a(framePtr, 0);
  var inData = frame.data;
  switch (format) {
  case 0:
   copyin_u8(data, inData);
   break;

  case 1:
   copyin_s16(data, inData);
   break;

  case 2:
   copyin_s32(data, inData);
   break;

  case 3:
   copyin_f32(data, inData);
   break;
  }
 }
};

var ff_copyin_frame_video = Module.ff_copyin_frame_video = function(framePtr, frame) {
 [ "format", "height", "key_frame", "pict_type", "pts", "ptshi", "width" ].forEach(function(key) {
  if (key in frame) CAccessors["AVFrame_" + key + "_s"](framePtr, frame[key]);
 });
 if ("sample_aspect_ratio" in frame) {
  AVFrame_sample_aspect_ratio_s(framePtr, frame.sample_aspect_ratio[0], frame.sample_aspect_ratio[1]);
 }
 var crop = frame.crop || {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
 };
 AVFrame_crop_top_s(framePtr, crop.top);
 AVFrame_crop_bottom_s(framePtr, crop.bottom);
 AVFrame_crop_left_s(framePtr, crop.left);
 AVFrame_crop_right_s(framePtr, crop.right);
 var desc = av_pix_fmt_desc_get(frame.format);
 var log2cw = AVPixFmtDescriptor_log2_chroma_w(desc);
 var log2ch = AVPixFmtDescriptor_log2_chroma_h(desc);
 if (av_frame_make_writable(framePtr) < 0) {
  var ret = av_frame_get_buffer(framePtr, 0);
  if (ret < 0) throw new Error("Failed to allocate frame buffers: " + ff_error(ret));
 }
 var layout = frame.layout;
 if (!layout) {
  layout = [];
  var bpp = 1;
  if (!(AVPixFmtDescriptor_flags(desc) & 16)) /* planar */ bpp *= AVPixFmtDescriptor_nb_components(desc);
  var off = 0;
  for (var p = 0; p < 8; /* AV_NUM_DATA_POINTERS */ p++) {
   var linesize = AVFrame_linesize_a(framePtr, p);
   if (!linesize) break;
   var w = frame.width;
   var h = frame.height;
   if (p === 1 || p === 2) {
    w >>= log2cw;
    h >>= log2ch;
   }
   layout.push({
    offset: off,
    stride: w * bpp
   });
   off += w * h * bpp;
  }
 }
 for (var p = 0; p < layout.length; p++) {
  var lplane = layout[p];
  var linesize = AVFrame_linesize_a(framePtr, p);
  var data = AVFrame_data_a(framePtr, p);
  var h = frame.height;
  if (p === 1 || p === 2) h >>= log2ch;
  var ioff = lplane.offset;
  var ooff = 0;
  var stride = Math.min(lplane.stride, linesize);
  for (var y = 0; y < h; y++) {
   copyin_u8(data + ooff, frame.data.subarray(ioff, ioff + stride));
   ooff += linesize;
   ioff += lplane.stride;
  }
 }
};

var ff_copyout_packet = Module.ff_copyout_packet = function(pkt) {
 var data = AVPacket_data(pkt);
 var size = AVPacket_size(pkt);
 var data = copyout_u8(data, size);
 return {
  data: data,
  libavjsTransfer: [ data.buffer ],
  pts: AVPacket_pts(pkt),
  ptshi: AVPacket_ptshi(pkt),
  dts: AVPacket_dts(pkt),
  dtshi: AVPacket_dtshi(pkt),
  stream_index: AVPacket_stream_index(pkt),
  flags: AVPacket_flags(pkt),
  duration: AVPacket_duration(pkt),
  durationhi: AVPacket_durationhi(pkt),
  side_data: ff_copyout_side_data(pkt)
 };
};

var ff_copyout_side_data = Module.ff_copyout_side_data = function(pkt) {
 var side_data = AVPacket_side_data(pkt);
 var side_data_elems = AVPacket_side_data_elems(pkt);
 if (!side_data) return null;
 var ret = [];
 for (var i = 0; i < side_data_elems; i++) {
  var data = AVPacketSideData_data(side_data, i);
  var size = AVPacketSideData_size(side_data, i);
  ret.push({
   data: copyout_u8(data, size),
   type: AVPacketSideData_type(side_data, i)
  });
 }
 return ret;
};

var ff_copyout_packet_ptr = Module.ff_copyout_packet_ptr = function(pkt) {
 var ret = av_packet_clone(pkt);
 if (!ret) throw new Error("Failed to clone packet");
 return ret;
};

var ff_copyout_packet_versions = {
 default: ff_copyout_packet,
 ptr: ff_copyout_packet_ptr
};

var ff_copyin_packet = Module.ff_copyin_packet = function(pktPtr, packet) {
 if (typeof packet === "number") {
  av_packet_unref(pktPtr);
  var res = av_packet_ref(pktPtr, packet);
  if (res < 0) throw new Error("Failed to reference packet: " + ff_error(res));
  av_packet_unref(packet);
  av_packet_free_js(packet);
  return;
 }
 ff_set_packet(pktPtr, packet.data);
 [ "dts", "dtshi", "duration", "durationhi", "flags", "side_data", "side_data_elems", "stream_index", "pts", "ptshi" ].forEach(function(key) {
  if (key in packet) CAccessors["AVPacket_" + key + "_s"](pktPtr, packet[key]);
 });
 if (packet.side_data) ff_copyin_side_data(pktPtr, packet.side_data);
};

var ff_copyin_side_data = Module.ff_copyin_side_data = function(pktPtr, side_data) {
 side_data.forEach(function(elem) {
  var data = av_packet_new_side_data(pktPtr, elem.type, elem.data.length);
  if (data === 0) throw new Error("Failed to allocate side data!");
  copyin_u8(data, elem.data);
 });
};

var ff_malloc_int32_list = Module.ff_malloc_int32_list = function(list) {
 var ptr = malloc(list.length * 4);
 if (ptr === 0) throw new Error("Failed to malloc");
 var arr = new Uint32Array(Module.HEAPU8.buffer, ptr, list.length);
 for (var i = 0; i < list.length; i++) arr[i] = list[i];
 return ptr;
};

var ff_malloc_int64_list = Module.ff_malloc_int64_list = function(list) {
 var ptr = malloc(list.length * 8);
 if (ptr === 0) throw new Error("Failed to malloc");
 var arr = new Int32Array(Module.HEAPU8.buffer, ptr, list.length * 2);
 for (var i = 0; i < list.length; i++) {
  arr[i * 2] = list[i];
  arr[i * 2 + 1] = (list[i] < 0) ? -1 : 0;
 }
 return ptr;
};

var ff_malloc_string_array = Module.ff_malloc_string_array = function(arr) {
 var ptr = malloc((arr.length + 1) * 4);
 if (ptr === 0) throw new Error("Failed to malloc");
 var inArr = new Uint32Array(Module.HEAPU8.buffer, ptr, arr.length + 1);
 var i;
 for (i = 0; i < arr.length; i++) inArr[i] = av_strdup(arr[i]);
 inArr[i] = 0;
 return ptr;
};

var ff_free_string_array = Module.ff_free_string_array = function(ptr) {
 var iPtr = ptr / 4;
 for (;;iPtr++) {
  var elPtr = Module.HEAPU32[iPtr];
  if (!elPtr) break;
  free(elPtr);
 }
 free(ptr);
};

function convertArgs(argv0, args) {
 var ret = [ argv0 ];
 ret = ret.concat(Array.prototype.slice.call(args, 0));
 for (var i = 0; i < ret.length; i++) {
  var arg = ret[i];
  if (typeof arg !== "string") {
   if ("length" in arg) {
    ret.splice.apply(ret, [ i, 1 ].concat(arg));
   } else {
    ret[i] = "" + arg;
   }
  }
 }
 return ret;
}

function runMain(main, name, args) {
 args = convertArgs(name, args);
 var argv = ff_malloc_string_array(args);
 Module.fsThrownError = null;
 var ret = null;
 try {
  ret = main(args.length, argv);
 } catch (ex) {
  if (ex && ex.name === "ExitStatus") ret = ex.status; else if (ex === "unwind") ret = EXITSTATUS; else throw ex;
 }
 function cleanup() {
  ff_free_string_array(argv);
 }
 if (ret && ret.then) {
  return ret.then(function(ret) {
   cleanup();
   return ret;
  }).catch(function(ex) {
   cleanup();
   if (ex && ex.name === "ExitStatus") return Promise.resolve(ex.status); else if (ex === "unwind") return Promise.resolve(EXITSTATUS); else return Promise.reject(ex);
  }).then(function(ret) {
   if (Module.fsThrownError) {
    var thr = Module.fsThrownError;
    Module.fsThrownError = null;
    throw thr;
   }
   return ret;
  });
 } else {
  cleanup();
  if (Module.fsThrownError) {
   var thr = Module.fsThrownError;
   Module.fsThrownError = null;
   throw thr;
  }
  return ret;
 }
}

var ffmpeg = Module.ffmpeg = function() {
 return runMain(ffmpeg_main, "ffmpeg", arguments);
};

var ffprobe = Module.ffprobe = function() {
 return runMain(ffprobe_main, "ffprobe", arguments);
};


  return moduleArg.ready
}
);
})();
export default LibAVFactory;/*
 * Copyright (C) 2019-2024 Yahweasel
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
 * SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
 * OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
 * CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

if (/* We're in a worker */
    typeof importScripts !== "undefined" &&
    /* We're not being loaded with noworker from the main code */
    typeof LibAV === "undefined" &&
    /* We're not being loaded as a thread */
    typeof Module === "undefined"
    ) (function() {
    var libav;

    Promise.all([]).then(function() {
        /* We're the primary code for this worker. The host should ask us to
         * load immediately. */
        return new Promise(function(res, rej) {
            onmessage = function(e) {
                if (e && e.data && e.data.config) {
                    LibAVFactory({
                        wasmurl: e.data.config.wasmurl,
                        variant: e.data.config.variant
                    }).then(res).catch(rej);
                }
            };
        });

    }).then(function(lib) {
        libav = lib;

        // Now we're ready for normal messages
        onmessage = function(e) {
            var id = e.data[0];
            var fun = e.data[1];
            var args = e.data.slice(2);
            var ret = void 0;
            var transfer = [];
            var succ = true;
            try {
                ret = libav[fun].apply(libav, args);
            } catch (ex) {
                succ = false;
                ret = ex;
            }
            if (succ && typeof ret === "object" && ret !== null && ret.then) {
                // Let the promise resolve
                ret.then(function(res) {
                    ret = res;
                }).catch(function(ex) {
                    succ = false;
                    ret = ex;
                }).then(function() {
                    if (typeof ret === "object" && ret && ret.libavjsTransfer)
                        transfer = ret.libavjsTransfer;
                    try {
                        postMessage([id, fun, succ, ret], transfer);
                    } catch (ex) {
                        postMessage([id, fun, succ, "" + ret]);
                    }
                });

            } else {
                if (typeof ret === "object" && ret && ret.libavjsTransfer)
                    transfer = ret.libavjsTransfer;
                try {
                    postMessage([id, fun, succ, ret], transfer);
                } catch (ex) {
                    postMessage([id, fun, succ, "" + ret]);
                }

            }
        };

        libav.onwrite = function(name, pos, buf) {
            /* We have to buf.slice(0) so we don't duplicate the entire heap just
             * to get one part of it in postMessage */
            buf = buf.slice(0);
            postMessage(["onwrite", "onwrite", true, [name, pos, buf]], [buf.buffer]);
        };

        libav.onblockread = function(name, pos, len) {
            postMessage(["onblockread", "onblockread", true, [name, pos, len]]);
        };
        postMessage(["onready", "onready", true, null]);

    }).catch(function(ex) {
        console.log("Loading LibAV failed\n" + ex + "\n" + ex.stack);
    });
})();
