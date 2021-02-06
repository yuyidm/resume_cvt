(function (global) {
    let className = 'tddaaf1c38234'
    let cvtStyleTop = Vue.extend({
        name: 'cvtStyleTop',
        mixins: [resumeMixin],
        // language=Vue
        template: `
          <div class="${className} cvt_swap1">
          <div data-minimum class="data-minimum cvt_top_swap">
            <div class="cvt_head_swap" v-style.bgc="color"></div>
            <div class="cvt_block" v-style.bgc="color"></div>
            <div class="cvt_main_swap swap_flex">
              <div class="left">
                <div class="image" v-if="m001.user_photo">
                  <img crossorigin="anonymous" :src="m001.user_photo" alt="">
                </div>
                <div class="swap_flex_ai">
                  <div class="text_000_bold"
                       style="margin-right: 10px"
                       v-style.fs="fontSize + 8"
                       v-if="m001.first_name || m001.last_name"
                  >{{ m001.last_name }}{{ m001.first_name }}
                  </div>
                  <div class="user_sex"
                       v-if="m001.user_sex"
                       v-style.fs="fontSize - 2"
                       :class="{man: m001.user_sex === '男', woman: m001.user_sex === '女'}"
                  ></div>
                  <div class="text_000"
                       v-style.fs="fontSize - 2"
                       style="margin-right: 10px"
                       v-if="m009.work_position">{{ m009.work_position }}
                  </div>
                </div>
                <div class="swap_flex_fw">
                  <div class="item_after_1 text_696"
                       v-style.fs="fontSize - 2"
                       v-if="m001.user_birth">{{ m001.user_birth }}
                  </div>
                  <div class="item_after_1 text_696"
                       v-style.fs="fontSize - 2"
                       v-if="m001.english_name">{{ m001.english_name }}
                  </div>
                  <div class="item_after_1 text_696"
                       v-style.fs="fontSize - 2"
                       v-if="m001.first_name_pinyin && m001.last_name_pinyin">
                    {{ m001.first_name_pinyin }} {{ m001.last_name_pinyin }}
                  </div>
                </div>
                <div class="swap_flex_fw"
                     v-style.fs="fontSize - 2"
                >
                  <div class="item_after_1 text_696"
                       v-if="m001.last_education">{{ m001.last_education }}
                  </div>
                  <div class="item_after_1 text_696"
                       v-if="m001.last_degree">{{ m001.last_degree }}
                  </div>
                  <div class="item_after_1 text_696"
                       v-if="m001.health_condition">{{ m001.health_condition }}
                  </div>
                  <div class="item_after_1 text_696"
                       v-if="m001.marriage_status">{{ m001.marriage_status }}
                  </div>
                  <div class="item_after_1 text_696"
                       v-if="m001.political_code">{{ m001.political_code }}
                  </div>
                  <div class="item_after_1 text_696"
                       v-if="m001.work_status">{{ m001.work_status }}
                  </div>
                </div>
              </div>
              <div class="contact_swap right" style="margin-top: 60px;">
                <div class="swap_flex contact"
                     v-style.fs="fontSize - 2"
                     v-style.mb="padding - 5"
                     v-if="m001.user_phone"
                >
                  <div>T</div>
                  <div>{{ m001.user_phone }}</div>
                </div>
                <div class="swap_flex contact"
                     v-style.fs="fontSize - 2"
                     v-style.mb="padding - 5"
                     v-if="m001.user_wechat"
                >
                  <div>W</div>
                  <div>{{ m001.user_wechat }}</div>
                </div>
                <div class="swap_flex contact"
                     v-style.mb="padding - 5"
                     v-style.fs="fontSize - 2"
                     v-if="m001.user_qq"
                >
                  <div>Q</div>
                  <div>{{ m001.user_qq }}</div>
                </div>
                <div class="swap_flex contact"
                     v-style.mb="padding - 5"
                     v-style.fs="fontSize - 2"
                     v-if="m001.user_email"
                >
                  <div>E</div>
                  <div>{{ m001.user_email }}</div>
                </div>
              </div>
            </div>
          </div>
          </div>`
    })

    // 模板数据样式
    let cvtStyleLeft = Vue.extend({
        name: 'cvtStyleLeft',
        mixins: [resumeMixin],
        // language=Vue
        template: `
          <div class="${className} cvt_swap2">
          <div data-minimum class="data-minimum text_eee"
               v-style.fs="fontSize - 2" v-style.mb="padding - 10"
               v-if="m001.professional_title">
            职称：
            <template v-for="(item, index) in m001.professional_title">
              {{ item }}
              <template v-if="index !== m001.professional_title.length - 1">、</template>
            </template>
          </div>
          <div data-minimum class="data-minimum text_eee"
               v-style.fs="fontSize - 2" v-style.mb="padding - 10"
               v-if="m001.user_interests">兴趣爱好：{{ m001.user_interests }}
          </div>
          <div data-minimum class="data-minimum text_eee"
               v-style.fs="fontSize - 2" v-style.mb="padding - 10"
               v-if="m001.user_native_region">籍贯：{{ m001.user_native_region.country }}-
            {{ m001.user_native_region.province }}-{{ m001.user_native_region.city }}
          </div>
          <div data-minimum class="data-minimum text_eee"
               v-style.fs="fontSize - 2" v-style.mb="padding - 10"
               v-if="m001.user_birth_region">出生地：{{ m001.user_birth_region.country }}-
            {{ m001.user_birth_region.province }}-{{ m001.user_birth_region.city }}
          </div>
          <div data-minimum class="data-minimum text_eee"
               v-style.fs="fontSize - 2" v-style.mb="padding - 10"
               v-if="m001.user_current_region">现居住地：{{ m001.user_current_region.country }}-{{ m001.user_current_region.province }}-{{ m001.user_current_region.city }}
          </div>
          <div data-minimum class="data-minimum text_eee"
               v-style.fs="fontSize - 2" v-style.mb="padding - 10"
               v-if="m001.current_address">具体居住地址：{{ m001.current_address }}
          </div>
          <div data-minimum class="data-minimum" :style="{height: padding + 18 + 'px'}"></div>
          <div data-minimum class="data-minimum line1"
               v-style.mb="padding - 8"
               v-style.bgc="color"
               v-if="m013.selfEva.length"
          ></div>
          <template v-for="(data, index) in m013.selfEva">
            <cvtEditor :index="idx"
                v-for="(html, idx) in cvtEditor(data.evaluation_content)"
                class-name="text_eee"
                :html="html"
                :padding="padding - 10"
                :font-size="fontSize - 2"
            ></cvtEditor>
          </template>
          <div data-minimum class="data-minimum" :style="{height: padding + 18 + 'px'}"
               v-if="m013.selfEva.length > 0"></div>
          <div data-minimum class="data-minimum text_000_bold_p"
               v-style.mb="padding - 8"
               v-style.fs="fontSize - 2"
               v-if="m012.skills.length > 0"
          >技能能力
          </div>
          <div data-minimum class="data-minimum skill" v-for="(data, index) in m012.skills"
               v-style.fs="fontSize - 2"
               v-style.mb="padding - 10"
          >
            <div class="text_eee name item_before_eee">
              <div>{{ data.skill_name }}</div>
            </div>
            <div class="box">
              <div class="real" v-for="i in data.skill_level"></div>
              <div class="empty" v-for="i in (4 - data.skill_level)"></div>
            </div>
          </div>
          <div data-minimum class="data-minimum" :style="{height: padding + 18 + 'px'}"
               v-if="m012.skills.length > 0"></div>
          <div data-minimum class="data-minimum text_000_bold_p"
               v-style.mb="padding - 8"
               v-style.fs="fontSize - 2"
               v-if="m011.certificate.length > 0"
          >荣誉证书
          </div>
          <template v-for="(data, index) in m011.certificate">
            <div data-minimum class="data-minimum item_before_000"
                 v-style.mb="padding - 8"
                 v-if="data.certificate_name"
            >
              <div class="text_000_bold"
                   v-style.fs="fontSize - 2"
              >{{ data.certificate_name }}
              </div>
            </div>
            <div data-minimum class="data-minimum text_eee"
                 v-style.mb="padding - 8"
                 v-style.fs="fontSize - 2"
                 v-if="data.issuance_time"
            >{{ data.issuance_time }}
            </div>
            <div data-minimum class="data-minimum text_eee"
                 v-style.mb="padding - 8"
                 v-style.fs="fontSize - 2"
                 v-if="data.certificate_number"
            >证书编码：{{ data.certificate_number }}
            </div>
            <div data-minimum class="data-minimum text_eee"
                 v-style.mb="padding - 8"
                 v-style.fs="fontSize - 2"
                 v-if="data.issuance_unit"
            >发证机关：{{ data.issuance_unit }}
            </div>
          </template>
          <div data-minimum class="data-minimum" :style="{height: padding + 18 + 'px'}"
               v-if="m011.certificate.length > 0"></div>

          </div>
        `
    })

    // 模板数据样式
    let cvtStyleRight = Vue.extend({
        name: 'cvtStyleRight',
        mixins: [resumeMixin],
        // language=Vue
        template: `
          <div class="${className} cvt_swap3">
          <template v-for="key in cvData.modules">
            <template v-if="key === 'm002'">
              <div data-minimum class="data-minimum text_000_bold_p"
                   v-style.mb="padding - 10"
                   v-style.fs="fontSize"
                   v-if="m002.eduExp.length > 0"
              >院校教育
              </div>
              <template v-for="(data, index) in m002.eduExp">
                <div data-minimum class="data-minimum swap_flex_js row_box_100"
                     v-style.pb="padding - 10"
                >
                  <div class="text_000_bold"
                       v-style.fs="fontSize - 2"
                  >{{ data.unit_name }}
                  </div>
                  <div class="text_000_bold"
                       v-style.fs="fontSize - 2"
                       v-if="data.begin_date"
                  >{{ data.begin_date.start }}-{{ data.begin_date.end }}
                  </div>
                </div>
                <div data-minimum class="data-minimum swap_flex_fw row_box_100"
                     v-style.pb="padding - 10"
                     v-if="data.college_name || data.major_name || data.degree_code || data.is_unified || data.education_form"
                >
                  <div class="text_000 item_after_2"
                       v-if="data.college_name"
                       v-style.fs="fontSize - 2"
                  >{{ data.college_name }}
                  </div>
                  <div class="text_000 item_after_2"
                       v-if="data.major_name"
                       v-style.fs="fontSize - 2"
                  >{{ data.major_name }}
                  </div>
                  <div class="text_000 item_after_2"
                         v-if="data.education_code"
                         v-style.fs="fontSize - 2"
                    >{{ data.education_code }}
                    </div>
                  <div class="text_000 item_after_2"
                       v-if="data.degree_code"
                       v-style.fs="fontSize - 2"
                  >{{ data.degree_code }}
                  </div>
                  <div class="text_000 item_after_2"
                       v-if="data.is_unified"
                       v-style.fs="fontSize - 2"
                  >{{ data.is_unified }}
                  </div>
                  <div class="text_000 item_after_2"
                       v-if="data.education_form"
                       v-style.fs="fontSize - 2"
                  >{{ data.education_form }}教育
                  </div>
                </div>
                <div data-minimum class="data-minimum text_eee row_box_100"
                     v-style.pb="padding - 10"
                     v-style.fs="fontSize - 2"
                     v-if="data.education_referee"
                >证明人：{{ data.education_referee }}
                </div>
                <div data-minimum class="data-minimum text_eee item_before_eee row_box_100"
                     v-style.pb="padding - 10"
                     v-style.fs="fontSize - 2"
                     v-if="data.education_evaluation"
                >
                  <div>{{ data.education_evaluation }}</div>
                </div>
                <div data-minimum class="data-minimum text_eee item_before_eee row_box_100"
                     v-style.pb="padding - 10"
                     v-style.fs="fontSize - 2"
                     v-if="data.education_course && data.education_course.length > 0"
                >
                  <div>
                    主修课程：<template v-for="(course, idx) in data.education_course">{{ course.value }}<template v-if="course.grade">（{{ course.grade }}）</template>
                      <template v-if="idx !== data.education_course.length - 1">、</template>
                    </template>
                  </div>
                </div>
                <div data-minimum class="data-minimum text_eee item_before_eee row_box_100"
                     v-style.pb="padding - 10"
                     v-style.fs="fontSize - 2"
                     v-if="data.education_note"
                >
                  <div>
                    <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.education_note)"
                        class-name="text_eee"
                        :html="html"
                        :padding="padding - 10"
                        :font-size="fontSize - 2"
                    ></cvtEditor>
                  </div>
                </div>
                <div data-minimum class="data-minimum text_eee item_before_eee row_box_100"
                     v-style.pb="padding - 10"
                     v-style.fs="fontSize - 2"
                     v-if="data.project_introduction"
                >
                  <div>
                    <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.project_introduction)"
                        class-name="text_eee"
                        :html="html"
                        :padding="padding - 10"
                        :font-size="fontSize - 2"
                    ></cvtEditor>
                  </div>
                </div>
                <div data-minimum class="data-minimum text_eee item_before_eee row_box_100"
                     v-style.pb="padding - 10"
                     v-style.fs="fontSize - 2"
                     v-if="data.graduate_advisor"
                >
                  <div>导师姓名：{{ data.graduate_advisor }}</div>
                </div>
                <div data-minimum class="data-minimum text_eee item_before_eee row_box_100"
                     v-style.pb="padding - 10"
                     v-style.fs="fontSize - 2"
                     v-if="data.advisor_evaluation"
                >
                  <div>
                    <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.advisor_evaluation)" label="导师评价："
                        class-name="text_eee"
                        :html="html"
                        :padding="padding - 10"
                        :font-size="fontSize - 2"
                    ></cvtEditor>
                  </div>
                </div>
              </template>
              <div data-minimum class="data-minimum" :style="{height: padding + 'px'}"
                   v-if="m002.eduExp.length > 0"></div>
            </template>
            <template v-if="key === 'm003'">
              <div data-minimum class="data-minimum text_000_bold_p"
                   v-style.mb="padding - 10"
                   v-style.fs="fontSize"
                   v-if="m003.conEdu.length > 0"
              >继续教育
              </div>
              <template v-for="(data, index) in m003.conEdu">
                <div data-minimum class="data-minimum swap_flex_js row_box_100"
                     v-style.pb="padding - 10"
                >
                  <div class="text_000_bold"
                       v-style.fs="fontSize - 2"
                  >{{ data.unit_name }}
                  </div>
                  <div class="text_000_bold"
                       v-style.fs="fontSize - 2"
                       v-if="data.begin_date"
                  >{{ data.begin_date.start }}-{{ data.begin_date.end }}
                  </div>
                </div>
                <div data-minimum class="data-minimum swap_flex_fw row_box_100" 
                     v-style.mb="padding - 10"
                     v-if="data.education_type || data.education_form || data.class_hours || data.course_field"
                >
                    <div class="text_000 item_after_2"
                         v-if="data.course_field"
                         v-style.fs="fontSize - 2"
                    >课程方向：{{ data.course_field }}
                    </div>
                    <div class="text_000 item_after_2"
                         v-if="data.education_type"
                         v-style.fs="fontSize - 2"
                    >教育类型：{{ data.education_type }}
                    </div>
                    <div class="text_000 item_after_2"
                         v-if="data.education_form"
                         v-style.fs="fontSize - 2"
                    >教育形式：{{ data.education_form }}
                    </div>
                    <div class="text_000 item_after_2"
                         v-if="data.class_hours"
                         v-style.fs="fontSize - 2"
                    >学习时长{{ data.class_hours }}
                    </div>
                    
                </div>
                <div data-minimum class="data-minimum text_eee item_before_eee row_box_100"
                     v-style.pb="padding - 10"
                     v-style.fs="fontSize - 2"
                     v-if="data.education_evaluation"
                >
                  <div>{{ data.education_evaluation }}</div>
                </div>
                <div data-minimum class="data-minimum text_eee item_before_eee row_box_100"
                     v-style.pb="padding - 10"
                     v-style.fs="fontSize - 2"
                     v-if="data.course_content"
                >
                  <div>
                    <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.course_content)"
                        class-name="text_eee"
                        :html="html"
                        :padding="padding - 10"
                        :font-size="fontSize - 2"
                    ></cvtEditor>
                  </div>
                </div>
                <div data-minimum class="data-minimum text_eee item_before_eee row_box_100"
                     v-style.pb="padding - 10"
                     v-style.fs="fontSize - 2"
                     v-if="data.course_content"
                >
                  <div>
                    <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.course_content)"
                        class-name="text_eee"
                        :html="html"
                        :padding="padding - 10"
                        :font-size="fontSize - 2"
                    ></cvtEditor>
                  </div>
                </div>
              </template>
              <div data-minimum class="data-minimum" :style="{height: padding + 'px'}"
                   v-if="m003.conEdu.length > 0"></div>
            </template>
            <template v-if="key === 'm004'">
              <div data-minimum class="data-minimum  text_000_bold_p"
                   v-style.mb="padding - 10"
                   v-style.fs="fontSize"
                   v-if="m004.workExp.length > 0"
              >工作经历
              </div>
              <template v-for="(data, index) in m004.workExp">
                <div data-minimum class="data-minimum swap_flex_js row_box_100"
                     v-style.pb="padding - 10"
                >
                  <div class="text_000_bold"
                       v-style.fs="fontSize - 2"
                  >{{ data.unit_name }}
                  </div>
                  <div class="text_000_bold"
                       v-style.fs="fontSize - 2"
                       v-if="data.begin_date"
                  >{{ data.begin_date.start }}-{{ data.begin_date.end }}
                  </div>
                </div>
                <div data-minimum class="data-minimum text_000 row_box_100"
                     v-style.pb="padding - 10"
                     v-style.fs="fontSize - 2"
                     v-if="data.work_position"
                >{{ data.work_position }}
                </div>
                <div data-minimum class="data-minimum text_eee row_box_100"
                     v-style.pb="padding - 10"
                     v-style.fs="fontSize - 2"
                     v-if="data.work_referee"
                >证明人：{{ data.work_referee }}
                </div>

                <div data-minimum class="data-minimum text_eee item_before_eee row_box_100"
                     v-style.pb="padding - 10"
                     v-style.fs="fontSize - 2"
                     v-if="data.job_duty"
                >
                  <div>
                    <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.job_duty)"
                        class-name="text_eee"
                        :html="html"
                        :padding="padding - 10"
                        :font-size="fontSize - 2"
                    ></cvtEditor>
                  </div>
                </div>
                <div data-minimum class="data-minimum text_eee item_before_eee row_box_100"
                     v-style.pb="padding - 10"
                     v-style.fs="fontSize - 2"
                     v-if="data.job_content"
                >
                  <div>
                    <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.job_content)"
                        class-name="text_eee"
                        :html="html"
                        :padding="padding - 10"
                        :font-size="fontSize - 2"
                    ></cvtEditor>
                  </div>
                </div>
                <div data-minimum class="data-minimum text_eee item_before_eee row_box_100"
                     v-style.pb="padding - 10"
                     v-style.fs="fontSize - 2"
                     v-if="data.leaving_reason"
                >
                  <div>
                    <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.leaving_reason)" label="离职原因："
                        class-name="text_eee"
                        :html="html"
                        :padding="padding - 10"
                        :font-size="fontSize - 2"
                    ></cvtEditor>
                  </div>
                </div>
              </template>
              <div data-minimum class="data-minimum" :style="{height: padding + 'px'}"
                   v-if="m004.workExp.length > 0"></div>
            </template>
            <template v-if="key === 'm005'">
              <div data-minimum class="data-minimum text_000_bold_p"
                   v-style.mb="padding - 10"
                   v-style.fs="fontSize"
                   v-if="m005.paperPub.length > 0 || m005.bookPub.length > 0"
              >文献论著
              </div>
              <div data-minimum class="data-minimum text_000_bold row_box_100"
                   v-style.pb="padding - 8"
                   v-style.fs="fontSize - 2"
                   v-if="m005.bookPub.length > 0"
              >发表的文献
              </div>
              <template v-for="(data, index) in m005.paperPub">
                <div data-minimum class="data-minimum text_000 item_before_000 row_box_100"
                     v-style.pb="padding - 8"
                     v-style.fs="fontSize - 2"
                >
                  <div class="swap_flex_js">
                    <div>{{ data.quoted }}</div>
                    <div>{{ data.type }}</div>
                  </div>
                </div>
              </template>
              <div data-minimum class="data-minimum text_000_bold row_box_100"
                   v-style.pb="padding - 8"
                   v-style.fs="fontSize - 2"
                   v-if="m005.bookPub.length > 0"
              >参编论著
              </div>
              <template v-for="(data, index) in m005.bookPub">
                <div data-minimum class="data-minimum text_000 item_before_000 row_box_100"
                     v-style.pb="padding - 8"
                     v-style.fs="fontSize - 2"
                >
                  <div>{{ data.quoted }}</div>
                </div>
              </template>
              <div data-minimum class="data-minimum" :style="{height: padding + 'px'}"
                   v-if="m005.paperPub.length > 0 || m005.bookPub.length > 0"
              ></div>
            </template>
            <template v-if="key === 'm006'">
              <div data-minimum class="data-minimum text_000_bold_p"
                   v-style.mb="padding - 10"
                   v-style.fs="fontSize"
                   v-if="m006.projectPar.length > 0"
              >参与课题
              </div>
              <template v-for="(data, index) in m006.projectPar">
                <div data-minimum class="data-minimum swap_flex_js row_box_100"
                     v-style.pb="padding - 8"
                >
                  <div class="text_000_bold"
                       v-style.fs="fontSize - 2"
                  >{{ data.project_name }}
                  </div>
                  <div class="text_000_bold"
                       v-style.fs="fontSize - 2"
                       v-if="data.begin_date"
                  >{{ data.begin_date.start }}-{{ data.begin_date.end }}
                  </div>
                </div>

                <div data-minimum class="data-minimum swap_flex_fw row_box_100"
                     v-style.pb="padding - 8"
                     v-if="data.project_type || data.project_cycle || data.project_fund "
                >
                  <div class="text_000 item_after_1"
                       v-if="data.project_type"
                       v-style.fs="fontSize - 2"
                  >课题类型：{{ data.project_type }}
                  </div>
                  <div class="text_000 item_after_1"
                       v-if="data.project_cycle"
                       v-style.fs="fontSize - 2"
                  >周期：{{ data.project_cycle }}
                  </div>
                  <div class="text_000 item_after_1"
                       v-if="data.project_fund"
                       v-style.fs="fontSize - 2"
                  >经费：{{ data.project_fund }}
                  </div>
                </div>
                <div data-minimum class="data-minimum text_eee row_box_100"
                     v-style.pb="padding - 8"
                     v-style.fs="fontSize - 2"
                     v-if="data.project_number"
                >批准号：{{ data.project_number }}
                </div>
                <div data-minimum class="data-minimum text_eee row_box_100"
                     v-style.pb="padding - 8"
                     v-style.fs="fontSize - 2"
                     v-if="data.project_number"
                >研究方向：{{ data.project_field }}
                </div>

                <div data-minimum class="data-minimum text_eee row_box_100"
                     v-style.pb="padding - 8"
                     v-style.fs="fontSize - 2"
                     v-if="data.approval_unit"
                >审批单位：{{ data.approval_unit }}
                </div>
                <div data-minimum class="data-minimum text_eee row_box_100"
                     v-style.pb="padding - 8"
                     v-style.fs="fontSize - 2"
                     v-if="data.skill_practice && data.skill_practice.length > 0"
                >技能实践情况：
                  <template v-for="(practice, idx) in data.skill_practice">{{ practice }}
                    <template v-if="idx !== data.skill_practice.length - 1">、</template>
                  </template>
                </div>
                <div data-minimum class="data-minimum text_eee row_box_100"
                     v-style.pb="padding - 8"
                     v-style.fs="fontSize - 2"
                     v-if="data.project_role"
                >课题角色：{{ data.project_role }}
                </div>
                <div data-minimum class="data-minimum text_eee item_before_eee row_box_100"
                     v-style.pb="padding - 8"
                     v-style.fs="fontSize - 2"
                     v-if="data.role_desc"
                >
                  <div>
                    <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.role_desc)" label="课题角色描述："
                        class-name="text_eee"
                        :html="html"
                        :padding="padding - 10"
                        :font-size="fontSize - 2"
                    ></cvtEditor>
                  </div>
                </div>
                <div data-minimum class="data-minimum text_eee item_before_eee row_box_100"
                     v-style.pb="padding - 8"
                     v-style.fs="fontSize - 2"
                     v-if="data.contribution_content"
                >
                  <div>
                    <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.contribution_content)" label="课题贡献："
                        class-name="text_eee"
                        :html="html"
                        :padding="padding - 10"
                        :font-size="fontSize - 2"
                    ></cvtEditor>
                  </div>
                </div>
              </template>
              <div data-minimum class="data-minimum" :style="{height: padding + 'px'}"
                   v-if="m006.projectPar.length > 0"></div>
            </template>
            <template v-if="key === 'm007'">
              <div data-minimum class="data-minimum text_000_bold_p"
                   v-style.mb="padding - 10"
                   v-style.fs="fontSize"
                   v-if="m007.patent.length > 0 || m007.standard.length || m007.copyright.length"
              >知识产权
              </div>
              <div data-minimum class="data-minimum text_000_bold row_box_100"
                   v-style.pb="padding - 8"
                   v-style.fs="fontSize - 2"
                   v-if="m007.patent.length > 0"
              >专利
              </div>
              <template v-for="(data, index) in m007.patent">
                <div data-minimum class="data-minimum text_000 item_before_000 row_box_100"
                     v-style.pb="padding - 8"
                     v-style.fs="fontSize - 2"
                >
                  <div class="swap_flex_js">
                    <div>{{ data.quoted }}</div>
                    <div>{{ data.type }}</div>
                  </div>
                </div>
              </template>
              <div data-minimum class="data-minimum text_000_bold row_box_100"
                   v-style.pb="padding - 8"
                   v-style.fs="fontSize - 2"
                   v-if="m007.standard.length > 0"
              >标准规范
              </div>
              <template v-for="(data, index) in m007.standard">
                <div data-minimum class="data-minimum text_000 item_before_000 row_box_100"
                     v-style.pb="padding - 8"
                     v-style.fs="fontSize - 2"
                >
                  <div>{{ data.quoted }}</div>
                </div>
              </template>
              <div data-minimum class="data-minimum text_000_bold row_box_100"
                   v-style.pb="padding - 8"
                   v-style.fs="fontSize - 2"
                   v-if="m007.copyright.length > 0"
              >著作权
              </div>
              <template v-for="(data, index) in m007.copyright">
                <div data-minimum class="data-minimum text_000 item_before_000 row_box_100"
                     v-style.pb="padding - 8"
                     v-style.fs="fontSize - 2"
                >
                  <div>{{ data.quoted }}</div>
                </div>
              </template>
              <div data-minimum class="data-minimum" :style="{height: padding + 'px'}"
                   v-if="m007.patent.length > 0 || m007.standard.length || m007.copyright.length"
              ></div>

            </template>
            <template v-if="key === 'm008'">
              <div data-minimum class="data-minimum text_000_bold_p"
                   v-style.mb="padding - 10"
                   v-style.fs="fontSize"
                   v-if="m008.awards.length"
              >获评奖项
              </div>
              <template v-for="(data, index) in m008.awards">
                <div data-minimum class="data-minimum swap_flex_js row_box_100"
                     v-style.pb="padding - 8"
                >
                  <div class="text_000_bold"
                       v-style.fs="fontSize - 2"
                  >{{ data.award_name }}
                  </div>
                  <div class="text_000_bold"
                       v-style.fs="fontSize - 2"
                  >{{ data.award_rank }}
                  </div>
                </div>
                <div data-minimum class="data-minimum swap_flex_fw row_box_100"
                     v-style.pb="padding - 8"
                     v-if="data.award_level || data.award_order"
                >
                  <div class="text_000 item_after_1"
                       v-if="data.award_level"
                       v-style.fs="fontSize - 2"
                  >{{ data.award_level }}
                  </div>
                  <div class="text_000 item_after_1"
                       v-if="data.award_order"
                       v-style.fs="fontSize - 2"
                  >{{ data.award_order }}
                  </div>
                </div>
                <div data-minimum class="data-minimum text_eee item_before_eee row_box_100"
                     v-style.pb="padding - 8"
                     v-style.fs="fontSize - 2"
                     v-if="data.award_note"
                >
                  <div>
                    <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.award_note)" label="详细信息："
                        class-name="text_eee"
                        :html="html"
                        :padding="padding - 10"
                        :font-size="fontSize - 2"
                    ></cvtEditor>
                  </div>
                </div>
              </template>
              <div data-minimum class="data-minimum" :style="{height: padding + 'px'}"
                   v-if="m008.awards.length > 0"></div>
            </template>
            <template v-if="key === 'm009'">
              <div data-minimum class="data-minimum text_000_bold_p"
                   v-style.mb="padding - 10"
                   v-style.fs="fontSize"
                   v-if="m009.show"
              >求职意向
              </div>
              <div data-minimum class="data-minimum row_box_100 swap_flex"
                   v-style.pb="padding - 8"
                   v-style.fs="fontSize - 2"
              >
                <div class="text_000_bold" style="margin-right: 30px;"
                     v-if="m009.show && m009.work_position"
                >{{ m009.work_position }}
                </div>
                <div class="text_000" v-if="m009.show && m009.job_type">{{ m009.job_type }}</div>
              </div>
              <div data-minimum class="data-minimum row_box_100 swap_flex text_eee"
                   v-style.pb="padding - 8"
                   v-style.fs="fontSize - 2"
                   v-if="m009.show && m009.salary_info"
              >期望薪资：{{ (m009.salary_info.min === 0 && m009.salary_info.max === 0) ? '面议' : (m009.salary_info.min + '-' + m009.salary_info.max) }}
              </div>
              <div data-minimum class="data-minimum row_box_100 swap_flex text_eee"
                   v-style.pb="padding - 8"
                   v-style.fs="fontSize - 2"
                   v-if="m009.show && m009.arrival_time"
              >到岗时间：{{ m009.arrival_time }}
              </div>
              <div data-minimum class="data-minimum row_box_100 swap_flex text_eee"
                   v-style.pb="padding - 8"
                   v-style.fs="fontSize - 2"
                   v-if="m009.show && m009.user_intention_region"
              >意向地区：{{ m009.user_intention_region.country }}-{{ m009.user_intention_region.province }}-
                {{ m009.user_intention_region.city }}
              </div>
              <div data-minimum class="data-minimum" :style="{height: padding + 'px'}"
                   v-if="m009.show"></div>
            </template>
            <template v-if="key === 'm010'">
              <div data-minimum class="data-minimum text_000_bold_p"
                   v-style.mb="padding - 10"
                   v-style.fs="fontSize"
                   v-if="m010.organ.length"
              >社团组织
              </div>
              <template v-for="(data, index) in m010.organ">
                <div data-minimum class="data-minimum swap_flex_js row_box_100"
                     v-style.pb="padding - 8"
                >
                  <div class="text_000_bold"
                       v-style.fs="fontSize - 2"
                  >{{ data.organization_name }}
                  </div>
                  <div class="text_000_bold"
                       v-style.fs="fontSize - 2"
                       v-if="data.begin_date"
                  >{{ data.begin_date.start }}-{{ data.begin_date.end }}
                  </div>
                </div>

                <div data-minimum class="data-minimum swap_flex_fw row_box_100"
                     v-style.pb="padding - 8"
                     v-if="data.organization_type || data.service_position"
                >
                  <div class="text_000 item_after_1"
                       v-if="data.organization_type"
                       v-style.fs="fontSize - 2"
                  >{{ data.organization_type }}
                  </div>
                  <div class="text_000 item_after_1"
                       v-if="data.service_position"
                       v-style.fs="fontSize - 2"
                  >{{ data.service_position }}
                  </div>
                </div>

                <div data-minimum class="data-minimum text_eee  row_box_100"
                     v-style.pb="padding - 8"
                     v-style.fs="fontSize - 2"
                     v-if="data.duty_performance"
                >
                  <div>
                    <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.duty_performance)"
                        class-name="text_eee"
                        :html="html"
                        :padding="padding - 10"
                        :font-size="fontSize - 2"
                    ></cvtEditor>
                  </div>
                </div>
              </template>
              <div data-minimum class="data-minimum" :style="{height: padding + 'px'}"
                   v-if="m010.organ.length > 0"></div>
            </template>
            <template v-if="key === 'm014'">
              <template v-for="(data, index) in m014.otherModule">
                <div data-minimum class="data-minimum text_000_bold_p"
                     v-style.mb="padding - 10"
                     v-style.fs="fontSize"
                >{{ data.module_name }}
                </div>
                <cvtEditor :index="idx"
                    v-for="(html, idx) in cvtEditor(data.module_content)"
                    class-name="text_eee row_box_100"
                    :html="html"
                    :padding="padding"
                    :font-size="fontSize - 2"
                ></cvtEditor>
                <div data-minimum class="data-minimum" :style="{height: padding + 'px'}"></div>
              </template>
            </template>
          </template>
          </div>`
    })

    // 模板内容容器
    let swap = Vue.extend({
        mixins: [swapMixin],
        props: ['nodes1', 'nodes2', 'nodes3'],
        data() {
            return {
                flag: 0
            }
        },
        watch: {
            nodes1() {
                this.flag++
            },
            nodes2() {
                this.flag++
            },
            nodes3() {
                this.flag++
            },
            flag(val) {
                if (val === 3 && this.isLoad) {
                    this.flag = 0
                    setTimeout(() => {
                        this.cutPage()
                    })
                }
            }
        },
        computed: {
            color() {
                return this.cvData.config.color || '#FFCC50'
            }
        },
        // language=Vue
        template: `
          <div>
          <div ref="swap1" class="${className} cvt_swap cvt_swap1">
            <div ref="swap1Top" class="top"></div>
            <div class="main">
              <div ref="swap1Left" class="left"></div>
              <div ref="swap1Right" class="right"></div>
            </div>
          </div>
          <div ref="swap2" class="${className} cvt_swap cvt_swap2"></div>
          <div ref="swap3" class="${className} cvt_swap cvt_swap3"></div>
          <div ref="swap4" class="${className} cvt_swap cvt_swap4"></div>
          </div>
        `,
        methods: {
            cutPage() {
                if (window.devlops) {
                    return;
                }
                if (this.nodes2.length === 0 && this.nodes3.length === 0) return
                this.nodes1.forEach(node => {
                    node = node.cloneNode(true)
                    this.$refs.swap1Top.appendChild(node)
                })
                let pageDom1 = [],
                    pageDom2 = [],
                    pageDom3 = [],
                    leftF = true,
                    rightF = true,
                    nodes = []


                this.nodes2.forEach((node, index) => {
                    node = node.cloneNode(true)
                    // 在首页中添加节点
                    if (leftF) {
                        this.$refs.swap1Left.appendChild(node)
                        if (this.$refs.swap1.offsetHeight > 1124) {
                            this.$refs.swap1Left.removeChild(node)
                            leftF = false
                            this.$refs.swap2.appendChild(node)
                        }
                    }
                    // 切分左侧区域
                    else {
                        this.$refs.swap2.appendChild(node)
                        if (this.$refs.swap2.offsetHeight > 1124) {
                            this.$refs.swap2.removeChild(node)
                            pageDom1.push(this.$refs.swap2.cloneNode(true))
                            this.$refs.swap2.innerHTML = ''
                            this.$refs.swap2.appendChild(node)
                        }
                    }
                })
                if (this.$refs.swap2.innerHTML !== '') {
                    pageDom1.push(this.$refs.swap2.cloneNode(true))
                    this.$refs.swap2.innerHTML = ''
                }

                this.nodes3.forEach((node, index) => {
                    node = node.cloneNode(true)
                    // 在首页中添加节点
                    if (rightF) {
                        this.$refs.swap1Right.appendChild(node)
                        if (this.$refs.swap1.offsetHeight > 1124) {
                            this.$refs.swap1Right.removeChild(node)
                            rightF = false
                            if (pageDom2.length >= pageDom1.length) {
                                nodes.push(node);
                            } else {
                                this.$refs.swap3.appendChild(node);
                            }
                        }
                    }
                    // 切分右侧区域
                    else {
                        if (pageDom2.length >= pageDom1.length) {
                            nodes.push(node)
                            return
                        }
                        this.$refs.swap3.appendChild(node)
                        if (this.$refs.swap3.offsetHeight > 1124) {
                            this.$refs.swap3.removeChild(node)
                            pageDom2.push(this.$refs.swap3.cloneNode(true))
                            this.$refs.swap3.innerHTML = ''
                            if (pageDom2.length >= pageDom1.length) {
                                nodes.push(node)
                            } else {
                                this.$refs.swap3.appendChild(node)
                            }
                        }
                    }
                })
                if (this.$refs.swap3.innerHTML !== '') {
                    pageDom2.push(this.$refs.swap3.cloneNode(true))
                    this.$refs.swap3.innerHTML = ''
                }

                if (nodes.length > 0) {
                    nodes.forEach(node => {
                        node = node.cloneNode(true)
                        this.$refs.swap4.appendChild(node)
                        if (this.$refs.swap4.offsetHeight > 1124) {
                            this.$refs.swap4.removeChild(node)
                            pageDom3.push(this.$refs.swap4.cloneNode(true))
                            this.$refs.swap4.innerHTML = ''
                            this.$refs.swap4.appendChild(node)
                        }
                    })
                    if (this.$refs.swap4.innerHTML !== '') {
                        pageDom3.push(this.$refs.swap4.cloneNode(true))
                        this.$refs.swap4.innerHTML = ''
                    }
                }

                // 生成每一页简历
                let pdf = []

                let div = document.createElement('div')
                div.classList.add('pdf')
                div.appendChild(this.$refs.swap1.cloneNode(true))
                this.$refs.swap1.innerHTML = ''
                pdf.push(div.cloneNode(true))
                div.innerHTML = ''

                pageDom1.forEach((node, idnex) => {
                    div.appendChild(pageDom1[idnex] || document.createElement('div'))
                    div.appendChild(pageDom2[idnex] || document.createElement('div'))
                    pdf.push(div.cloneNode(true))
                    div.innerHTML = ''
                })
                pageDom3.forEach((node, idnex) => {
                    div.appendChild(pageDom3[idnex])
                    pdf.push(div.cloneNode(true))
                    div.innerHTML = ''
                })

                this.$emit('pdf', pdf)
            }
        }
    })

    global.code = +new Date()
    global.colors = []
    global.padding = 20
    global.fontSize = 16
    global.computed = {
        name: className,
        data() {
            return {
                node1: [],
                node2: [],
                node3: []
            }
        },
        mixins: [cvtMixin],
        components: {
            cvtStyleTop,
            cvtStyleLeft,
            cvtStyleRight,
            swap
        },
        // language=Vue
        template: `
            <div class="cv__swap">
                <!-- 视图 -->
                <div ref="cvViewSwap" class="__cv__view__swap" :class="cvType" :style="viewSwapStyle"></div>
                <!-- 模板视图 -->
                <div class="__cv__template__swap">
                    <cvt-style-top @minimum-node="node1 = $event" ref="cvtStyle1" :cv-data="cvData"></cvt-style-top>
                    <cvt-style-left @minimum-node="node2 = $event" ref="cvtStyle2" :cv-data="cvData"></cvt-style-left>
                    <cvt-style-right @minimum-node="node3 = $event" ref="cvtStyle3" :cv-data="cvData"></cvt-style-right>
                    <swap ref="swap" @pdf="pages = $event" :nodes1="node1" :nodes2="node2" :nodes3="node3"
                          :cv-data="cvData"></swap>
                </div>
            </div>
        `
    }
})(resumeTemplate)