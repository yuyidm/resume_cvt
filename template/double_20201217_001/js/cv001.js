(function () {
    let cvt = '4C9D4CDAC64446FBB89F68395B6C5B5D',
        version = 'v0f63a8402d954ac296318a3b3f28ab39'

    // 模板数据样式
    let cvtStyleLeft = Vue.extend({
        name: 'cvtStyleLeft',
        mixins: [resumeMixin],
        // language=Vue
        template: `<div class="${cvt} cvt_swap1">
  
    <div data-minimum class="data-minimum image"
         v-if="m001.user_photo"
    >
        <img crossorigin="anonymous" :src="m001.user_photo" alt="">
    </div>
    <div data-minimum class="data-minimum swap_flex_ai"
         v-if="m001.first_name && m001.last_name"
         style="margin-bottom: 10px"
    >
        <div class="text_fff_24"
             style="margin-right: 24px"
             v-if="m001.first_name || m001.last_name"
        >{{ m001.last_name }}{{ m001.first_name }}
        </div>
        <div class="user_sex"
             v-if="m001.user_sex"
             :class="{man: m001.user_sex === '男', woman: m001.user_sex === '女'}"
        ></div>
    </div>
    <div data-minimum class="data-minimum"
         v-if="m009 && m009.work_position"
    >
        <div class="line1"></div>
        <div class="text_fff_14">{{ m009.work_position }}</div>
    </div>
    <div data-minimum class="data-minimum"
         style="margin-bottom: 34px;"
    ></div>
    <div data-minimum class="data-minimum row_text_182 text_opacity"
         v-if="m001.english_name"
         v-style.mb="padding - 16"
         v-style.fs="fontSize - 2"
    >英文名
    </div>
    <div data-minimum class="data-minimum row_text_182 text_fff"
         v-if="m001.english_name"
         v-style.mb="padding"
         v-style.fs="fontSize - 2"
    >{{ m001.english_name }}
    </div>
    <div data-minimum class="data-minimum row_text_182 text_opacity"
         v-if="m001.user_birth"
         v-style.mb="padding - 16"
         v-style.fs="fontSize - 2"
    >出生日期
    </div>
    <div data-minimum class="data-minimum row_text_182 text_fff"
         v-if="m001.user_birth"
         v-style.mb="padding"
         v-style.fs="fontSize - 2"
    >{{ m001.user_birth }}
    </div>
    <div data-minimum class="data-minimum row_text_182 text_opacity"
         v-if="m001.last_education"
         v-style.mb="padding - 16"
         v-style.fs="fontSize - 2"
    >最高学历
    </div>
    <div data-minimum class="data-minimum row_text_182 text_fff"
         v-if="m001.last_education"
         v-style.mb="padding"
         v-style.fs="fontSize - 2"
    >{{ m001.last_education }}
    </div>
    <div data-minimum class="data-minimum row_text_182 text_opacity"
         v-if="m001.last_degree"
         v-style.mb="padding - 16"
         v-style.fs="fontSize - 2"
    >最高学位
    </div>
    <div data-minimum class="data-minimum row_text_182 text_fff"
         v-if="m001.last_degree"
         v-style.mb="padding"
         v-style.fs="fontSize - 2"
    >{{ m001.last_degree }}
    </div>
    <div data-minimum class="data-minimum row_text_182 text_opacity"
         v-if="m001.health_condition"
         v-style.mb="padding - 16"
         v-style.fs="fontSize - 2"
    >健康状况
    </div>
    <div data-minimum class="data-minimum row_text_182 text_fff"
         v-if="m001.health_condition"
         v-style.mb="padding"
         v-style.fs="fontSize - 2"
    >{{ m001.health_condition }}
    </div>
    <div data-minimum class="data-minimum row_text_182 text_opacity"
         v-if="m001.marriage_status"
         v-style.mb="padding - 16"
         v-style.fs="fontSize - 2"
    >婚姻状况
    </div>
    <div data-minimum class="data-minimum row_text_182 text_fff"
         v-if="m001.marriage_status"
         v-style.mb="padding"
         v-style.fs="fontSize - 2"
    >{{ m001.marriage_status }}
    </div>
    <div data-minimum class="data-minimum row_text_182 text_opacity"
         v-if="m001.political_code"
         v-style.mb="padding - 16"
         v-style.fs="fontSize - 2"
    >政治面貌
    </div>
    <div data-minimum class="data-minimum row_text_182 text_fff"
         v-if="m001.political_code"
         v-style.mb="padding"
         v-style.fs="fontSize - 2"
    >{{ m001.political_code }}
    </div>
    <div data-minimum class="data-minimum row_text_182 text_opacity"
         v-if="m001.work_status"
         v-style.mb="padding - 16"
         v-style.fs="fontSize - 2"
    >当前状态
    </div>
    <div data-minimum class="data-minimum row_text_182 text_fff"
         v-if="m001.work_status"
         v-style.mb="padding"
         v-style.fs="fontSize - 2"
    >{{ m001.work_status }}
    </div>
    <div data-minimum class="data-minimum row_text_182 text_opacity"
         v-if="m001.professional_title"
         v-style.mb="padding - 16"
         v-style.fs="fontSize - 2"
    >职称
    </div>
    <div data-minimum class="data-minimum row_text_182 text_fff"
         v-if="m001.professional_title"
         v-style.mb="padding"
         v-style.fs="fontSize - 2"
    >
        <template v-for="(t, i) in m001.professional_title">
            {{ t }}
            <template v-if="i !== m001.professional_title.length -1">、</template>
        </template>
    </div>
    <div data-minimum class="data-minimum row_text_182 text_opacity"
         v-if="m001.user_interests"
         v-style.mb="padding - 16"
         v-style.fs="fontSize - 2"
    >兴趣爱好
    </div>
    <div data-minimum class="data-minimum row_text_182 text_fff"
         v-if="m001.user_interests"
         v-style.mb="padding"
         v-style.fs="fontSize - 2"
    >{{ m001.user_interests }}
    </div>
    <div data-minimum class="data-minimum row_text_182 text_opacity"
         v-if="m001.user_native_region"
         v-style.mb="padding - 16"
         v-style.fs="fontSize - 2"
    >籍贯
    </div>
    <div data-minimum class="data-minimum row_text_182 text_fff"
         v-if="m001.user_native_region"
         v-style.mb="padding"
         v-style.fs="fontSize - 2"
    >{{ m001.user_native_region.country }}-{{ m001.user_native_region.province }}-{{
        m001.user_native_region.city }}
    </div>

    <div data-minimum class="data-minimum row_text_182 text_opacity"
         v-if="m001.user_birth_region"
         v-style.mb="padding - 16"
         v-style.fs="fontSize - 2"
    >出生地
    </div>
    <div data-minimum class="data-minimum row_text_182 text_fff"
         v-if="m001.user_birth_region"
         v-style.mb="padding"
         v-style.fs="fontSize - 2"
    >{{ m001.user_birth_region.country }}-{{ m001.user_birth_region.province }}-{{
        m001.user_birth_region.city }}
    </div>
    <div data-minimum class="data-minimum row_text_182 text_opacity"
         v-if="m001.user_current_region"
         v-style.mb="padding - 16"
         v-style.fs="fontSize - 2"
    >现居住地
    </div>
    <div data-minimum class="data-minimum row_text_182 text_fff"
         v-if="m001.user_current_region"
         v-style.mb="padding"
         v-style.fs="fontSize - 2"
    >{{ m001.user_current_region.country }}-{{ m001.user_current_region.province }}-{{
        m001.user_current_region.city }}
    </div>
    <div data-minimum class="data-minimum row_text_182 text_opacity"
         v-if="m001.current_address"
         v-style.mb="padding - 16"
         v-style.fs="fontSize - 2"
    >具体居住地址
    </div>
    <div data-minimum class="data-minimum row_text_182 text_fff"
         v-if="m001.current_address"
         v-style.mb="padding"
         v-style.fs="fontSize - 2"
    >{{ m001.current_address }}
    </div>
    <div data-minimum class="data-minimum"
         v-style.mb="padding + 40"
    ></div>
    <div data-minimum class="data-minimum row_box_170"
         v-if="m012 && m012.skills"
         v-for="(skill, index) in m012.skills"
    >
        <div class="text_opacity"
             v-style.mb="padding - 10"
             v-style.fs="fontSize - 2"
        >{{ skill.skill_name }}
        </div>

        <div class="skill"
             v-style.mb="padding - 8"
        >
            <div class="skill_length"
                 :style="{width: (skill.skill_level / skill.skill_length) * 100 + '%'}"></div>
        </div>
    </div>
    <div data-minimum class="data-minimum"
         v-style.mb="padding + 46"
    ></div>
    <div data-minimum class="data-minimum row_box_200 swap_flex_ai"
         v-style.mb="padding - 9"
         v-if="m001.user_phone"
    >
        <div class="icon_phone"></div>
        <div class="text_fff" v-style.fs="fontSize - 2">{{ m001.user_phone }}</div>
    </div>
    <div data-minimum class="data-minimum row_box_200 swap_flex_ai"
         v-style.mb="padding - 9"
         v-if="m001.user_wechat"
    >
        <div class="icon_wx"></div>
        <div class="text_fff" v-style.fs="fontSize - 2">{{ m001.user_wechat }}</div>
    </div>
    <div data-minimum class="data-minimum row_box_200 swap_flex_ai"
         v-style.mb="padding - 9"
         v-if="m001.user_qq"
    >
        <div class="icon_qq"></div>
        <div class="text_fff" v-style.fs="fontSize - 2">{{ m001.user_qq }}</div>
    </div>
    <div data-minimum class="data-minimum row_box_200 swap_flex_ai"
         v-style.mb="padding - 9"
         v-if="m001.user_email"
    >
        <div class="icon_email"></div>
        <div class="text_fff" v-style.fs="fontSize - 2">{{ m001.user_email }}</div>
    </div>
</div>
        `
    })
    let cvtStyleRight = Vue.extend({
        name: 'cvtStyleRight',
        mixins: [resumeMixin],
        // language=Vue
        template: `<div class="${cvt} cvt_swap2">
    <div></div>
    <template v-for="key in cvData.modules">
        <template v-if="key === 'm002'">
            <div data-minimum class="data-minimum text_000_bold text_decoration"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m002.eduExp.length > 0"
            >院校教育
            </div>
            <template v-for="(data, index) in m002.eduExp">
                <div data-minimum class="data-minimum swap_flex_js row_box_100"
                     v-style.mb="padding - 4"
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
                     v-style.mb="padding - 4"
                     v-if="data.college_name || data.major_name || data.education_code || data.degree_code || data.is_unified || data.education_form"
                >
                    <div class="text_000 item_after_1"
                         v-if="data.college_name"
                         v-style.fs="fontSize - 2"
                    >{{ data.college_name }}
                    </div>
                    <div class="text_000 item_after_1"
                         v-if="data.major_name"
                         v-style.fs="fontSize - 2"
                    >{{ data.major_name }}
                    </div>
                    <div class="text_000 item_after_1"
                         v-if="data.education_code"
                         v-style.fs="fontSize - 2"
                    >{{ data.education_code }}
                    </div>
                    <div class="text_000 item_after_1"
                         v-if="data.degree_code"
                         v-style.fs="fontSize - 2"
                    >{{ data.degree_code }}
                    </div>
                    <div class="text_000 item_after_1"
                         v-if="data.is_unified"
                         v-style.fs="fontSize - 2"
                    >{{ data.is_unified }}
                    </div>
                    <div class="text_000 item_after_1"
                         v-if="data.education_form"
                         v-style.fs="fontSize - 2"
                    >{{ data.education_form }}教育
                    </div>
                </div>
                <div data-minimum class="data-minimum text_eee row_box_100"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.education_referee"
                >证明人：{{ data.education_referee }}
                </div>
                <div data-minimum class="data-minimum text_eee item_before_eee row_box_100"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.education_evaluation"
                >
                    <div>{{ data.education_evaluation }}</div>
                </div>
                <div data-minimum class="data-minimum text_eee item_before_eee row_box_100"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.education_course"
                >
                    <div>
                        主修课程：<template v-for="(course, idx) in data.education_course">{{ course.value }}
                            <template v-if="course.grade">（{{ course.grade }}）</template>
                            <template v-if="idx !== data.education_course.length - 1">、</template>
                        </template>
                    </div>
                </div>
                <div data-minimum class="data-minimum text_eee item_before_eee row_box_100"
                     v-style.mb="padding - 14"
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
                     v-style.mb="padding - 14"
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
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.graduate_advisor"
                >
                    <div>导师姓名：{{ data.graduate_advisor }}</div>
                </div>
                <div data-minimum class="data-minimum text_eee item_before_eee row_box_100"
                     v-style.mb="padding - 14"
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
            <div data-minimum class="data-minimum" :style="{height: padding + 14 + 'px'}"
                 v-if="m002.eduExp.length > 0"></div>
        </template>
        <template v-if="key === 'm003'">
            <div data-minimum class="data-minimum text_000_bold text_decoration"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m003.conEdu.length > 0"
            >继续教育
            </div>
            <template v-for="(data, index) in m003.conEdu">
                <div data-minimum class="data-minimum swap_flex_js row_box_100"
                     v-style.mb="padding - 4"
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
                     v-style.mb="padding - 4"
                     v-if="data.education_type || data.education_form || data.class_hours || data.course_field"
                >
                    <div class="text_000 item_after_1"
                         v-if="data.course_field"
                         v-style.fs="fontSize - 2"
                    >课程方向：{{ data.course_field }}
                    </div>
                    <div class="text_000 item_after_1"
                         v-if="data.education_type"
                         v-style.fs="fontSize - 2"
                    >教育类型：{{ data.education_type }}
                    </div>
                    <div class="text_000 item_after_1"
                         v-if="data.education_form"
                         v-style.fs="fontSize - 2"
                    >教育形式：{{ data.education_form }}
                    </div>
                    <div class="text_000 item_after_1"
                         v-if="data.class_hours"
                         v-style.fs="fontSize - 2"
                    >学习时长{{ data.class_hours }}
                    </div>

                </div>
                <div data-minimum class="data-minimum text_eee item_before_eee row_box_100"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.education_evaluation"
                >
                    <div>{{ data.education_evaluation }}</div>
                </div>
                <div data-minimum class="data-minimum text_eee item_before_eee row_box_100"
                     v-style.mb="padding - 14"
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
                     v-style.mb="padding - 14"
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
            </template>
            <div data-minimum class="data-minimum" :style="{height: padding + 14 + 'px'}"
                 v-if="m003.conEdu.length > 0"></div>
        </template>
        <template v-if="key === 'm004'">
            <div data-minimum class="data-minimum text_000_bold text_decoration"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m004.workExp.length > 0"
            >工作经历
            </div>
            <template v-for="(data, index) in m004.workExp">
                <div data-minimum class="data-minimum swap_flex_js row_box_100"
                     v-style.mb="padding - 4"
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
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.work_position"
                >{{ data.work_position }}
                </div>
                <div data-minimum class="data-minimum text_eee row_box_100"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.work_referee"
                >证明人：{{ data.work_referee }}
                </div>

                <div data-minimum class="data-minimum text_eee item_before_eee row_box_100"
                     v-style.mb="padding - 14"
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
                     v-style.mb="padding - 14"
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
                     v-style.mb="padding - 14"
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
            <div data-minimum class="data-minimum" :style="{height: padding + 14 + 'px'}"
                 v-if="m004.workExp.length > 0"></div>
        </template>
        <template v-if="key === 'm005'">
            <div data-minimum class="data-minimum text_000_bold text_decoration"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m005.paperPub.length > 0 || m005.bookPub.length > 0"
            >文献论著
            </div>
            <div data-minimum class="data-minimum text_000_bold row_box_100"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m005.bookPub.length > 0"
            >发表的文献
            </div>
            <template v-for="(data, index) in m005.paperPub">
                <div data-minimum class="data-minimum text_eee item_before_000 row_box_100"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                >
                    <div class="swap_flex_js">
                        <div>{{ data.quoted }}</div>
                        <div>{{ data.type }}</div>
                    </div>
                </div>
            </template>
            <div data-minimum class="data-minimum text_000_bold row_box_100"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m005.bookPub.length > 0"
            >参编论著
            </div>
            <template v-for="(data, index) in m005.bookPub">
                <div data-minimum class="data-minimum text_eee item_before_000 row_box_100"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                >
                    <div>{{ data.quoted }}</div>
                </div>
            </template>
            <div data-minimum class="data-minimum" :style="{height: padding + 14 + 'px'}"
                 v-if="m005.paperPub.length > 0 || m005.bookPub.length > 0"></div>
        </template>
        <template v-if="key === 'm006'">
            <div data-minimum class="data-minimum text_000_bold text_decoration"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m006.projectPar.length > 0"
            >参与课题
            </div>
            <template v-for="(data, index) in m006.projectPar">
                <div data-minimum class="data-minimum swap_flex_js row_box_100"
                     v-style.mb="padding - 4"
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
                     v-style.mb="padding - 4"
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
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.project_number"
                >批准号：{{ data.project_number }}
                </div>
                <div data-minimum class="data-minimum text_eee row_box_100"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.project_field"
                >研究方向：{{ data.project_field }}
                </div>

                <div data-minimum class="data-minimum text_eee row_box_100"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.approval_unit"
                >审批单位：{{ data.approval_unit }}
                </div>
                <div data-minimum class="data-minimum text_eee row_box_100"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.skill_practice && data.skill_practice.length > 0"
                >技能实践情况：
                    <template v-for="(practice, idx) in data.skill_practice">{{ practice }}
                        <template v-if="idx !== data.skill_practice.length - 1">、</template>
                    </template>
                </div>
                <div data-minimum class="data-minimum text_eee row_box_100"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.project_role"
                >课题角色：{{ data.project_role }}
                </div>
                <div data-minimum class="data-minimum text_eee item_before_eee row_box_100"
                     v-style.mb="padding - 14"
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
                     v-style.mb="padding - 14"
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
            <div data-minimum class="data-minimum" :style="{height: padding + 14 + 'px'}"
                 v-if="m006.projectPar.length > 0"></div>
        </template>
        <template v-if="key === 'm007'">
            <div data-minimum class="data-minimum text_000_bold text_decoration"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m007.patent.length > 0 || m007.standard.length || m007.copyright.length"
            >知识产权
            </div>
            <div data-minimum class="data-minimum text_000_bold row_box_100"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m007.patent.length > 0"
            >专利
            </div>
            <template v-for="(data, index) in m007.patent">
                <div data-minimum class="data-minimum text_eee item_before_000 row_box_100"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                >
                    <div class="swap_flex_js">
                        <div>{{ data.quoted }}</div>
                        <div>{{ data.type }}</div>
                    </div>
                </div>
            </template>
            <div data-minimum class="data-minimum text_000_bold row_box_100"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m007.standard.length > 0"
            >标准规范
            </div>
            <template v-for="(data, index) in m007.standard">
                <div data-minimum class="data-minimum text_eee item_before_000 row_box_100"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                >
                    <div>{{ data.quoted }}</div>
                </div>
            </template>
            <div data-minimum class="data-minimum text_000_bold row_box_100"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m007.copyright.length > 0"
            >著作权
            </div>
            <template v-for="(data, index) in m007.copyright">
                <div data-minimum class="data-minimum text_eee item_before_000 row_box_100"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                >
                    <div>{{ data.quoted }}</div>
                </div>
            </template>
            <div data-minimum class="data-minimum" :style="{height: padding + 14 + 'px'}"
                 v-if="m007.patent.length > 0 || m007.standard.length || m007.copyright.length"></div>
        </template>
        <template v-if="key === 'm008'">
            <div data-minimum class="data-minimum text_000_bold text_decoration"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m008.awards.length"
            >获评奖项
            </div>
            <template v-for="(data, index) in m008.awards">
                <div data-minimum class="data-minimum swap_flex_js row_box_100"
                     v-style.mb="padding - 4"
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
                     v-style.mb="padding - 4"
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
                     v-style.mb="padding - 14"
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
            <div data-minimum class="data-minimum" :style="{height: padding + 14 + 'px'}"
                 v-if="m008.awards.length > 0"></div>
        </template>
        <template v-if="key === 'm009'">
            <div data-minimum class="data-minimum text_000_bold text_decoration"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m009.show"
            >求职意向
            </div>
            <div data-minimum class="data-minimum swap_flex row_box_100"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
            >
                <div class="text_000_bold" style="margin-right: 30px;"
                     v-if="m009.show && m009.work_position"
                >{{ m009.work_position }}
                </div>
                <div class="text_000" v-if="m009.show && m009.job_type">{{ m009.job_type }}</div>
            </div>
            <div data-minimum class="data-minimum swap_flex row_box_100 text_eee"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m009.show && m009.salary_info"
            >
                期望薪资：{{ (m009.salary_info.min === 0 && m009.salary_info.max === 0) ? '面议' : (m009.salary_info.min + '-' + m009.salary_info.max) }}
            </div>
            <div data-minimum class="data-minimum swap_flex row_box_100 text_eee"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m009.show && m009.arrival_time"
            >到岗时间：{{ m009.arrival_time }}
            </div>
            <div data-minimum class="data-minimum swap_flex row_box_100 text_eee"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m009.show && m009.user_intention_region"
            >意向地区：{{ m009.user_intention_region.country }}-{{ m009.user_intention_region.province }}-
                {{ m009.user_intention_region.city }}
            </div>
            <div data-minimum class="data-minimum" :style="{height: padding + 14 + 'px'}"
                 v-if="m009.show"></div>
        </template>
        <template v-if="key === 'm010'">
            <div data-minimum class="data-minimum text_000_bold text_decoration"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m010.organ.length"
            >社团组织
            </div>
            <template v-for="(data, index) in m010.organ">
                <div data-minimum class="data-minimum swap_flex_js row_box_100"
                     v-style.mb="padding - 4"
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
                     v-style.mb="padding - 4"
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
                     v-style.mb="padding - 14"
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
            <div data-minimum class="data-minimum" :style="{height: padding + 14 + 'px'}"
                 v-if="m010.organ.length > 0"></div>
        </template>
        <template v-if="key === 'm011'">
            <div data-minimum class="data-minimum text_000_bold text_decoration"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-if="m011.certificate.length"
            >荣誉证书
            </div>
            <template v-for="(data, index) in m011.certificate">
                <div data-minimum class="data-minimum swap_flex_js row_box_100 item_before_000"
                     v-style.mb="padding - 4"
                >
                    <div class="text_000_bold"
                         v-style.fs="fontSize - 2"
                    >{{ data.certificate_name }}
                    </div>
                    <div class="text_000_bold"
                         v-style.fs="fontSize - 2"
                    >{{ data.issuance_time }}
                    </div>
                </div>
                <div data-minimum class="data-minimum text_000 row_box_100"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.issuance_unit"
                >发证机关：{{ data.issuance_unit }}
                </div>
                <div data-minimum class="data-minimum text_000 row_box_100"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize - 2"
                     v-if="data.certificate_number"
                >证书编码：{{ data.certificate_number }}
                </div>
            </template>
            <div data-minimum class="data-minimum" :style="{height: padding + 14 + 'px'}"
                 v-if="m011.certificate.length > 0"></div>
        </template>
        <template v-if="key === 'm013'">
            <div data-minimum class="data-minimum text_000_bold text_decoration"
                 v-style.mb="padding - 14"
                 v-style.fs="fontSize - 2"
                 v-if="m013.selfEva.length"
            >自我评价
            </div>
            <template v-for="(data, index) in m013.selfEva">
                <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.evaluation_content)"
                        class-name="text_eee row_box_100"
                        :html="html"
                        :padding="padding - 10"
                        :font-size="fontSize - 2"
                ></cvtEditor>
            </template>
            <div data-minimum class="data-minimum" :style="{height: padding + 14 + 'px'}"
                 v-if="m013.selfEva.length > 0"></div>
        </template>
        <template v-if="key === 'm014'">
            <template v-for="(data, index) in m014.otherModule">
                <div data-minimum class="data-minimum text_000_bold text_decoration"
                     v-style.mb="padding - 14"
                     v-style.fs="fontSize - 2"
                >{{ data.module_name }}
                </div>
                <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.module_content)"
                        class-name="text_eee row_box_100"
                        :html="html"
                        :padding="padding - 10"
                        :font-size="fontSize - 2"
                ></cvtEditor>
            </template>
        </template>
    </template>
</div>
        `
    })

    // 模板内容容器
    let swap = Vue.extend({
        mixins: [swapMixin],
        props: ['nodes1', 'nodes2'],
        watch: {
            nodes1() {
                if (this.isLoad) {
                    this.cutPage()
                }
            },
            nodes2() {
                if (this.isLoad) {
                    this.cutPage()
                }
            },
        },
        computed: {
            color() {
                return this.cvData.config.color || '#315e59'
            }
        },
        // language=Vue
        template: `
            <div>
                <div ref="swap1" class="cvt_double_20201217 cvt_swap cvt_swap1" v-style.bgc="color"></div>
                <div ref="swap2" class="cvt_double_20201217 cvt_swap cvt_swap2"></div>
                <div ref="swap3" class="cvt_double_20201217 cvt_swap cvt_swap3"></div>
            </div>
        `,

        methods: {
            cutPage() {
                if (this.nodes1.length === 0 || this.nodes2.length === 0) return
                // 左侧区域
                let pages1 = [],
                    page1 = [],
                    pageDom1 = []
                this.nodes1.forEach(node => {
                    node = node.cloneNode(true)
                    this.$refs.swap1.appendChild(node)
                    if (this.$refs.swap1.offsetHeight > 1124) {
                        this.$refs.swap1.removeChild(node)
                        pages1.push(page1)
                        pageDom1.push(this.$refs.swap1.cloneNode(true))
                        this.$refs.swap1.innerHTML = ''
                        page1 = []
                        this.$refs.swap1.appendChild(node)
                    }
                    page1.push(node)
                })
                if (page1.length > 0) {
                    pages1.push(page1)
                    pageDom1.push(this.$refs.swap1.cloneNode(true))
                    this.$refs.swap1.innerHTML = ''
                }
                // 右侧区域
                let pages2 = [],
                    page2 = [],
                    pageDom2 = []
                // 合并部分
                let nodes = [],
                    pages3 = [],
                    page3 = [],
                    pageDom3 = []
                this.nodes2.forEach(node => {
                    if (pages2.length >= pages1.length) {
                        nodes.push(node)
                        return
                    }
                    node = node.cloneNode(true)
                    this.$refs.swap2.appendChild(node)
                    if (this.$refs.swap2.offsetHeight > 1124) {
                        this.$refs.swap2.removeChild(node)
                        pages2.push(page2)
                        pageDom2.push(this.$refs.swap2.cloneNode(true))
                        this.$refs.swap2.innerHTML = ''
                        page2 = []
                        if (pages2.length >= pages1.length) {
                            nodes.push(node)
                            return
                        }
                        this.$refs.swap2.appendChild(node)
                    }
                    page2.push(node)
                })
                if (page2.length > 0) {
                    pages2.push(page2)
                    pageDom2.push(this.$refs.swap2.cloneNode(true))
                    this.$refs.swap2.innerHTML = ''
                }
                if (nodes.length > 0) {
                    nodes.forEach(node => {
                        node = node.cloneNode(true)
                        this.$refs.swap3.appendChild(node)
                        if (this.$refs.swap3.offsetHeight > 1124) {
                            this.$refs.swap3.removeChild(node)
                            pages3.push(page3)
                            pageDom3.push(this.$refs.swap3.cloneNode(true))
                            this.$refs.swap3.innerHTML = ''
                            page3 = []
                            this.$refs.swap3.appendChild(node)
                        }
                        page3.push(node)
                    })
                    if (page3.length > 0) {
                        pages3.push(page3)
                        pageDom3.push(this.$refs.swap3.cloneNode(true))
                        this.$refs.swap3.innerHTML = ''
                    }
                }
                // 生成每一页简历
                let pdf = []
                let div = document.createElement('div')
                div.classList.add('pdf')
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

    let component = {
        name: cvt,
        data() {
            return {
                cvt,
                version,
                node1: [],
                node2: [],
                page1: [],
                page2: [],
                page3: [],
            }
        },
        mixins: [cvtMixin],
        components: {
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
                    <cvt-style-left @minimum-node="node1 = $event" ref="cvtStyle1" :cv-data="cvData"></cvt-style-left>
                    <cvt-style-right @minimum-node="node2 = $event" ref="cvtStyle2" :cv-data="cvData"></cvt-style-right>
                    <swap ref="swap" @pdf="pages = $event" :nodes1="node1" :nodes2="node2" :cv-data="cvData"></swap>
                </div>

            </div>
        `
    }


    RESUMES[cvt] = {
        // 编号
        cvt,
        // 版本
        version,
        // 配色
        colors: ['#315e59', '#a5a5a5', '#444d5c', '#09a2b4', '#f69d63'],
        // 间距基准值
        padding: 20,
        // 字体大小基准值
        fontSize: 16,
        // 组件
        component
    }

})()