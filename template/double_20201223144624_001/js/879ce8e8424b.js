(function (global) {
    let className = 't879ce8e8424b'
    // 模板数据样式
    let cvtStyleLeft = Vue.extend({
        name: 'cvtStyleLeft',
        mixins: [resumeMixin],
        // language=Vue
        //language=HTML
        template: `<div class="${className} cvt_swap1">
    <div data-minimum class="data-minimum" style="width: 100%;" v-style.mb="padding + 22">
        <div class="text_000_14"
             style="margin-bottom: 8px; text-align: right;"
             v-if="m001.english_name"
        >
            {{ m001.english_name }}
        </div>
        
        <div class="text_000_30_bold"
             style="margin-bottom: 8px; text-align: right;"
             v-if="m001.first_name && m001.last_name"
        >
            {{ m001.last_name }}{{ m001.first_name }}
        </div>
        
        <div class="text_000_14" 
             style="margin-bottom: 12px; text-align: right;"
             v-if="m001.first_name_pinyin && m001.last_name_pinyin"
        >
            {{ m001.first_name_pinyin }} {{ m001.last_name_pinyin }}
        </div>
        
        <div style="display: flex; justify-content: flex-end;"
             v-if="m001.user_photo"
        >
            <div style="width: 189px; height: 5px;" :style="{backgroundColor: color}">
            </div>
        </div>
        
        <div style="display: flex; justify-content: flex-end; background-color: #F9F9FA;"
             v-if="m001.user_photo"
        >
            <div style="width: 82px; height: 115px; display: flex; justify-content: center; align-items: center; overflow: hidden;">
                <img style="width: 82px;" crossorigin="anonymous" :src="m001.user_photo" />
            </div>
        </div>
    </div>

    <div data-minimum class="data-minimum row_text_193 text_000_bold"
         v-style.mb="padding"
         v-style.fs="fontSize + 2"
    >
        个人信息
    </div>

    <div data-minimum class="data-minimum row_text_193 text_eee item_before_000"
         v-if="m001.user_birth"
         v-style.mb="padding"
         v-style.fs="fontSize - 2"
    >
        {{ m001.user_birth }}
    </div>

    <div data-minimum class="data-minimum row_text_193 text_eee item_before_000"
         v-if="m001.last_education"
         v-style.mb="padding"
         v-style.fs="fontSize - 2"
    >
        {{ m001.last_education }}
    </div>

    <div data-minimum class="data-minimum row_text_193 text_eee item_before_000"
         v-if="m001.last_degree"
         v-style.mb="padding"
         v-style.fs="fontSize - 2"
    >
        {{ m001.last_degree}}
    </div>
    
    <div data-minimum class="data-minimum row_text_193 text_eee item_before_000"
         v-if="m001.marriage_status"
         v-style.mb="padding"
         v-style.fs="fontSize - 2"
    >
        {{ m001.marriage_status }}
    </div>

    <div data-minimum class="data-minimum row_text_193 text_eee item_before_000"
         v-if="m001.health_condition"
         v-style.mb="padding"
         v-style.fs="fontSize - 2"
    >
        健康情况 {{ m001.health_condition }}
    </div>

    <div data-minimum class="data-minimum row_text_193 text_eee item_before_000"
         v-if="m001.political_code"
         v-style.mb="padding"
         v-style.fs="fontSize - 2"
    >
        政治面貌 {{ m001.political_code }}
    </div>

    <div data-minimum class="data-minimum row_text_193 text_eee item_before_000"
         v-if="m001.work_status"
         v-style.mb="padding"
         v-style.fs="fontSize - 2"
    >
        当前状态 {{ m001.work_status }}
    </div>

    <div data-minimum class="data-minimum row_text_193 text_000 item_before_000"
         v-if="m001.user_birth_region"
         v-style.mb="padding - 10"
         v-style.fs="fontSize - 2"
    >
        出生地
    </div>

    <div data-minimum class="data-minimum row_text_193 text_eee"
         v-if="m001.user_birth_region"
         v-style.mb="padding"
         v-style.fs="fontSize - 2"
    >
        {{ m001.user_birth_region.country }}-{{ m001.user_birth_region.province }}-{{
        m001.user_birth_region.city }}
    </div>

    <div data-minimum class="data-minimum row_text_193 text_000 item_before_000"
         v-if="m001.user_native_region"
         v-style.mb="padding - 10"
         v-style.fs="fontSize - 2"
    >
        籍贯
    </div>

    <div data-minimum class="data-minimum row_text_193 text_eee"
         v-if="m001.user_native_region"
         v-style.mb="padding"
         v-style.fs="fontSize - 2"
    >
        {{ m001.user_native_region.country }}-{{ m001.user_native_region.province }}-{{
        m001.user_native_region.city }}
    </div>

    <div data-minimum class="data-minimum row_text_193 text_000 item_before_000"
         v-if="m001.user_current_region"
         v-style.mb="padding - 10"
         v-style.fs="fontSize - 2"
    >
        现居住地
    </div>

    <div data-minimum class="data-minimum row_text_193 text_eee"
         v-if="m001.user_current_region"
         v-style.mb="padding"
         v-style.fs="fontSize - 2"
    >
        {{ m001.user_current_region.country }}-{{ m001.user_current_region.province }}-{{
        m001.user_current_region.city }}
    </div>

    <div data-minimum class="data-minimum row_text_193 text_000 item_before_000"
         v-if="m001.current_address"
         v-style.mb="padding - 10"
         v-style.fs="fontSize - 2"
    >   
        具体居住地址
    </div>
    <div data-minimum class="data-minimum row_text_193 text_eee"
         v-if="m001.current_address"
         v-style.mb="padding"
         v-style.fs="fontSize - 2"
    >
        {{ m001.current_address }}
    </div>
    
    
    <div data-minimum class="data-minimum row_text_193 text_000 item_before_000"
         v-if="m001.user_interests"
         v-style.mb="padding - 10"
         v-style.fs="fontSize - 2"
    >
        兴趣爱好
    </div>

    <div data-minimum class="data-minimum row_text_193 text_eee"
         v-if="m001.user_interests"
         v-style.pb="padding + 10"
         v-style.mb="padding + 10"
         v-style.fs="fontSize - 2"
         style="border-bottom: 1px solid #E1E1E1;"
    >
        {{ m001.user_interests }}
    </div>

    <div data-minimum class="data-minimum row_text_193 text_000_bold"
         v-style.mb="padding"
         v-style.fs="fontSize + 2"
         v-if="m012 && m012.skills && m012.skills.length"
    >
        技术能力
    </div>

    <template v-if="m012 && m012.skills"
              v-for="(skill, index) in m012.skills"
    >
        <div data-minimum class="data-minimum row_text_193" v-style.mb="padding">

            <div class="text_eee"
                 v-style.fs="fontSize - 2"
                 v-style.mb="padding - 4"
            >
                {{ skill.skill_name }}
            </div>

            <div class="skill" :style="{borderColor: color}">
                <div class="skill_length"
                     :style="{width: (skill.skill_level / skill.skill_length) * 100 + '%', 'background-color': color}">
                </div>
            </div>
        </div>
    </template>
</div>
        `,
        computed: {
            /**
             * m012的技能归类
             */
            classifiedSkills() {
                let newM012 = {};
                this.m012.skills.forEach((item, index) => {
                    if (item.type_name in newM012) {
                    } else {
                        newM012[item.type_name] = [];
                    }
                    newM012[item.type_name].push({
                        skill_level: item.skill_level,
                        skill_name: item.skill_name,
                        skill_length: item.skill_length,
                    });
                });

                let tmpList = [];
                let final = []; //其他技能

                for (let key in newM012) {
                    let value = newM012[key];

                    if (key.indexOf('其他') === -1) {
                        tmpList.push({
                            type_name: key,
                            arr: value,
                        });
                    } else {
                        final.push({
                            type_name: key,
                            arr: value,
                        });
                    }
                }

                return tmpList.concat(final);
            },
        }
    })
    let cvtStyleRight = Vue.extend({
        name: 'cvtStyleRight',
        mixins: [resumeMixin],
        // language=Vue
        //language=HTML
        template: `<div class="${className} cvt_swap2">
    <div></div>
    <div data-minimum class="data-minimum top swap_flex"
         v-style.mb="padding + 6"
    >
        <div>
            <div class="text_eee_bold"
                 v-style.fs="fontSize - 2"
                 v-style.mb="padding"
            >
                CONTACT
            </div>
            <div class="swap_flex" v-if="m001.user_phone">
                <div class="icon">
                    <img src="/static/template/resume/${className}/${version}/img/phone.png" alt="" />
                </div>
                <div class="left_border_000 text_eee" 
                     v-style.fs="fontSize - 2"
                     v-style.pb="padding - 4"
                >
                    {{ m001.user_phone }}
                </div>
            </div>
            <div class="swap_flex" v-if="m001.user_wechat">
                <div class="icon">
                    <img src="/static/template/resume/${className}/${version}/img/wechat.png" alt="" />
                </div>
                <div class="left_border_000 text_eee"
                     v-style.fs="fontSize - 2"
                     v-style.pb="padding - 4"
                >
                    {{ m001.user_wechat }}
                </div>
            </div>
            <div class="swap_flex" v-if="m001.user_qq">
                <div class="icon">
                    <img src="/static/template/resume/${className}/${version}/img/qq.png" alt="" />
                </div>
                <div class="left_border_000 text_eee"
                     v-style.fs="fontSize - 2"
                     v-style.pb="padding - 4"
                >
                    {{ m001.user_qq }}
                </div>
            </div>
            <div class="swap_flex" v-if="m001.user_email">
                <div class="icon">
                    <img src="/static/template/resume/${className}/${version}/img/email.png" alt="" />
                </div>
                <div class="left_border_000 text_eee"
                     v-style.fs="fontSize - 2"
                >
                    {{ m001.user_email }}
                </div>
            </div>

        </div>
        <div style="display: flex; flex-direction: column; align-items: flex-end">
            <div class="image"
                 v-style.mb="padding - 4"
                 :style="{backgroundColor: color}">
                <img src="/static/template/resume/${className}/${version}/img/top_icon.png" alt="" />
            </div>
            <div class="text_eee" 
                 v-style.fs="fontSize - 2"
                 style="margin-bottom: 4px; text-align: right">
                现居住地
            </div>
            <div class="text_eee"
                 v-style.fs="fontSize - 2"
                 style="text-align: right"
                 v-if="m001.user_current_region"
            >
                {{ m001.user_current_region.country }}-
                {{ m001.user_current_region.province }}-{{ m001.user_current_region.city }}
            </div>
        </div>
    </div>

    <div data-minimum class="data-minimum text_000_bold"
         v-style.fs="fontSize + 2"
         v-style.mb="padding"
         v-if="m013.selfEva.length > 0"
    >
        自我评价
    </div>
    <template v-for="(data, index) in m013.selfEva"
    >
        <cvtEditor :index="idx"
                v-for="(html, idx) in cvtEditor(data.evaluation_content)"
                class-name="text_000 left_border_000"
                :html="html"
                :padding="padding"
                :font-size="fontSize - 2"
        ></cvtEditor>
    </template>
    <div data-minimum class="data-minimum" :style="{height: padding + 10 + 'px'}"
         v-if="m013.selfEva.length > 0">
    </div>
    
    <template v-for="key in cvData.modules">
         <template v-if="key === 'm002'">
             <div data-minimum class="data-minimum text_000_bold"
                  v-style.fs="fontSize + 2"
                  v-style.mb="padding"
                  v-if="m002.eduExp.length > 0"
             >
                 院校教育
             </div>

             <template v-for="(data, index) in m002.eduExp">
                 <div data-minimum class="data-minimum text_000_bold swap_flex"
                      v-style.fs="fontSize - 2"
                      v-style.mb="padding - 10"
                 >
                     <div style="margin-right: 10px;"
                          v-if="data.begin_date"
                     >
                         {{ data.begin_date.start }}-{{ data.begin_date.end }}
                     </div>
                     <div class="left_border_000_short"
                          v-if="data.unit_name"
                     >
                         {{ data.unit_name }}
                     </div>
                 </div>

                 <div data-minimum class="data-minimum text_000 swap_flex flex_wrap"
                      v-style.fs="fontSize - 2"
                      v-style.mb="padding - 8"
                      v-if="data.college_name || data.major_name || data.education_code || data.degree_code || data.is_unified || data.education_form" 
                 >
                     <div style="margin-right: 20px;"
                          v-if="data.college_name"
                     >
                         {{ data.college_name }}
                     </div>
                     
                     <div style="margin-right: 20px;"
                          v-if="data.major_name"
                     >
                         {{ data.major_name }}
                     </div>
                     <div style="margin-right: 20px;"
                          v-if="data.education_code"
                     >
                         {{ data.education_code }}
                     </div>
                     <div style="margin-right: 20px;"
                          v-if="data.degree_code"
                     >
                         {{ data.degree_code }}
                     </div>
                     <div style="margin-right: 20px;"
                          v-if="data.is_unified"
                     >
                         {{ data.is_unified }}
                     </div>
                     <div style="margin-right: 20px;"
                          v-if="data.education_form"
                     >
                         {{ data.education_form }}
                     </div>
                 </div>

                 <div data-minimum class="data-minimum text_000"
                      v-style.fs="fontSize - 2"
                      v-style.mb="padding - 8"
                      v-if="data.education_referee"
                 >
                    证明人：{{ data.education_referee }}
                 </div>

                 <div data-minimum class="data-minimum text_eee"
                      v-style.mb="padding"
                      v-style.fs="fontSize - 2"
                      v-if="data.education_evaluation"
                 >
                     {{ data.education_evaluation }}
                 </div>
                 
                 <div data-minimum class="data-minimum"
                      v-style.mb="padding"
                      v-if="data.project_introduction"
                 >
                     <div>
                         <cvtEditor :index="idx"
                                 v-for="(html, idx) in cvtEditor(data.project_introduction)"
                                 class-name="text_eee"
                                 :html="html"
                                 :padding="0"
                                 :font-size="fontSize - 2"
                         ></cvtEditor>
                     </div>
                 </div>

                 <div data-minimum class="data-minimum text_eee " 
                      v-style.fs="fontSize - 2" 
                      v-style.pb="padding"
                      v-if="data.education_course && data.education_course.length"
                 >
                     <div>
                         主修课程：<template v-for="(course, idx) in data.education_course">{{ course.value }}<template v-if="course.grade">（{{ course.grade }}）</template>
                         <template v-if="idx !== data.education_course.length - 1">、</template>
                     </template>
                     </div>
                 </div>

                 <div data-minimum class="data-minimum text_eee"
                      v-style.fs="fontSize - 2"
                      v-style.pb="padding"
                      v-if="data.graduate_advisor"
                 >
                     导师名称：{{ data.graduate_advisor }}
                 </div>

                 <div data-minimum class="data-minimum text_eee" 
                      v-style.fs="fontSize - 2" 
                      v-style.pb="padding"
                      v-if="data.advisor_evaluation" 
                 >
                     <div>
                         <cvtEditor :index="idx"
                                    v-for="(html, idx) in cvtEditor(data.advisor_evaluation)" label="导师评价："
                                    class-name="text_eee"
                                    :html="html"
                                    :padding="0"
                                    :font-size="fontSize - 2"
                         ></cvtEditor>
                     </div>
                 </div>

                 <div data-minimum class="data-minimum text_eee" 
                      v-style.pb="padding"
                      v-if="data.education_note"
                 >
                     <div>
                         <cvtEditor :index="idx"
                                    v-for="(html, idx) in cvtEditor(data.education_note)"
                                    class-name="text_eee"
                                    :html="html"
                                    :padding="0"
                                    :font-size="fontSize - 2"
                         ></cvtEditor>
                     </div>
                 </div>
                 
             </template>

             <div data-minimum class="data-minimum" :style="{height: padding - 10 + 'px'}"
                  v-if="m002.eduExp.length > 0"></div>
         </template>

        <template v-if="key === 'm004'">
            <div data-minimum class="data-minimum text_000_bold"
                 v-style.fs="fontSize + 2"
                 v-style.mb="padding"
                 v-if="m004.workExp.length > 0"
            >
                工作经历
            </div>

            <template v-for="(data, index) in m004.workExp">
                <div data-minimum class="data-minimum text_000_bold swap_flex"
                     v-style.fs="fontSize - 2"
                     v-style.mb="padding - 10"
                >
                    <div style="margin-right: 10px;"
                         v-if="data.begin_date"
                    >
                        {{ data.begin_date.start }}-{{ data.begin_date.end }}
                    </div>
                    <div class="left_border_000_short"
                         v-if="data.unit_name"
                    >
                        {{ data.unit_name }}
                    </div>
                </div>

                <div class="swap_flex flex_wrap text_000" v-style.fs="fontSize - 2"
                     v-if="data.unit_name || data.work_position || data.work_referee ">
                    <div v-if="data.unit_name" :style="{'margin-right': padding + 'px'}">
                        部门：{{ data.unit_name }}
                    </div>
                    <div v-if="data.work_position" :style="{'margin-right': padding + 'px'}">
                        职务：{{ data.work_position }}
                    </div>
                    <div v-if="data.work_referee">
                        证明人：{{ data.work_referee }}
                    </div>
                </div>

                <div data-minimum class="data-minimum"
                     v-style.mb="padding"
                     v-if="data.job_duty"
                >
                    <div>
                        <cvtEditor :index="idx"
                                   v-for="(html, idx) in cvtEditor(data.job_duty)"
                                   class-name="text_eee"
                                   :html="html"
                                   :padding="0"
                                   :font-size="fontSize - 2"
                        ></cvtEditor>
                    </div>
                </div>

                <div data-minimum class="data-minimum"
                     v-style.mb="padding"
                     v-if="data.job_content"
                >
                    <div>
                        <cvtEditor :index="idx"
                                v-for="(html, idx) in cvtEditor(data.job_content)"
                                class-name="text_eee"
                                :html="html"
                                :padding="0"
                                :font-size="fontSize - 2"
                        ></cvtEditor>
                    </div>
                </div>

                <div data-minimum class="data-minimum"
                     v-style.mb="padding"
                     v-if="data.leaving_reason"
                >
                    <div>
                        <cvtEditor :index="idx"
                                   v-for="(html, idx) in cvtEditor(data.leaving_reason)"
                                   class-name="text_eee"
                                   :html="html"
                                   :padding="0"
                                   :font-size="fontSize - 2"
                        ></cvtEditor>
                    </div>
                </div>
            </template>

            <div data-minimum class="data-minimum" :style="{height: padding - 10 + 'px'}"
                 v-if="m004.workExp.length > 0"></div>
        </template>

        <template v-if="key === 'm011'">
            <div data-minimum class="data-minimum text_000_bold"
                 v-style.fs="fontSize + 2"
                 v-style.mb="padding"
                 v-if="m011.certificate.length > 0"
            >
                荣誉证书
            </div>

            <template v-for="(data, index) in m011.certificate">
                <div data-minimum class="data-minimum text_000_bold swap_flex"
                     v-style.fs="fontSize - 2"
                     v-style.mb="padding - 10"
                >
                    <div style="margin-right: 10px;"
                    >
                        {{ data.issuance_time }}
                    </div>
                    <div class="left_border_000_short"
                         v-if="data.certificate_name"
                    >
                        {{ data.certificate_name }}
                    </div>
                </div>

                <div data-minimum class="data-minimum text_eee"
                     v-style.mb="padding - 8"
                     v-style.fs="fontSize - 2"
                     v-if="data.certificate_number"
                >
                    证书编码：{{ data.certificate_number }}
                </div>

                <div data-minimum class="data-minimum text_eee"
                     v-style.mb="padding"
                     v-style.fs="fontSize - 2"
                     v-if="data.issuance_unit"
                >
                    发证机关：{{ data.issuance_unit }}
                </div>
            </template>

            <div data-minimum class="data-minimum" :style="{height: padding - 10 + 'px'}"
                 v-if="m011.certificate.length > 0"></div>
        </template>

        <template v-if="key === 'm003'">
            <div data-minimum class="data-minimum text_000_bold"
                 v-style.fs="fontSize + 2"
                 v-style.mb="padding"
                 v-if="m003.conEdu.length > 0"
            >
                继续教育
            </div>

            <template v-for="(data, index) in m003.conEdu">
                <div data-minimum class="data-minimum text_000_bold swap_flex"
                     v-style.fs="fontSize - 2"
                     v-style.mb="padding - 10"
                >
                    <div style="margin-right: 10px;"
                         v-if="data.begin_date"
                    >
                        {{ data.begin_date.start }}-{{ data.begin_date.end }}
                    </div>
                    <div class="left_border_000_short"
                         v-if="data.unit_name"
                    >
                        {{ data.unit_name }}
                    </div>
                </div>

                <div data-minimum class="data-minimum text_000 swap_flex flex_wrap"
                     v-style.mb="padding - 8"
                     v-style.fs="fontSize - 2"
                     v-if="data.education_type || data.class_hours || data.course_field "
                >
                    <div :style="{'margin-right': padding + 'px'}" v-if="data.education_type">
                        教育类型：{{ data.education_type }}
                    </div>
                    <div :style="{'margin-right': padding + 'px'}" v-if="data.education_form">
                        教育形式：{{ data.education_form }}
                    </div>
                    <div :style="{marginRight: padding + 'px'}" v-if="data.class_hours">
                        学习时长{{ data.class_hours }}
                    </div>
                    <div v-if="data.course_field">
                        课程方向：{{ data.course_field }}
                    </div>
                </div>

                <div data-minimum class="data-minimum text_eee"
                     v-style.fs="fontSize - 2" 
                     v-style.pb="padding"
                     v-if="data.education_evaluation"
                >
                    {{ data.education_evaluation }}
                </div>

                <div data-minimum class="data-minimum text_eee"
                     v-style.fs="fontSize - 2"
                     v-style.pb="padding"
                     v-if="data.course_content"
                >
                    <div>
                        <cvtEditor :index="idx"
                                v-for="(html, idx) in cvtEditor(data.course_content)"
                                class-name="text_eee"
                                :html="html"
                                :padding="0"
                                :font-size="fontSize - 2"
                        ></cvtEditor>
                    </div>
                </div>

                <div data-minimum class="data-minimum text_eee"
                     v-style.fs="fontSize - 2"
                     v-style.pb="padding"
                     v-if="data.education_note"
                >
                    <div>
                        <cvtEditor :index="idx"
                                v-for="(html, idx) in cvtEditor(data.education_note)"
                                class-name="text_eee"
                                :html="html"
                                :padding="0"
                                :font-size="fontSize - 2"
                        ></cvtEditor>
                    </div>
                </div>
                
            </template>

            <div data-minimum class="data-minimum" :style="{height: padding - 10 + 'px'}"
                 v-if="m003.conEdu.length > 0"></div>
        </template>

        <template v-if="key === 'm005'">
            <div data-minimum class="data-minimum text_000_bold"
                 v-style.fs="fontSize + 2"
                 v-style.mb="padding"
                 v-if="m005.paperPub.length > 0 || m005.bookPub.length > 0"
            >
                学术成果 - 文献论著
            </div>

            <div data-minimum class="data-minimum text_000_bold"
                 v-style.fs="fontSize - 2"
                 v-style.mb="padding - 4"
                 v-if="m005.paperPub.length > 0"
            >
                发表的文献
            </div>

            <div data-minimum class="data-minimum"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-for="(data, index) in m005.paperPub"
            >
                <div class="text_eee"
                     v-style.mb="padding - 10"
                     v-if="data.type">
                    {{ data.type }}
                </div>
                <div class="text_000" 
                     v-if="data.quoted">
                    {{ data.quoted }}
                </div>
            </div>

            <div data-minimum class="data-minimum" :style="{height: padding - 10 + 'px'}"
                 v-if="m005.paperPub.length > 0"></div>

            <div data-minimum class="data-minimum text_000_bold"
                 v-style.fs="fontSize - 2"
                 v-style.mb="padding - 4"
                 v-if="m005.bookPub.length > 0"
            >
                参与论著
            </div>

            <div data-minimum class="data-minimum"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-for="(data, index) in m005.bookPub"
            >
                <div class="text_000"
                     v-if="data.quoted">
                    {{ data.quoted }}
                </div>
            </div>

            <div data-minimum class="data-minimum" :style="{height: padding - 10 + 'px'}"
                 v-if="m005.bookPub.length > 0"></div>
        </template>

        <template v-if="key === 'm006'">
            <div data-minimum class="data-minimum text_000_bold"
                 v-style.fs="fontSize + 2"
                 v-style.mb="padding"
                 v-if="m006.projectPar.length > 0"
            >
                学术成果 - 参与课题
            </div>

            <template v-for="(data, index) in m006.projectPar">
                <div data-minimum class="data-minimum text_000_bold"
                     v-style.fs="fontSize - 2"
                     v-style.mb="padding - 4"
                     v-if="data.begin_date"
                >
                    {{ data.begin_date.start }}-{{ data.begin_date.end }}
                </div>

                <div data-minimum class="data-minimum text_000_bold"
                     v-style.fs="fontSize - 2"
                     v-style.mb="padding - 10"
                     v-if="data.project_name"
                >
                    {{ data.project_name }}
                </div>

                <div data-minimum class="data-minimum text_000 swap_flex flex_wrap"
                     v-style.fs="fontSize - 2"
                     v-style.mb="padding - 4"
                     v-if="data.project_type || data.project_cycle || data.project_fund"
                >
                    <div :style="{marginRight: padding + 'px'}" v-if="data.project_type">
                        课题类型：{{ data.project_type }}
                    </div>
                    <div :style="{marginRight: padding + 'px'}" v-if="data.project_cycle">
                        周期：{{ data.project_cycle }}
                    </div>
                    <div :style="{marginRight: padding + 'px'}" v-if="data.project_fund">
                        经费：{{ data.project_fund }}
                    </div>
                </div>

                <div data-minimum class="data-minimum text_eee"
                     v-style.fs="fontSize - 2"
                     v-style.mb="padding - 8"
                     v-if="data.project_name"
                >
                    批准号：{{ data.project_number }}
                </div>

                <div data-minimum class="data-minimum text_eee"
                     v-style.fs="fontSize - 2"
                     v-style.mb="padding - 8"
                     v-if="data.project_field"
                >
                    研究方向：{{ data.project_field }}
                </div>

                <div data-minimum class="data-minimum text_eee"
                     v-style.fs="fontSize - 2"
                     v-style.mb="padding - 8"
                     v-if="data.approval_unit"
                >
                    审批单位：{{ data.approval_unit }}
                </div>

                <div data-minimum class="data-minimum text_eee"
                     v-style.fs="fontSize - 2"
                     v-style.mb="padding - 8"
                     v-if="data.project_role"
                >
                    课题角色：{{ data.project_role }}
                </div>

                <div data-minimum class="data-minimum text_eee"
                     v-style.fs="fontSize - 2"
                     v-style.mb="padding - 8"
                     v-if="data.skill_practice && data.skill_practice.length > 0"
                >
                    技能实践情况：
                    <template v-for="(practice, idx) in data.skill_practice">{{ practice }}
                        <template v-if="idx !== data.skill_practice.length - 1">、</template>
                    </template>
                </div>

                <div data-minimum class="data-minimum"
                     v-style.mb="padding"
                     v-if="data.contribution_content"
                >
                    <div>
                        <cvtEditor :index="idx"
                                   v-for="(html, idx) in cvtEditor(data.contribution_content)" label="课题贡献："
                                   class-name="text_eee"
                                   :html="html"
                                   :padding="0"
                                   :font-size="fontSize - 2"
                        ></cvtEditor>
                    </div>
                </div>

                <div data-minimum class="data-minimum"
                     v-style.mb="padding - 8"
                     v-if="data.role_desc"
                >
                    <div>
                        <cvtEditor :index="idx"
                                v-for="(html, idx) in cvtEditor(data.role_desc)" label="课题角色描述："
                                class-name="text_eee"
                                :html="html"
                                :padding="0"
                                :font-size="fontSize - 2"
                        ></cvtEditor>
                    </div>
                </div>
            </template>

            <div data-minimum class="data-minimum" :style="{height: padding - 10 + 'px'}"
                 v-if="m006.projectPar.length > 0"></div>
        </template>

        <template v-if="key === 'm007'">
            <div data-minimum class="data-minimum text_000_bold"
                 v-style.fs="fontSize + 2"
                 v-style.mb="padding"
                 v-if="m007.patent.length > 0 || m007.standard.length > 0 || m007.copyright.length > 0"
            >
                学术成果 - 知识产权
            </div>

            <div data-minimum class="data-minimum text_000_bold"
                 v-style.fs="fontSize - 2"
                 v-style.mb="padding - 4"
                 v-if="m007.patent.length > 0"
            >
                专利
            </div>

            <div data-minimum class="data-minimum"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-for="(data, index) in m007.patent"
            >
                <div class="text_eee"
                     v-style.mb="padding - 10"
                     v-if="data.type">
                    {{ data.type }}
                </div>
                <div class="text_000"
                     v-if="data.quoted">
                    {{ data.quoted }}
                </div>
            </div>

            <div data-minimum class="data-minimum" :style="{height: padding - 6 + 'px'}"
                 v-if="m007.patent.length > 0"></div>

            <div data-minimum class="data-minimum text_000_bold"
                 v-style.fs="fontSize - 2"
                 v-style.mb="padding - 4"
                 v-if="m007.standard.length > 0"
            >
                标准规范
            </div>

            <div data-minimum class="data-minimum"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-for="(data, index) in m007.standard"
            >
                <div class="text_000"
                     v-if="data.quoted">
                    {{ data.quoted }}
                </div>
            </div>

            <div data-minimum class="data-minimum" :style="{height: padding - 10 + 'px'}"
                 v-if="m007.standard.length > 0"></div>

            <div data-minimum class="data-minimum text_000_bold"
                 v-style.fs="fontSize - 2"
                 v-style.mb="padding - 4"
                 v-if="m007.copyright.length > 0"
            >
                著作权
            </div>

            <div data-minimum class="data-minimum"
                 v-style.mb="padding - 4"
                 v-style.fs="fontSize - 2"
                 v-for="(data, index) in m007.copyright"
            >
                <div class="text_000"
                     v-if="data.quoted">
                    {{ data.quoted }}
                </div>
            </div>

            <div data-minimum class="data-minimum" :style="{height: padding - 10 + 'px'}"
                 v-if="m007.copyright.length > 0"></div>
        </template>

        <template v-if="key === 'm008'">
            <div data-minimum class="data-minimum text_000_bold"
                 v-style.fs="fontSize + 2"
                 v-style.mb="padding"
                 v-if="m008.awards.length > 0"
            >
                学术成果 - 获评奖项
            </div>

            <template v-for="(data, index) in m008.awards">
                <div data-minimum class="data-minimum text_000_bold"
                     v-style.fs="fontSize - 2"
                     v-style.mb="padding - 10"
                     v-if="data.award_name"
                >
                    {{ data.award_name }}
                </div>

                <div data-minimum class="data-minimum text_000 swap_flex flex_wrap"
                     v-style.fs="fontSize - 2"
                     v-style.mb="padding - 4"
                     v-if="data.award_level || data.award_rank || data.award_order"
                >
                    <div style="margin-right: 10px" class="left_border_000_short" v-if="data.award_rank">
                        奖项类别：{{ data.award_rank }}
                    </div>
                    <div style="margin-right: 10px" v-if="data.award_level">
                        奖项等级：{{ data.award_level }}
                    </div>
                    <div class="left_border_000_short" v-if="data.award_order">
                        奖项排名：{{ data.award_order }}
                    </div>
                </div>

                <div data-minimum class="data-minimum text_eee"
                     v-style.fs="fontSize - 2"
                     v-style.mb="padding"
                     v-if="data.award_note"
                >
                    <div>
                        <cvtEditor :index="idx"
                                v-for="(html, idx) in cvtEditor(data.award_note)" label="详细信息："
                                class-name="text_eee"
                                :html="html"
                                :padding="0"
                                :font-size="fontSize - 2"
                        ></cvtEditor>
                    </div>
                </div>
            </template>

            <div data-minimum class="data-minimum" :style="{height: padding - 10 + 'px'}"
                 v-if="m008.awards.length > 0"></div>
        </template>

        <template v-if="key === 'm009'">
            <div data-minimum class="data-minimum text_000_bold"
                 v-style.fs="fontSize + 2"
                 v-style.mb="padding"
                 v-if="m009.show"
            >
                求职意向
            </div>

            <div data-minimum class="data-minimum text_000_bold"
                 v-style.fs="fontSize - 2"
                 v-style.mb="padding - 4"
                 v-if="m009.work_position"
            >
                {{ m009.work_position }}
            </div>

            <div data-minimum class="data-minimum text_eee"
                 v-style.fs="fontSize - 2"
                 v-style.mb="padding - 4"
                 v-if="m009.user_intention_region"
            >
                意向地区：{{ m009.user_intention_region.country }}-{{ m009.user_intention_region.province }}-
                {{ m009.user_intention_region.city }}
            </div>

            <div data-minimum class="data-minimum text_eee"
                 v-style.fs="fontSize - 2"
                 v-style.mb="padding - 4"
                 v-if="m009.job_type"
            >
                工作类型：{{ m009.job_type }}
            </div>

            <div data-minimum class="data-minimum text_eee"
                 v-style.fs="fontSize - 2"
                 v-style.mb="padding - 4"
                 v-if="m009.salary_info"
            >
            期望薪资：{{ (m009.salary_info.min === 0 && m009.salary_info.max === 0) ? '面议' : (m009.salary_info.min + '-' + m009.salary_info.max) }}
            </div>

            <div data-minimum class="data-minimum text_eee"
                 v-style.fs="fontSize - 2"
                 v-style.mb="padding - 4"
                 v-if="m009.arrival_time"
            >
                到岗时间：{{ m009.arrival_time }}
            </div>

            <div data-minimum class="data-minimum" :style="{height: padding - 10 + 'px'}"
                 v-if="m009.show"></div>
        </template>

        <template v-if="key === 'm010'">
            <div data-minimum class="data-minimum text_000_bold"
                 v-style.fs="fontSize + 2"
                 v-style.mb="padding"
                 v-if="m010.organ.length > 0"
            >
                社团组织
            </div>

            <template v-for="(data, index) in m010.organ">
                <div data-minimum class="data-minimum text_000_bold swap_flex flex_wrap"
                     v-style.fs="fontSize - 2"
                     v-style.mb="padding - 10"
                >
                    <div style="margin-right: 10px;"
                         v-if="data.begin_date"
                    >
                        {{ data.begin_date.start }}-{{ data.begin_date.end }}
                    </div>
                    <div class="left_border_000_short"
                         v-if="data.organization_name"
                    >
                        {{ data.organization_name }}
                    </div>
                </div>

                <div data-minimum class="data-minimum text_000 swap_flex flex_wrap"
                     v-style.fs="fontSize - 2"
                     v-style.mb="padding - 8"
                     v-if="data.organization_type || data.service_position"
                >
                    <div style="margin-right: 20px;"
                         v-if="data.organization_type"
                    >
                        {{ data.organization_type }}
                    </div>
                    <div v-if="data.service_position"
                    >
                        {{ data.service_position }}
                    </div>
                </div>

                <div data-minimum class="data-minimum"
                     v-style.mb="padding"
                     v-if="data.duty_performance"
                >
                    <div>
                        <cvtEditor :index="idx"
                                v-for="(html, idx) in cvtEditor(data.duty_performance)"
                                class-name="text_eee"
                                :html="html"
                                :padding="0"
                                :font-size="fontSize - 2"
                        ></cvtEditor>
                    </div>
                </div>
            </template>

            <div data-minimum class="data-minimum" :style="{height: padding - 10 + 'px'}"
                 v-if="m010.organ.length > 0"></div>
        </template>

        <template v-if="key === 'm014'">
            <template v-for="(data, index) in m014.otherModule">
                <div data-minimum class="data-minimum text_bold"
                     v-style.mb="padding - 4"
                     v-style.fs="fontSize"
                     v-style.color="color"
                >
                    {{ data.module_name }}
                </div>
                <cvtEditor :index="idx"
                        v-for="(html, idx) in cvtEditor(data.module_content)"
                        class-name="text_eee"
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
                if (this.cvData.config && this.cvData.config.color) {
                    return this.cvData.config.color
                }
                return '#F5B600'
            },
        },
        // language=Vue
        template: `
            <div>
            <div ref="swap1" class="${className} cvt_swap cvt_swap1"></div>
            <div ref="swap2" class="${className} cvt_swap cvt_swap2"></div>
            <div ref="swap3" class="${className} cvt_swap cvt_swap3"></div>
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
})(resumeTemplate)